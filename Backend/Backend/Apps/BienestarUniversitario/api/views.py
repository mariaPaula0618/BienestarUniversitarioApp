from rest_framework import generics
from django.core import serializers
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.contrib.auth import (
    authenticate
)
from ..models import Activity, UserApp, Inscription, Course, Param, Assistance
from .serializers import ActivitySerializer, UserAppSerializer, InscriptionSerializer, CourseSerializer, ParamSerializer, AssistanceSerializer, ReportDaySerializer

class ActivityListView(generics.ListAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class ActivityDetailView(generics.RetrieveAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class ActivityCreateView(generics.CreateAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class EnrollUserAppListView(generics.ListAPIView):
    serializer_class = UserAppSerializer
    def get_queryset(self):

        activity_id = self.kwargs['activity']
        result = UserApp.objects.raw('select * from user_app inner join (select * from inscription where activity_id ='+activity_id+') y on user_app.email= y.user_id')
        return  result

class InscriptionCreateView(generics.CreateAPIView):
    queryset = Inscription.objects.all()
    serializer_class = InscriptionSerializer

class UserAppCreateView(generics.CreateAPIView):
    queryset = UserApp.objects.all()
    serializer_class = UserAppSerializer

class UserAppListByRoleView(generics.ListAPIView):
    serializer_class = UserAppSerializer
    def get_queryset(self):
        role = self.kwargs['role']
        queryset = UserApp.objects.filter(role=role)
        return queryset

class CourseCreateView(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class ProfessorActivitysAvailables(generics.ListAPIView):
    serializer_class = ActivitySerializer
    def get_queryset(self):
        professor_id = self.kwargs['professor']
        result = Activity.objects.filter(professor = professor_id)
        return result
        
class SettingsBackend(BaseBackend): 
    def authenticate(self, request, username=None, password=None):
        user_app = UserApp.objects.get(email = username)
        login_valid = (user_app.email == username)
        pwd_valid = check_password(password, user_app.password)
        print(user_app)
        if login_valid and pwd_valid:
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                # Create a new user. There's no need to set a password
                # because only the password from settings.py is checked.
                user = User(username=username)
                user.is_staff = True
                user.is_superuser = True
                user.save()
            return user
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None


class ListActivitiesOfStudents(generics.ListAPIView):
    serializer_class = ActivitySerializer
    def get_queryset(self):
        student_id = self.kwargs['student'] + ""
        result = Activity.objects.raw("select * from activity inner join (select * from inscription where user_id ='"+student_id+"') y on activity.activity_id= y.activity_id")
        return  result


class ParamsListView(generics.ListAPIView):
    queryset = Param.objects.all()
    serializer_class = ParamSerializer

class CoursesListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class AssistanceCreateView(generics.CreateAPIView):
    queryset = Assistance.objects.all()
    serializer_class = AssistanceSerializer


class AssistanceListView(generics.ListAPIView):
    queryset = Assistance.objects.all()
    serializer_class = AssistanceSerializer


class reportByDate(generics.ListAPIView):
    def get_queryset(self):
        activity = self.kwargs['activity']
        result = Assistance.objects.raw("select date_trunc('year', date), count(*), 1 as assistance_id from assistance inner join (select activity_id,course_id  from course where activity_id ="+ activity +") y on assistance.course_id  = y.course_id group by 1")
        lista = serializers.serialize('json', result)
        print(lista)
        return  lista
    serializer_class = ReportDaySerializer