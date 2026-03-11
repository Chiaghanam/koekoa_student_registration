from django.urls import path
from .views import RegisterView, StudentListView

urlpatterns = [
    path('register/',RegisterView.as_view(), name='register'),
    path('students/', StudentListView.as_view(), name='student-list'),
    
]