from django.urls import path
from .views import TransactionList, TransactionDetail, TransactionViewSet
from . import views

app_name = 'api_yolov5'

urlpatterns = [
  path('', TransactionList.as_view(), name='listcreate'),
  path('<int:pk>/', TransactionDetail.as_view(), name='detailcreate'),
  path('detectuielements/', TransactionViewSet.as_view({'post': 'create'}), name='detect-elements'),  
]