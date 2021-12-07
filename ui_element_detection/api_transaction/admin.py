from django.contrib import admin
from .models import Transaction


admin.site.register(Transaction)
# class AuthorAdmin(admin.ModelAdmin):
#     list_display = ('description', 'id', 'status', 'author')


