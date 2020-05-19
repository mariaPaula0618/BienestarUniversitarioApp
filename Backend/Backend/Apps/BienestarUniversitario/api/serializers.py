# todos/serializers.py
from rest_framework import serializers
from ..models import Activity, UserApp, Inscription


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