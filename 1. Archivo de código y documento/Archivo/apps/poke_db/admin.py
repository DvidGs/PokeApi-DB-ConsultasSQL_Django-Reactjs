from django.contrib import admin
#from .models import Pokemon, Tipo, Habilidad
from .models import Pokemon

@admin.register(Pokemon)
class PokemonAdmin(admin.ModelAdmin):
    list_display = [('nombre')]
    pass

#admin.site.register(Pokemon)
