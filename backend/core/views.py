from typing import Self

from django.shortcuts import render
from rest_framework import generics
from .serializer import RegisterSerializer, StudentSerializer
from .models import Student
from rest_framework.permissions import AllowAny, IsAdminUser,IsAuthenticated
# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
    

class StudentProfile(generics.RetrieveAPIView):
    serializer_class   = StudentSerializer      
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return Student.objects.get(user=self.request.user)


