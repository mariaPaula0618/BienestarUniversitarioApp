from django.urls import path

from .views import (
    ActivityListView,
    ActivityDetailView, 
    ActivityCreateView,
    EnrollUserAppListView,
    UserAppCreateView,
    InscriptionCreateView,
    CourseCreateView,
    ProfessorActivitysAvailables,
    UserAppListByRoleView
)

urlpatterns = [
    path('activity/', ActivityListView.as_view()),
    path('create/activity/', ActivityCreateView.as_view()),
    path('activity/<pk>', ActivityDetailView.as_view()),
    path('enrollstudents/<activity>', EnrollUserAppListView.as_view()),
    path('users/<role>', UserAppListByRoleView.as_view()),

    path('create/user/', UserAppCreateView.as_view()),

    path('create/inscription/', InscriptionCreateView.as_view()),

    path('create/course/', CourseCreateView.as_view()),
    path('<professor>/activitys', ProfessorActivitysAvailables.as_view()),
]