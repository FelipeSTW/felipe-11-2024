import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAlmacenPokemon } from '@/stores/almacenPokemon'
import type { DetallePokemon } from '@/types/pokemon'

export const useVistaEquipo = () => {
  const router = useRouter()
  const almacen = useAlmacenPokemon()
  const mensajeAccion = ref<string>('')

  const mostrarMensaje = (mensaje: string) => {
    mensajeAccion.value = mensaje
    setTimeout(() => {
      mensajeAccion.value = ''
    }, 3000)
  }

  const manejarEliminacion = (pokemon: DetallePokemon) => {
    almacen.eliminarDeEquipo(pokemon.id)
    mostrarMensaje(`${pokemon.name} ha sido eliminado del equipo`)
  }

  const navegarAInicio = () => {
    router.push('/')
  }

  const hayEspacioDisponible = () => {
    return almacen.equipoPokemon.length < almacen.LIMITE_EQUIPO
  }

  return {
    almacen,
    mensajeAccion,
    manejarEliminacion,
    navegarAInicio,
    hayEspacioDisponible
  }
}