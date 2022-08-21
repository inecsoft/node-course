import re
from django.shortcuts import render
from django.http import HttpResponse
from .models import ToDoList, Item

# Create your views here.

def index(response, id):
    ls = ToDoList.objects.get(id=id)
    return render(response, "users/base.html", {"ls": ls})

def about(response):
    return HttpResponse("<h1>Hello Inecsoft in about us!! </h1>")

def home(response):
    return render(response, "users/home.html", {})