<script setup lang="ts">
import { useVistaEquipo } from './vista-equipo'
import EquipoPokemon from '@/components/pokemon/equipo-pokemon/EquipoPokemon.vue'

const {
  almacen,
  mensajeAccion,
  manejarEliminacion,
  navegarAInicio,
  hayEspacioDisponible
} = useVistaEquipo()
</script>

<template src="./vista-equipo.html"></template>
<style src="./vista-equipo.scss" lang="scss" scoped></style>