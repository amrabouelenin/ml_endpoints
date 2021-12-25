from rest_framework import generics
from api_transaction.models import Transaction
from .serializers import TransactionSerializer
from rest_framework.response import Response
from rest_framework import viewsets
from django.http import HttpResponse
from django.contrib.auth.models import User
from api_yolov5.yolov5 import detect
from django.conf import settings
import json


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
        generated_code.write('from PyQt5.QtWidgets import QApplication,QLabel, QCheckBox, QWidget, QPushButton, QLineEdit\n')
        generated_code.write('from PyQt5.QtGui import QIcon\n')
        generated_code.write('from PyQt5.QtCore import pyqtSlot\n')

   
def write_code_for_window(file_name, h, w):
    with open(file_name, 'a') as generated_code:
        generated_code.write('def window():\n')
        generated_code.write('\tapp = QApplication(sys.argv)\n')
        generated_code.write('\twidget = QWidget()\n')
        generated_code.write(f'\twidget.setGeometry(0,0,{w},{h})\n')
        generated_code.write('\twidget.setWindowTitle("PyQt5 Button Click Example")\n')

def write_code_for_execution(file_name):
    with open(file_name, 'a') as generated_code:
        generated_code.write('# Executing code\n')
        generated_code.write('\twidget.show()\n')
        generated_code.write('\tsys.exit(app.exec_())\n')
        generated_code.write("if __name__ == '__main__':\n")
        generated_code.write('\twindow()\n')

def write_code_for_html_header(file_name,h,w):
    with open(file_name, 'a') as generated_code:
        generated_code.write("""
        <!DOCTYPE html>
        <html>
            <head>
                <title>UI Detected Html</title>
            </head>
            <div style="
                background-color: darkgray;
                width:""" + f' {w}px;height: {h}px;' + """
            ">
            """)

def write_code_for_html_end(file_name):
    with open(file_name, 'a') as generated_code:
        generated_code.write("""
            </div>
        </html>
            """)


def write_code_for_button(type, file_name, element_id,x,y,w,h):
    if type == 'pyqt':
        with open(file_name, 'a') as generated_code:
            generated_code.write('# Generate Button Code\n')
            generated_code.write(f'\tbutton{element_id} = QPushButton(widget)\n')
            generated_code.write(f"\tbutton{element_id}.setText('Button{element_id}')\n")
            generated_code.write(f"\tbutton{element_id}.setGeometry({x}, {y}, {w}, {h})\n")
    else:
        with open(file_name, 'a') as generated_code:
            generated_code.write("""
                <input type="submit" style="
                    position: absolute;z-index: 1;
                    width:""" + f' {w}px;height: {h}px;left: {x}px;top: {y}px;' + """
            ">
            """)

def write_code_for_textbox(type, file_name, element_id,x,y,w,h):
    if type == 'pyqt' :
        with open(file_name, 'a') as generated_code:
            generated_code.write('# Generate Textbox Code\n')
            generated_code.write(f'\ttextbox{element_id} = QLineEdit(widget)\n')
            generated_code.write(f"\ttextbox{element_id}.setGeometry({x}, {y}, {w}, {h})\n")
    else:
        with open(file_name, 'a') as generated_code:
            generated_code.write("""
                <input style="
                    position: absolute;z-index: 1;
                    width:""" + f' {w}px;height: {h}px;left: {x}px;top: {y}px;' + """
            ">
            """)

def write_code_for_listitem(type, file_name, element_id,x,y,w,h):
    if type == 'pyqt' :
        with open(file_name, 'a') as generated_code:
            generated_code.write('# Generate Textbox Code\n')
            generated_code.write(f'\ttextbox{element_id} = QLineEdit(widget)\n')
            generated_code.write(f"\ttextbox{element_id}.setGeometry({x}, {y}, {w}, {h})\n")
    else:
        with open(file_name, 'a') as generated_code:
            generated_code.write("""
            <ul style="
                    position: absolute;z-index: 1;
                    width:""" + f' {w}px;height: {h}px;left: {x}px;top: {y}px;' + """
            ">
            <li >List Item</li>
            </ul>
                <input style="
                    
            ">
            """)

def write_code_for_label(type, file_name, element_id,x,y,w,h):
    if type == 'pyqt':
        with open(file_name, 'a') as generated_code:
            generated_code.write('# Generate Label Code\n')
            generated_code.write(f'\tlabel{element_id} = QLabel("Text placeholder",widget)\n')
            generated_code.write(f"\tlabel{element_id}.setGeometry({x}, {y}, {w}, {h})\n")
    else:
        with open(file_name, 'a') as generated_code:
            generated_code.write("""
                <span  style="
                    position: absolute;background-color: red;
                    ont-size: 10px;
                    width:""" + f' {w}px;height: {h}px;left: {x}px;top: {y}px;' + """
            ">Textplaceholder</span>
            """)

def write_code_for_checkbox(type,file_name, element_id,x,y,w,h):
    if type== 'pyqt':

        with open(file_name, 'a') as generated_code:
            generated_code.write('# Generate Checkbox Code\n')
            generated_code.write(f'\tchecktbox{element_id} = QCheckBox(widget)\n')
            generated_code.write(f"\tchecktbox{element_id}.setGeometry({x}, {y}, {w}, {h})\n")
    else:
        with open(file_name, 'a') as generated_code:
            generated_code.write("""
                <input type="checkbox" style="
                    position: absolute;z-index: 1;
                    width:""" + f' {w}px;height: {h}px;left: {x}px;top: {y}px;' + """
            ">
            """)

def write_code_for_radiobutton(type, file_name, element_id,x,y,w,h):
    if type == 'pyqt':
        with open(file_name, 'a') as generated_code:
            generated_code.write('# Generate Radio button Code\n')
            generated_code.write(f'\tradiobutton{element_id} = QRadioButton(widget)\n')
            generated_code.write(f"\tradiobutton{element_id}.setGeometry({x}, {y}, {w}, {h})\n")
    else:
        with open(file_name, 'a') as generated_code:
            generated_code.write("""
                <input type="radio" style="
                    position: absolute;z-index: 1;
                    width:""" + f' {w}px;height: {h}px;left: {x}px;top: {y}px;' + """
            ">
            """)

def write_code_for_image(type, file_name, element_id,x,y,w,h):
    if type == 'pyqt':
        with open(file_name, 'a') as generated_code:
            generated_code.write('# Generate Image Code\n')
            generated_code.write(f'\ttextbox{element_id} = QLineEdit(widget)\n')
            generated_code.write(f'\ttextbox{element_id}.setStyleSheet("background-color: red;")\n')
            generated_code.write(f"\ttextbox{element_id}.setGeometry({x}, {y}, {w}, {h})\n")
    else:
        with open(file_name, 'a') as generated_code:
            generated_code.write("""
            <img src='https://image.shutterstock.com/z/stock-vector-no-image-available-icon-template-for-no-image-or-picture-coming-soon-vector-illustration-isolated-1036735678.jpg' style="
                position: absolute;
                width:""" + f' {w}px;height: {h}px;left: {x}px;top: {y}px;' + """
            ">
            """)

def write_code_for_switcher(type, file_name, element_id,x,y,w,h):
    if type == 'pyqt':
        with open(file_name, 'a') as generated_code:
            generated_code.write('# Generate Switcher Code\n')
            generated_code.write(f'\tbutton{element_id} = QPushButton("switcher",widget)\n')
            generated_code.write(f"\tbutton{element_id}.setCheckable(True)\n")
            generated_code.write(f'\tbutton{element_id}.setStyleSheet("background-color: lightgrey;")\n')
            generated_code.write(f"\tbutton{element_id}.setGeometry({x}, {y}, {w}, {h})\n")
    else:
        with open(file_name, 'a') as generated_code:
            generated_code.write("""
            <style>
            .switch {
                position: absolute;
                display: inline-block;
                width: 40px;
                height: 23px;
                left:""" + f"{x}px;" + f"top: {y}px;" + """
            }
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                -webkit-transition: .4s;
                transition: .4s;
            }
            .slider:before {
                position: absolute;
                content: "";
                height: 15px;
                width: 15px;
                left: 4px;
                top: 4px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
            }
            input:checked + .slider {
                background-color: #2196F3;
            }
            input:focus + .slider {
                box-shadow: 0 0 1px #2196F3;
            }
            input:checked + .slider:before {
                -webkit-transform: translateX(18px);
                -ms-transform: translateX(18px);
                transform: translateX(18px);
            }
            /* Rounded sliders */
            .slider.round {
                border-radius: 34px;
            }

            .slider.round:before {
                border-radius: 50%;
            }
            </style>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>  """)



def generate_code(bboxes,exp_number, type ):
    classes = [
      'Image','Icon', 'Map View', 'Video',
      'Checkbox','Date Picker','Input', 'List Item',
      'Multi-Tab', 'Radio Button','On/Off Switch',
      'Text Button','Slider','Text'
    ]

    image_height = bboxes['image_height']
    image_width = bboxes['image_width']
    

    file_name = f'media/images/exp{exp_number}/code.txt'

    if type == 'pyqt':
        # Code for importing library
        write_code_for_library(file_name)
        write_code_for_window(file_name, image_height, image_width)
    else:
        write_code_for_html_header(file_name,image_height,image_width)

    element_id = 1
    i = 0
    for bbox in bboxes['bounds']:

        x = bbox[0]
        y = bbox[1]
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        print(bboxes['classes'][i])
        cls_indx = int(bboxes['classes'][i])
        cls = classes[cls_indx]
        if cls == 'Text':
            write_code_for_label(type,file_name, element_id, x,y,w,h)
        elif cls == 'Icon':
            write_code_for_image(type,file_name, element_id, x,y,w,h)

        elif cls == 'Image':
            write_code_for_image(type,file_name, element_id, x,y,w,h)
        elif cls == 'Map View':
            pass
        elif cls == 'Video':
            write_code_for_image(type,file_name, element_id, x,y,w,h)
        elif cls == 'Checkbox':
            write_code_for_checkbox(type,file_name, element_id, x,y,w,h)
        elif cls == 'Date Picker':
            pass
        elif cls == 'Input':
            write_code_for_textbox(type,file_name, element_id, x,y,w,h)
        elif cls == 'List Item':
            write_code_for_listitem(type, file_name, element_id,x,y,w,h)
        elif cls == 'Multi-Tab':
            write_code_for_textbox(type,file_name, element_id, x,y,w,h)
        elif cls == 'Radio Button':
            write_code_for_radiobutton(type,file_name, element_id, x,y,w,h)
        elif cls == 'On/Off Switch':
            write_code_for_switcher(type,file_name, element_id, x,y,w,h)
        elif cls == 'Text Button':
            write_code_for_button(type,file_name, element_id, x,y,w,h)
        elif cls == 'Slider':
            pass
        else:
            write_code_for_textbox(type,file_name, element_id, x,y,w,h)
        element_id = element_id +1
        i = i+1
    if type == 'pyqt':
        write_code_for_execution(file_name)
    else:
        write_code_for_html_end(file_name)



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
        type = request.data['type']
        transaction = Transaction.objects.create(author=author, description=description, ml_models=ml_models,
            status=status, image_to_detect=image_to_detect, type=type)
        
        # Run machine learning Yolov5
        detected_image_path, image_to_detect_path, exp_number = yolov5_run(transaction=transaction, confidence=confidence)

        # bound box path
        file_name = str(transaction.image_to_detect).split(settings.IMAGES_UPLOAD_PATH)
        file_name = file_name[1].split('.')
        bbox_txt_path = f'media/images/exp{exp_number}/labels/{file_name[0]}.txt'
        bbox_json_path = f'media/images/exp{exp_number}/labels/{file_name[0]}.json'

        
        # read generate bboxes file
        # bboxfile = open(bbox_txt_path, 'r')
        bboxfile = open(bbox_json_path)
        #bboxes= bboxfile.readlines()
        bboxes = json.load(bboxfile)
        
        # generate code
        generate_code(bboxes,exp_number, type)

        return Response({
            'image_to_detect': image_to_detect_path,
            'detected_image_path': detected_image_path,
            'code_generated': f'media/images/exp{exp_number}/code.txt'
        })



        