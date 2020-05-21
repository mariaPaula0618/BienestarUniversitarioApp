# todos/serializers.py
from rest_framework import serializers
from ..models import Activity, UserApp, Inscription, Course, Param, Assistance


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'activity_id',     
            'activity_name', 
            'place', 
            'description', 
            'professor',
        )
        model = Activity

class UserAppSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'email',
            'first_name',
            'last_name', 
            'password',
            'role',
        )
        model = UserApp


class InscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'inscription_id',
            'user',
            'activity',
        )
        model =  Inscription

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'course_id',
            'activity',
            'start_hour',
            'end_hour',
            'week_day',
        )
        model = Course


class ParamSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'param_id',
            'param_name'
        )
        model = Param


class AssistanceSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'assistance_id',
            'inscription',
            'course',
            'date'
        )
        model = Assistance

class ReportDaySerializer(serializers.Serializer):
    def to_internal_value(self, data):
        return {
            'date_trunc': data.get('date_trunc'),
            'count': data.get('count'),
            'assistance_id': data.get('assistance_id')
        }
    def to_representation(self, instance):
        
        return {
            'date_trunc': instance.date_trunc,
            'count': instance.count,
            'assistance_id': instance.assistance_id
        }
