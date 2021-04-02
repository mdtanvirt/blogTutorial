from django.urls import path
from .views import artical_list, article_details

urlpatterns = [
    path('articles/', artical_list),
    path('articles/<int:pk>', article_details),
]
