<script setup lang="ts">
import { useCadenaEvolutiva, type CadenaEvolutivaProps } from './cadena-evolutiva'

const props = defineProps<CadenaEvolutivaProps>()
const { evoluciones, cargando, error } = useCadenaEvolutiva(props)
</script>

<template src="./cadena-evolutiva.html"></template>
<style src="./cadena-evolutiva.scss" lang="scss" scoped></style>