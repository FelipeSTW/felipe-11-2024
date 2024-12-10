<script setup lang="ts">
import { useDetallePokemon } from './detalle-pokemon'
import ReproductorSonido from '../reproductor-sonido/ReproductorSonido.vue'
import EstadisticasPokemon from '../estadisticas-pokemon/EstadisticasPokemon.vue'
import CadenaEvolutiva from '../cadena-evolutiva/CadenaEvolutiva.vue'

const props = defineProps({
  pokemon: Object,
  especie: Object,
  obtenerDescripcion: Function
})
</script>

<template src="./detalle-pokemon.html"></template>
<style src="./detalle-pokemon.scss" lang="scss" scoped></style>
