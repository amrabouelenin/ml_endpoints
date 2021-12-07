from rest_framework import generics
from api_transaction.models import Transaction
from .serializers import TransactionSerializer


class TransactionList(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer


class TransactionDetail(generics.RetrieveDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer