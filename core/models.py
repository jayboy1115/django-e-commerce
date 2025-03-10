from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    city = models.CharField(max_lenght=100, blank=True, null=True)
    state = models.CharField(max_lenght=100, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    phone = models.CharField(max_lenght=15, blank=True, null=True)

    def__str__(self):
        return self.username

# Create your models here.
