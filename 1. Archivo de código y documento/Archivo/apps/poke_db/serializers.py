from rest_framework import serializers
from .models import *

class PokemonSerializer(serializers.ModelSerializer):

    class Meta:
        model=Pokemon
        fields=[
            'id',
            'nombre',
            'tipo',
            'habilidades',
            'estadisticas',
        ]


class ResultadoSerializer(serializers.Serializer):
    resultado = serializers.ListField()