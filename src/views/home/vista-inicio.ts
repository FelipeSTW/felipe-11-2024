import { ref } from 'vue'
import { useAlmacenPokemon } from '@/stores/almacenPokemon'
import type { DetallePokemon } from '@/types/pokemon'

export const useVistaInicio = () => {
  const almacen = useAlmacenPokemon()
  const mensajeSeleccion = ref<string>('')

  const manejarSeleccionPokemon = (pokemon: DetallePokemon) => {
    const resultado = almacen.agregarAEquipo(pokemon)
    
    if (resultado) {
      mensajeSeleccion.value = `¡${pokemon.nombre} ha sido añadido a tu equipo!`
    } else {
      mensajeSeleccion.value = 'Tu equipo está completo'
    }

    setTimeout(() => {
      mensajeSeleccion.value = ''
    }, 3000)
  }

  const espaciosDisponibles = ref(almacen.obtenerEspaciosDisponibles())

  return {
    mensajeSeleccion,
    espaciosDisponibles,
    manejarSeleccionPokemon
  }
}