from django.shortcuts import render
from rest_framework import generics
from .serializer import RegisterSerializer
from .models import Student
from rest_framework.permissions import AllowAny
# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny)
    




