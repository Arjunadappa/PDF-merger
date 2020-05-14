from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers

from mysite.core import views

urlpatterns = [
    path('upload/',views.BookUploadView.as_view()),
    path('merge/',views.BookMergeView.as_view()),
    path('delete/<int:pk>/',views.bookdeleteView.as_view()),
    path('', views.Home.as_view(), name='home'),
    path('books/', views.book_list, name='book_list'),
    path('books/upload/', views.upload_book, name='upload_book'),
    path('books/<int:pk>/', views.delete_book, name='delete_book'),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)