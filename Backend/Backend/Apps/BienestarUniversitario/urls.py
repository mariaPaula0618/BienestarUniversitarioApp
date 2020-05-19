from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
      path('activity', views.CreateActivity.as_view()),
]