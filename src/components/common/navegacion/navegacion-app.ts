import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import pokeball from '@/assets/pokeball.svg'

export const useNavegacionApp = () => {
  const route = useRoute()
  const logoUrl = ref(pokeball)

  const esPaginaInicio = computed(() => route.path === '/')

  return {
    esPaginaInicio,
    logoUrl
  }
}