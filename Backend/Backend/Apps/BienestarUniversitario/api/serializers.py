# todos/serializers.py
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from ..models import Activity, UserApp, Inscription, Course, Assistance


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


class AssistanceSerializer(serializers.ModelSerializer):
    class Meta:
        fields= (
            'assistance_id',
            'inscription',
            'course',
            'date',
        )
        model = Assistance
        
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        fields = (
            'username',
            'email',
            'first_name',
            'last_name', 
            'password',
        )
        model = User


class UserSerializerWithToken(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    token = serializers.SerializerMethodField()
   

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
        )
        user.set_password(validated_data['password']) 
        user.save()
        return user

    class Meta:
        model = User
        fields = ('token', 'username','email', 'password', 'first_name', 'last_name')