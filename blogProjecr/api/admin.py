from django.contrib import admin
from .models import Article

# Register your models here.
#admin.site.register(Article) #This actuall normal way to register the model for admin

# The aulternative way to register the model for admin
@admin.register(Article)
class ArticalModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')