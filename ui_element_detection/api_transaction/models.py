from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Transaction(models.Model):

    # class TransactionObjects(models.Manager):
    #     def get_queryset(self):
    #         return super().get_queryset() .filter(status='successfull')

    # API Transaction Status Options
    options = (
        ('failed', 'Failed'),
        ('successfull', 'Successfull'),
    )

    # Available models option
    models_options = (
        ('yolov5', 'YOLOV5'),
        ('yolox', 'YOLOX'),
        ('faster_rcnn', 'Faster - RCNN'),
    )

    # Text containing list of ui elememnt detected
    detected_uielements = models.TextField(null=True)

    # Text containing list of bound box for detected ui elelements
    detected_boundboxs = models.TextField(null=True)

    # Description of the screenshot to be detected
    description = models.TextField(null=True)
    transaction_datetime = models.DateTimeField(default=timezone.now)

    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='api_transactions')
    
    status = models.CharField(
        max_length=11, choices=options, default='successfull')
    
    ml_models = models.CharField(
        max_length=11, choices=models_options, default='yolov5')

    # @todo define accuracy field mPA
    # @todo define code generated in pyQT
    # @todo define file to be detected
    image_to_detect = models.FileField(blank=True, default='', upload_to='uploads/')
    confidence = models.FloatField(default=0.25)
    # @todo define file after detection process

    # objects = models.Manager()  # default manager
    # transactionobjects = TransactionObjects()  # custom manager

    class Meta:
        ordering = ('-transaction_datetime',)

    def __str__(self):
        return self.description