import { useRoute } from 'vue-router'
import { computed } from 'vue'

export const useNavegacionApp = () => {
  const route = useRoute()

  const esPaginaInicio = computed(() => route.path === '/')

  return {
    esPaginaInicio
  }
}