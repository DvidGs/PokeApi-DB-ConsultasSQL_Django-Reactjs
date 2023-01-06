from django.db import models

'''
class Tipo(models.Model):
    nombre = models.CharField(max_length=50)

class Habilidad(models.Model):
    nombre = models.CharField(max_length=50)

class Pokemon(models.Model):
    nombre = models.CharField(max_length=50)
    tipo = models.ManyToManyField(Tipo)
    habilidades = models.ManyToManyField(Habilidad)
    estadisticas = models.TextField()
'''

class Pokemon(models.Model):
    nombre = models.CharField(max_length=50)
    tipo = models.CharField(max_length=200)
    habilidades = models.CharField(max_length=200)
    estadisticas = models.TextField()

    def __str__(self):
        return self.nombre


