<script setup lang="ts">
import { useDetallePokemon, type DetallePokemonProps } from './detalle-pokemon'
import ReproductorSonido from '../reproductor-sonido/ReproductorSonido.vue'
import EstadisticasPokemon from '../estadisticas-pokemon/EstadisticasPokemon.vue'
import CadenaEvolutiva from '../cadena-evolutiva/CadenaEvolutiva.vue'

const props = defineProps<DetallePokemonProps>()
const { 
  pokemon, 
  especie, 
  cargando, 
  error, 
  obtenerDescripcion 
} = useDetallePokemon(props)
</script>

<template src="./detalle-pokemon.html"></template>
<style src="./detalle-pokemon.scss" lang="scss" scoped></style>