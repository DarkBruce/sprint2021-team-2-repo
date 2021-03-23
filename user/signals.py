from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import DineSafelyUser, User_Profile
from allauth.socialaccount.signals import pre_social_login
from django.contrib.auth import get_user_model
from django.http import HttpResponse
from allauth.exceptions import ImmediateHttpResponse
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import render
from django.contrib.auth import login
from django.contrib import messages
from django.shortcuts import redirect

@receiver(post_save, sender=DineSafelyUser)
def create_profile(sender, instance, created, **kwargs):
    if created:
        User_Profile.objects.create(user=instance)


@receiver(post_save, sender=DineSafelyUser)
def save_profile(sender, instance, **kwargs):
    instance.user_profile.save()


@receiver(pre_social_login)
def handle_duplicate_email(sender, request, sociallogin, **kwargs):
    try:
        email = sociallogin.account.extra_data['email']
    except:
        email=None
    if get_user_model().objects.filter(email=email).exists():
        user = get_user_model().objects.get(email=email)
        if not list(user.socialaccount_set.all()):
            form = AuthenticationForm()
            messages.error(request, 'Account already exists.')
            raise ImmediateHttpResponse(redirect('/user/login'))
