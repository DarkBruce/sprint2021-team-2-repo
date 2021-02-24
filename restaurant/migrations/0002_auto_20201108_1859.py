# Generated by Django 3.1.2 on 2020-11-08 18:59

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="userquestionnaire",
            name="saved_on",
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name="userquestionnaire",
            name="user_id",
            field=models.CharField(default="", max_length=200),
        ),
    ]
