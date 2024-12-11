<script setup lang="ts">
import { useListaPokemon } from './lista-pokemon'
import TarjetaPokemon from '../tarjeta-pokemon/TarjetaPokemon.vue'
import { useAlmacenPokemon } from '@/stores/almacenPokemon'
import type { DetallePokemon } from '@/types/pokemon'
import { onMounted, onUnmounted } from 'vue'

const { pokemonList, cargando, error, cargarSiguientePagina } = useListaPokemon()
const almacenPokemon = useAlmacenPokemon()

const seleccionarPokemon = (pokemon: DetallePokemon) => {
  almacenPokemon.agregarAEquipo(pokemon)
}

let isScrolling = false;

const onScroll = async () => {
  if (isScrolling) return;

  const scrollable = document.documentElement;
  const nearBottom = scrollable.scrollTop + window.innerHeight >= scrollable.scrollHeight - 100;

  if (nearBottom && !cargando.value) {
    isScrolling = true;
    await cargarSiguientePagina();
    isScrolling = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template src="./lista-pokemon.html"></template>
<style src="./lista-pokemon.scss" lang="scss" scoped></style>
