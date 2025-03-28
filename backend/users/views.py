from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
from .models import PsychologistDocuments
from .serializers import PsychologistDocumentsSerializer
from .permissions import IsAdminUser
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import User
from .serializers import UserSerializer, PsychologistSerializer

@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    try:
        # Get user by email
        user = User.objects.get(email=email)
        # Authenticate with username (email) and password
        auth_user = authenticate(username=user.username, password=password)
        
        if auth_user is not None:
            refresh = RefreshToken.for_user(auth_user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'user': UserSerializer(auth_user).data
            })
        else:
            return Response(
                {'detail': 'Contraseña incorrecta'},
                status=status.HTTP_401_UNAUTHORIZED
            )
    except User.DoesNotExist:
        return Response(
            {'detail': 'No existe una cuenta con este correo'},
            status=status.HTTP_401_UNAUTHORIZED
        )

class PsychologistDocumentsViewSet(viewsets.ModelViewSet):
    queryset = PsychologistDocuments.objects.all()
    serializer_class = PsychologistDocumentsSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.action in ['review', 'list']:
            return [IsAdminUser()]
        return [IsAuthenticated()]

    def perform_create(self, serializer):
        serializer.save(psychologist=self.request.user)

    @action(detail=True, methods=['post'])
    def review(self, request, pk=None):
        document = self.get_object()
        status = request.data.get('status')
        rejection_reason = request.data.get('rejection_reason', '')

        if status not in ['APPROVED', 'REJECTED']:
            return Response(
                {'error': 'Invalid status'},
                status=status.HTTP_400_BAD_REQUEST
            )

        document.status = status
        document.reviewed_at = timezone.now()
        document.reviewed_by = request.user
        document.rejection_reason = rejection_reason if status == 'REJECTED' else ''
        document.save()

        return Response(self.get_serializer(document).data)


@api_view(['GET', 'PATCH'])
@permission_classes([IsAuthenticated])
def psychologist_profile(request):
    try:
        if request.method == 'PATCH':
            # Remove email from request data if present
            if 'email' in request.data:
                request.data.pop('email')
            
            # Allow profile_image to be blank
            if 'profile_image' in request.data and not request.data['profile_image']:
                request.data['profile_image'] = None

            # Handle JSON fields properly
            for field in ['specialties', 'target_populations', 'intervention_areas']:
                if field in request.data and not request.data[field]:
                    request.data[field] = []

            serializer = PsychologistSerializer(request.user, data=request.data, partial=True)
            if serializer.is_valid():
                updated_user = serializer.save()
                # Return fresh data after update
                return Response(PsychologistSerializer(updated_user).data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        # GET request - ensure we return all fields
        serializer = PsychologistSerializer(request.user)
        return Response(serializer.data)
            
    except Exception as e:
        print(f"Error updating profile: {str(e)}")
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
