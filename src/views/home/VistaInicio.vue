<script setup lang="ts">
import { useVistaInicio } from './vista-inicio'
import ListaPokemon from '@/components/pokemon/lista-pokemon/ListaPokemon.vue'
import { useAlmacenPokemon } from '@/stores/almacenPokemon'

const almacen = useAlmacenPokemon()
const {
  mensajeSeleccion,
  espaciosDisponibles,
  manejarSeleccionPokemon
} = useVistaInicio()
</script>

<template src="./vista-inicio.html"></template>
<style src="./vista-inicio.scss" lang="scss" scoped></style>