from rest_framework import generics
from api_transaction.models import Transaction
from .serializers import TransactionSerializer
from rest_framework.response import Response
from rest_framework import viewsets
from django.http import HttpResponse
from django.contrib.auth.models import User
from api_yolov5.yolov5 import detect
from django.conf import settings


class TransactionList(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer


class TransactionDetail(generics.RetrieveDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

def write_code_for_library(file_name):
    with open(file_name, 'w') as generated_code:
        generated_code.write('# Code Libraries\n')
        generated_code.write('import sys\n')
        generated_code.write('from PyQt5.QtWidgets import QApplication, QWidget, QPushButton\n')
        generated_code.write('from PyQt5.QtGui import QIcon\n')
        generated_code.write('from PyQt5.QtCore import pyqtSlot\n')

   
def write_code_for_window(file_name, w, h):
    with open(file_name, 'a') as generated_code:
        generated_code.write('def window():\n')
        generated_code.write('\tapp = QApplication(sys.argv)\n')
        generated_code.write('\twidget = QWidget()\n')
        generated_code.write(f'\twidget.setGeometry(50,50,{w},{h})\n')
        generated_code.write('\twidget.setWindowTitle("PyQt5 Button Click Example")\n')

def write_code_for_execution(file_name):
    with open(file_name, 'a') as generated_code:
        generated_code.write('# Executing code\n')
        generated_code.write('\twidget.show()\n')
        generated_code.write('\tsys.exit(app.exec_())\n')
        generated_code.write("if __name__ == '__main__':\n")
        generated_code.write('\twindow()\n')

def write_code_for_text(file_name, element_id,x,y,w,h):
    with open(file_name, 'a') as generated_code:
        generated_code.write('# Generate Button Code\n')
        generated_code.write(f'\tbutton{element_id} = QPushButton(widget)\n')
        generated_code.write(f"\tbutton{element_id}.setText('Button{element_id}')\n")
        generated_code.write(f"\tbutton{element_id}.setGeometry({x}, {y}, {w}, {h})\n")

def generate_code(bboxes,exp_number ):
    classes = [
      'Image','Icon', 'Map View', 'Video',
      'Checkbox','Date Picker','Input', 'List Item',
      'Multi-Tab', 'Radio Button','On/Off Switch',
      'Text Button','Slider','Text'
    ]

    file_name = f'media/images/exp{exp_number}/code.txt'
    # Code for importing library
    write_code_for_library(file_name)
    write_code_for_window(file_name, 680, 900)

    #13 0.494444 0.0802083 0.937037 0.05625
    #Iterate through each box
    element_id = 1
    for bbox in bboxes:
        box = bbox.split(' ')
        cls_indx = int(box[0])

        dw = 1080
        dh = 1920
        x = (float(box[1]) + float(box[3]))/2.0
        y = (float(box[2]) + float(box[4]))/2.0
        w = float(box[3]) - float(box[1])
        h = float(box[2]) - float(box[4])
        x = x*50
        w = w*dw
        y = y*50
        h = h*dh
        cls = classes[cls_indx]
        if cls == 'Text':
            write_code_for_text(file_name, element_id, x,y,w,h)
        else:
            write_code_for_text(file_name, element_id, x,y,w,h)
        element_id = element_id +1

    write_code_for_execution(file_name)



def yolov5_run(transaction, confidence):
    # Initialize Yolov5 parameters
    imgsz = [640]
    imgsz *= 2 if len(imgsz) == 1 else 1  # expand
    weights = settings.YOLOV5_WEIGHTS
    export_images_path = settings.MEDIA_ROOT / 'images/'
    # Source image --> Uploaded image by user
    image_to_detect_path = f'media/{transaction.image_to_detect}'

    # Run detection and return the save directory path
    save_dir = detect.run(weights=weights, save_txt=True,
        source= image_to_detect_path,imgsz=imgsz, conf_thres=confidence,project=export_images_path)
    
    # Prepare response form running process
    image_name = image_to_detect_path.split('/')[2]
    exp_number = save_dir.split('exp')[1]
    detected_image_path = f'media/images/exp{exp_number}/{image_name}'

    return detected_image_path, image_to_detect_path, exp_number



class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def create(self, request, *args, **kwargs):

        author = User.objects.get(id=request.data['author'])
        description = request.data['description']
        ml_models = request.data['ml_models']
        status = request.data['status']
        image_to_detect = request.data['image_to_detect']
        confidence = float(request.data['confidence'])
        transaction = Transaction.objects.create(author=author, description=description, ml_models=ml_models,
            status=status, image_to_detect=image_to_detect)
        
        # Run machine learning Yolov5
        detected_image_path, image_to_detect_path, exp_number = yolov5_run(transaction=transaction, confidence=confidence)

        # bound box path
        file_name = str(transaction.image_to_detect).split(settings.IMAGES_UPLOAD_PATH)
        file_name = file_name[1].split('.')
        bbox_txt_path = f'media/images/exp{exp_number}/labels/{file_name[0]}.txt'
        
        # read generate bboxes file
        bboxfile = open(bbox_txt_path, 'r')
        bboxes= bboxfile.readlines()

        # generate code
        generate_code(bboxes,exp_number)

        return Response({
            'image_to_detect': image_to_detect_path,
            'detected_image_path': detected_image_path,
            'code_generated': f'media/images/exp{exp_number}/code.txt'
        })



        