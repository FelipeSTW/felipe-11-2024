<script setup lang="ts">
import { useReproductorSonido, type ReproductorSonidoProps } from './reproductor-sonido'

const props = defineProps<ReproductorSonidoProps>()
const { 
  reproduciendo, 
  reproducirSonido, 
  onAudioEnd,
  Volume2,
  VolumeX 
} = useReproductorSonido()
</script>

<template src="./reproductor-sonido.html"></template>
<style src="./reproductor-sonido.scss" lang="scss" scoped></style>