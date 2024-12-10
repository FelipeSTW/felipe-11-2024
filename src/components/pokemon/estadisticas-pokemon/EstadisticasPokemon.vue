<script setup lang="ts">
import { useEstadisticasPokemon, type EstadisticasPokemonProps } from './estadisticas-pokemon'

const props = defineProps<EstadisticasPokemonProps>()
const estadisticas = props.estadisticas || [] // Valor predeterminado si estadisticas es undefined
const { estadisticasFormateadas } = useEstadisticasPokemon({ estadisticas })

const obtenerClaseColor = (valor: number): string => {
  if (valor < 50) return 'bajo'
  if (valor < 80) return 'medio'
  if (valor < 120) return 'alto'
  return 'muy-alto'
}
</script>

<template src="./estadisticas-pokemon.html"></template>
<style src="./estadisticas-pokemon.scss" lang="scss" scoped></style>