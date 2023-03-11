from django.contrib import admin

from .models import Job, Category


admin.site.register(Category)
admin.site.register(Job)