from rest_framework import generics
from api_transaction.models import Transaction
from .serializers import TransactionSerializer
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework import viewsets
from django.http import HttpResponse
from django.contrib.auth.models import User
from api_yolov5.yolov5 import detect


class TransactionList(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer


class TransactionDetail(generics.RetrieveDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer


class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def create(self, request, *args, **kwargs):
        # cover = request.data['image_to_detect']
        # title = request.data['title']
        author = User.objects.get(id=request.data['author'])
        description = request.data['description']
        ml_models = request.data['ml_models']
        status = request.data['status']
        image_to_detect = request.data['image_to_detect']
        confidence = float(request.data['confidence'])
        print(confidence)
        #serializer = TransactionSerializer(data=request.data)
        mytransaction = Transaction.objects.create(author=author, description=description, ml_models=ml_models,
            status=status, image_to_detect=image_to_detect)
        
        ############################### MACHINE LEARNING / OBJECT DETECTION ####################################################
        image_to_detect_path = f'media/{mytransaction.image_to_detect}'
        imgsz = [640]
        imgsz *= 2 if len(imgsz) == 1 else 1  # expand
        weights = '/var/www/html/ml_endpoints/ui_element_detection/api_yolov5/yolov5/best_5.pt'
        save_dir = detect.run(weights=weights,
         source= image_to_detect_path,imgsz=imgsz, conf_thres=confidence,
         project='/var/www/html/ml_endpoints/ui_element_detection/media/images/')

        # image_path = f'{mytransaction.image_to_detect}'
        image_name = image_to_detect_path.split('/')[2]
        detected_image_path = save_dir.split('exp')[1]
        detected_image_path = f'media/images/exp{detected_image_path}{image_name}'

        return Response({'image_to_detect': image_to_detect_path, 'save_dir': save_dir,
         'detected_image_path': detected_image_path})

        