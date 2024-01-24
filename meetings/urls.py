from django.urls import path
from meetings import views
from django.urls import path


urlpatterns = [
    path('meetings/', views.MeetingList.as_view()),
    path('meetings/<int:pk>/', views.MeetingDetail.as_view())
]