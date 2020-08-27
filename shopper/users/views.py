from django.shortcuts import render, HttpResponse, redirect
from .forms import Registrationform
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout


# Create your views here.

@login_required(login_url='login')
def index(request):
    return render(request, 'account/home.html')

def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        print('here1')
        if user:
            login(request, user)
            print('here')
            return redirect('index')
        else:
            messages.error(request, 'username or password incorrect')


    return render(request, 'account/login.html')

def registerPage(request):
    if request.method =='POST':
        form = Registrationform(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'account was created for {username}')
            return redirect('login')

    else:
        form = Registrationform()

    context = {'form':form}
    return render(request, 'account/register.html', context)



def logoutUser(request):
    logout(request)
    return redirect('login')