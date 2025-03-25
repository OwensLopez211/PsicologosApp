from rest_framework import serializers
from .models import User, PsychologistDocuments

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'email', 'username', 'user_type', 
            'first_name', 'last_name', 'phone',
            'rut', 'gender', 'profile_image', 
            'region', 'city'
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class PsychologistSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = UserSerializer.Meta.fields + (
            'specialization', 'license_number', 
            'bio', 'hourly_rate'
        )

class PsychologistDocumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PsychologistDocuments
        fields = (
            'professional_degree', 'health_registry', 
            'tax_id', 'id_card', 'status', 
            'submitted_at', 'reviewed_at'
        )