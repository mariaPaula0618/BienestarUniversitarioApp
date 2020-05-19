from django.urls import path

from .views import (
    ActivityListView,
    ActivityDetailView, 
    ActivityCreateView,
    EnrollUserAppListView,
    UserAppCreateView,
    InscriptionCreateView,
)

urlpatterns = [
    path('activity/', ActivityListView.as_view()),
    path('create/activity/', ActivityCreateView.as_view()),
    path('<pk>', ActivityDetailView.as_view()),
    path('enrollstudents/<activity>', EnrollUserAppListView.as_view()),

    path('create/user/', UserAppCreateView.as_view()),

    path('create/inscription/', InscriptionCreateView.as_view()),

]