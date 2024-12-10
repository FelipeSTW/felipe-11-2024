<script setup lang="ts">
import { useAlmacenPokemon } from '@/stores/almacenPokemon'
import ReproductorSonido from '../reproductor-sonido/ReproductorSonido.vue'
import EstadisticasPokemon from '../estadisticas-pokemon/EstadisticasPokemon.vue'
import type { DetallePokemon } from '@/types/pokemon'

const almacen = useAlmacenPokemon()

defineProps<{
  pokemonList: DetallePokemon[]
}>()

const emit = defineEmits<{
  (e: 'eliminar', pokemon: DetallePokemon): void
}>()

function manejarEliminacion(pokemon: DetallePokemon) {
  emit('eliminar', pokemon)
}
</script>

<template src="./equipo-pokemon.html"></template>
<style src="./equipo-pokemon.scss" lang="scss" scoped></style>