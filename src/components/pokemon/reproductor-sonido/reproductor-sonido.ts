import { ref } from 'vue'
import { Volume2, VolumeX } from 'lucide-react'

export interface ReproductorSonidoProps {
  urlSonido: string
  nombrePokemon: string
}

export const useReproductorSonido = () => {
  const reproduciendo = ref(false)
  const audio = ref<HTMLAudioElement | null>(null)

  const reproducirSonido = () => {
    if (!audio.value) {
      return
    }

    if (reproduciendo.value) {
      audio.value.pause()
      audio.value.currentTime = 0
      reproduciendo.value = false
    } else {
      audio.value.play()
      reproduciendo.value = true
    }
  }

  const onAudioEnd = () => {
    reproduciendo.value = false
  }

  return {
    reproduciendo,
    reproducirSonido,
    onAudioEnd,
    Volume2,
    VolumeX
  }
}