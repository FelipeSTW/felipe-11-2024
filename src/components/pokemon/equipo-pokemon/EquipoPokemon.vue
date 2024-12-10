<script setup lang="ts">
import ReproductorSonido from '../reproductor-sonido/ReproductorSonido.vue'
import { useEquipoPokemon } from './equipo-pokemon'
import type { DetallePokemon } from '@/types/pokemon'

const { 
  equipo, 
  equipoVacio, 
  espaciosDisponibles, 
  eliminarDelEquipo, 
  verDetallePokemon  
} = useEquipoPokemon()

defineProps<{
  pokemonList: DetallePokemon[]
}>()

const emit = defineEmits<{
  (e: 'eliminar', pokemon: DetallePokemon): void
}>()

function manejarEliminacion(pokemon: DetallePokemon) {
  eliminarDelEquipo(pokemon.id)
  emit('eliminar', pokemon)
}
</script>>

<template src="./equipo-pokemon.html"></template>
<style src="./equipo-pokemon.scss" lang="scss" scoped></style>

