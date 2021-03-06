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
    ListActivitiesOfStudents,
    UserAppListByRoleView,
    current_user,
    UserList,
    ParamsListView,
    CoursesListView,
    AssistanceListView,
    AssistanceCreateView,
    reportByDate
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

    path('assitance/', AssistanceListView.as_view()),
    path('current_user/', current_user),
    path('users/', UserList.as_view())
    path('params', ParamsListView.as_view()),
    path('course', CoursesListView.as_view()),
    path('assistance/create', AssistanceCreateView.as_view()),
    path('reportDay/<activity>', reportByDate.as_view())
]