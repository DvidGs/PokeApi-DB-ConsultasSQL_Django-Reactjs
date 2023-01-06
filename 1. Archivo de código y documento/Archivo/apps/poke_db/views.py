from django.shortcuts import render
from django.db import connection
from rest_framework.response import Response
from .models import Pokemon
from .serializers import PokemonSerializer, ResultadoSerializer
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

class CrearActualizarPokemonView(CreateAPIView, UpdateAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    lookup_field = 'id'
    permission_classes = [AllowAny]

@api_view(['POST'])
@csrf_exempt
@permission_classes([AllowAny])
def consulta_sql(request):
    #consulta = request.POST.get('consulta')
    consulta = request.GET.get('consulta')
    with connection.cursor() as cursor:
        cursor.execute(consulta)
        resultado = cursor.fetchall()
    return Response({'resultado': resultado})