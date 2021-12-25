from rest_framework import serializers
from api_transaction.models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'author', 'confidence', 'description', 'ml_models','status','type',  'image_to_detect')
        model = Transaction