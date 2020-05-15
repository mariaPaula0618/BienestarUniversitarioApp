# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Activity(models.Model):
    activity_id = models.AutoField(primary_key=True)
    activity_name = models.CharField(max_length=255)
    place = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True, null=True)
    professor = models.ForeignKey('UserApp', models.DO_NOTHING, db_column='professor', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'activity'


class Assistance(models.Model):
    assistance_id = models.AutoField(primary_key=True)
    inscription = models.ForeignKey('Inscription', models.DO_NOTHING)
    course = models.ForeignKey('Course', models.DO_NOTHING)
    date = models.DateField()

    class Meta:
        managed = False
        db_table = 'assistance'


class Course(models.Model):
    course_id = models.AutoField(primary_key=True)
    activity = models.ForeignKey(Activity, models.DO_NOTHING)
    start_hour = models.TimeField(blank=True, null=True)
    end_hour = models.TimeField(blank=True, null=True)
    week_day = models.ForeignKey('Param', models.DO_NOTHING, db_column='week_day')

    class Meta:
        managed = False
        db_table = 'course'


class Inscription(models.Model):
    inscription_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('UserApp', models.DO_NOTHING, blank=True, null=True)
    activity = models.ForeignKey(Activity, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'inscription'


class Param(models.Model):
    param_id = models.AutoField(primary_key=True)
    param_name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'param'


class RoleUser(models.Model):
    role_id = models.AutoField(primary_key=True)
    role_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'role_user'


class UserApp(models.Model):
    email = models.CharField(primary_key=True, max_length=-1)
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    password = models.CharField(max_length=255)
    role = models.ForeignKey(RoleUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'user_app'
