<script setup lang="ts">
import { useEquipoPokemon } from './equipo-pokemon'
import ReproductorSonido from '../reproductor-sonido/ReproductorSonido.vue'
import EstadisticasPokemon from '../estadisticas-pokemon/EstadisticasPokemon.vue'

const {
  equipo,
  equipoVacio,
  espaciosDisponibles,
  eliminarDelEquipo,
  verDetallePokemon,
  obtenerDistribucionTipos,
  obtenerPromedioEstadisticas
} = useEquipoPokemon()
</script>

<template src="./equipo-pokemon.html"></template>
<style src="./equipo-pokemon.scss" lang="scss" scoped></style>