from rest_framework import serializers
from .models import Student
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    student_id = serializers.CharField(write_only=True)
    phone = serializers.CharField(write_only=True)  
    course = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'student_id', 'phone', 'course' , 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        student_id = validated_data.pop('student_id')
        phone = validated_data.pop('phone')
        course = validated_data.pop('course')
        user = User.objects.create_user(**validated_data)
        Student.objects.create(
            user=user,
            student_id=student_id,
            phone=phone,
            course=course)
        return user

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"
        
        