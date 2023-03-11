from django.forms import ModelForm

from .models import Job


class JobForm(ModelForm):
    class Meta:
        model = Job
        fields = (
            'category', 
            'title', 
            'description', 
            'position_salary', 
            'position_location', 
            'company_name',
            'company_location',
            'company_email',
        )