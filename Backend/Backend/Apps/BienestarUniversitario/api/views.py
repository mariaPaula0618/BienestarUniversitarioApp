from rest_framework import generics

from ..models import Activity, UserApp, Inscription, Course
from .serializers import ActivitySerializer, UserAppSerializer, InscriptionSerializer, CourseSerializer

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


class CourseCreateView(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class ProfessorActivitysAvailables(generics.ListAPIView):
    serializer_class = ActivitySerializer
    def get_queryset(self):
        professor_id = self.kwargs['professor']
        result = Activity.objects.filter(professor = professor_id)
        return result
        
