from django.urls import path
from django.urls.resolvers import URLPattern
from django.views.generic import TemplateView

app_name = 'frontend'

urlpatterns = [
  path('', TemplateView.as_view(template_name='frontend/index.html')),
]