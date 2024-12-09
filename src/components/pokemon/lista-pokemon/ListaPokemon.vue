<script setup lang="ts">
import { useListaPokemon } from './lista-pokemon'
import TarjetaPokemon from '../tarjeta-pokemon/TarjetaPokemon.vue'
import { useAlmacenPokemon } from '@/stores/almacenPokemon'

const { pokemonList, cargando, error, cargarSiguientePagina } = useListaPokemon()
const almacenPokemon = useAlmacenPokemon()

const seleccionarPokemon = (pokemon: DetallePokemon) => {
  almacenPokemon.agregarAEquipo(pokemon)
}
</script>

<template src="./lista-pokemon.html"></template>
<style src="./lista-pokemon.scss" lang="scss" scoped></style>