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
<<<<<<< HEAD
    ListActivitiesOfStudents,
=======
    UserAppListByRoleView
>>>>>>> b2b0605181a9f63d7e5b871a7564f7c767e7b2fe
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
    path('activitys/<professor>', ProfessorActivitysAvailables.as_view()),

    path('activities/<student>', ListActivitiesOfStudents.as_view() ),
]