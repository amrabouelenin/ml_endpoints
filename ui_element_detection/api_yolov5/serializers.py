from rest_framework import serializers
from api_transaction.models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'author', 'description', 'ml_models','status')
        model = Transaction