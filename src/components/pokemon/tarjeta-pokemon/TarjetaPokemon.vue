<script setup lang="ts">
import { useTarjetaPokemon, type TarjetaPokemonProps } from './tarjeta-pokemon'
import type { DetallePokemon } from '@/types/pokemon'

const props = defineProps<TarjetaPokemonProps>()
const emit = defineEmits<{
  (e: 'seleccionar', pokemon: DetallePokemon): void
}>()

const { estaEnEquipo, puedeSerSeleccionado, manejarClick } = useTarjetaPokemon(props, emit)
</script>

<template src="./tarjeta-pokemon.html"></template>
<style src="./tarjeta-pokemon.scss" lang="scss" scoped></style>