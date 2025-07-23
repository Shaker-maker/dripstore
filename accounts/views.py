from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import login, authenticate, logout
from .forms import CustomAuthenticationForm, CustomUserCreationForm
import uuid
from django.core.mail import send_mail
from django.conf import settings
from django.urls import reverse
from django.http import HttpResponse, JsonResponse
from .models import CustomUser

# Create your views here.

def register_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            # revent login before verification
            user.is_active = False
            user.email_verification_token = uuid.uuid4().hex
            user.save()

            # send verification email
            verification_link = request.build_absolute_uri(
                reverse('accounts:verify_email', args=[user.email_verification_token])
            )
            print("Sending verification email to:", user.email)

            send_mail(
                'Verify Your Email',
                f'Click the link to verify your email: {verification_link}',
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )
            print("Email sent!")


            messages.success(request, 'Account created! Check your email to verify your account')
            return redirect('accounts:login')
        
    else:
           
        form = CustomUserCreationForm()
    return render(request, 'accounts/register.html', {'form':form})


def verify_email(request, token):
    try:
        user = CustomUser.objects.get(email_verification_token=token)
        user.is_email_verified = True
        user.is_active = True
        user.email_verification_token = None
        user.save()
        messages.success(request, 'Email verified. You can now log in')
        return redirect('accounts:login')
    except CustomUser.DoesNotExist:
        return HttpResponse('Invalid or expired token', status=400)




def login_view(request):
    if request.method == 'POST':
        form = CustomAuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()

            if not user.is_email_verified:
                messages.error(request, 'Pease verify your email before loggin in. ')
                return redirect('accounts:login')
            login(request, user)
            messages.success(request, f'Welcome back, {user.username}!')
            return redirect('store:home')

            
    else:
        form = CustomAuthenticationForm()
    return render(request, 'accounts/login.html', {'form' : form})


def logout_view(request):
    logout(request)
    messages.success(request, 'You have been logged out.')
    return redirect('store:home')


def check_email_username(request):
    email = request.GET.get('email',None)
    username = request.GET.get('username', None)


    data = {}

    if email:
        exists = CustomUser.objects.filter(email=email).exists()
        data['email_taken'] = exists

    if username:
        exists = CustomUser.objects.filter(username=username).exists()
        data['username_taken'] = exists

    return JsonResponse(data)


from django.shortcuts import redirect
from django.urls import reverse

def password_reset_complete_redirect(request):
    messages.success(request, "Password reset successful. You can now log in.")
    return redirect(reverse('accounts:login'))
