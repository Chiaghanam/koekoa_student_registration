from django.urls import path
from .views import RegisterView, StudentProfile

urlpatterns = [
    path('register/',RegisterView.as_view(), name='register'),
    path('students/profile/', StudentProfile.as_view(), name='student-profile'),
    
]