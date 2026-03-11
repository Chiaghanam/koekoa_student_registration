from django.db import models
from django.contrib.auth.models import User
# Create your models here.

gender_CHOICES = [
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Other', 'Other'),
]

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    student_id = models.CharField(max_length=20, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=20, choices=gender_CHOICES, default='Male')
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    course = models.CharField(max_length=100)
    password = models.CharField(max_length=128)

    def __str__(self):
        return f"{self.name} -- {self.student_id}"