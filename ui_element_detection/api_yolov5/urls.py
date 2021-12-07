from django.urls import path
from .views import TransactionList, TransactionDetail

app_name = 'api_yolov5'

urlpatterns = [
  path('', TransactionList.as_view(), name='listcreate'),
  path('<int:pk>/', TransactionDetail.as_view(), name='detailcreate'),
]