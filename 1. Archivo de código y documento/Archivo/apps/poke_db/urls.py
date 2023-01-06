from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('pokemones', CrearActualizarPokemonView.as_view()),
    path('consulta-sql', views.consulta_sql, name='consulta-sql'),
]