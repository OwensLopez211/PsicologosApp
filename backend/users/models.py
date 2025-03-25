from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    USER_TYPE_CHOICES = (
        ('CLIENT', 'Cliente'),
        ('PSYCHOLOGIST', 'Psicólogo'),
        ('ADMIN', 'Administrador'),
    )
    
    GENDER_CHOICES = (
        ('MALE', 'Masculino'),
        ('FEMALE', 'Femenino'),
        ('OTHER', 'Otro'),
        ('PREFER_NOT_TO_SAY', 'Prefiero no decirlo'),
    )
    
    user_type = models.CharField(
        max_length=20,
        choices=USER_TYPE_CHOICES,
        default='CLIENT'
    )
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    
    # Basic Info fields
    rut = models.CharField(max_length=12, blank=True, null=True)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES, blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    region = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    
    # Additional fields for psychologists
    specialization = models.CharField(max_length=100, blank=True)
    license_number = models.CharField(max_length=50, blank=True)
    bio = models.TextField(blank=True)
    hourly_rate = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    
    # Fields for verification
    is_verified = models.BooleanField(default=False)
    verification_token = models.CharField(max_length=100, blank=True)
    
    class Meta:
        db_table = 'users'


class PsychologistDocuments(models.Model):
    DOCUMENT_STATUS = (
        ('PENDING', 'Pendiente'),
        ('APPROVED', 'Aprobado'),
        ('REJECTED', 'Rechazado'),
    )

    psychologist = models.OneToOneField(User, on_delete=models.CASCADE, related_name='documents')
    professional_degree = models.FileField(upload_to='psychologist_documents/degrees/')
    health_registry = models.FileField(upload_to='psychologist_documents/health_registry/')
    tax_id = models.FileField(upload_to='psychologist_documents/tax_id/')
    id_card = models.FileField(upload_to='psychologist_documents/id_cards/')
    
    status = models.CharField(max_length=20, choices=DOCUMENT_STATUS, default='PENDING')
    submitted_at = models.DateTimeField(auto_now_add=True)
    reviewed_at = models.DateTimeField(null=True, blank=True)
    reviewed_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='reviewed_documents')
    rejection_reason = models.TextField(blank=True)

    class Meta:
        db_table = 'psychologist_documents'
