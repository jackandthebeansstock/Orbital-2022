from django.shortcuts import render
from django.http import HttpResponse



def home(request):
    return render(request, 'website/home.html')

def about(request):
    return render(request, 'website/about.html')

