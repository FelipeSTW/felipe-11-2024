import { computed } from 'vue'
import type { DetallePokemon } from '@/types/pokemon'
import { useAlmacenPokemon } from '@/stores/almacenPokemon'

export interface TarjetaPokemonProps {
  pokemon: DetallePokemon
  modoSeleccion?: boolean
}

export const useTarjetaPokemon = (props: TarjetaPokemonProps, emit: any) => {
  const almacenPokemon = useAlmacenPokemon()

  const estaEnEquipo = computed(() => {
    return almacenPokemon.existeEnEquipo(props.pokemon.id)
  })

  const puedeSerSeleccionado = computed(() => {
    return props.modoSeleccion && 
           !estaEnEquipo.value && 
           almacenPokemon.obtenerEspaciosDisponibles() > 0
  })

  function manejarClick() {
    if (puedeSerSeleccionado.value) {
      emit('seleccionar', props.pokemon)
    }
  }

  return {
    estaEnEquipo,
    puedeSerSeleccionado,
    manejarClick
  }
}