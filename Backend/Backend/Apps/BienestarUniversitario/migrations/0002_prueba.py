# Generated by Django 3.0.6 on 2020-05-21 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BienestarUniversitario', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prueba',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'prueba',
                'managed': False,
            },
        ),
    ]