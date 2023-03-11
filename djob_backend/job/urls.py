from django.urls import path

from . import views


urlpatterns = [
    path('', views.BrowseJobsView.as_view()),
    path('categories/', views.CategoriesView.as_view()),
    path('my/', views.MyJobsView.as_view()),
    path('create/', views.CreateJobView.as_view()),
    path('newest/', views.NewestJobsView.as_view()),
    path('<int:pk>/', views.JobsDetailView.as_view()),
    path('<int:pk>/delete/', views.CreateJobView.as_view()),
    path('<int:pk>/edit/', views.CreateJobView.as_view()),
]
