from django.urls import path
from . import views

urlpatterns = [
    path('auth/login/', views.login_view, name='login'),
    path('psicologo/profile/', views.psychologist_profile, name='psychologist-profile'),
]