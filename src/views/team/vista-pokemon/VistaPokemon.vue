<script setup lang="ts">
import { useVistaPokemon } from './vista-pokemon'
import DetallePokemon from '@/components/pokemon/detalle-pokemon/DetallePokemon.vue'

const { 
  pokemon, 
  especie, 
  cargando, 
  error, 
  navegarAEquipo, 
  obtenerDescripcionEspanol 
} = useVistaPokemon()
</script>

<template src="./vista-pokemon.html"></template>
<style src="./vista-pokemon.scss" lang="scss" scoped></style>