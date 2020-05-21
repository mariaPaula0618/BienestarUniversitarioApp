from rest_framework import generics
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions


from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.contrib.auth import (
    authenticate
)
from ..models import Activity, UserApp, Inscription, Course, Assistance
from .serializers import ActivitySerializer, UserAppSerializer, InscriptionSerializer, CourseSerializer, AssistanceSerializer, UserSerializer, UserSerializerWithToken

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

class AssistanceListView(generics.ListAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer 


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        print(request.data)
        serializer = UserSerializerWithToken(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)