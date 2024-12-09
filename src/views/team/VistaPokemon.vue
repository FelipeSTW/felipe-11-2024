<script setup lang="ts">
import { useVistaPokemon } from './vista-pokemon'
import ReproductorSonido from '@/components/pokemon/reproductor-sonido/ReproductorSonido.vue'
import EstadisticasPokemon from '@/components/pokemon/estadisticas-pokemon/EstadisticasPokemon.vue'
import CadenaEvolutiva from '@/components/pokemon/cadena-evolutiva/CadenaEvolutiva.vue'

const {
  pokemon,
  especie,
  cadenaEvolutiva,
  cargando,
  error,
  navegarAEquipo,
  obtenerDescripcionEspanol
} = useVistaPokemon()
</script>

<template src="./vista-pokemon.html"></template>
<style src="./vista-pokemon.scss" lang="scss" scoped></style>