import { ref } from 'vue'
import type { DetallePokemon, EspeciePokemon } from '@/types/pokemon'

export interface DetallePokemonProps {
  pokemon: DetallePokemon
  especie: EspeciePokemon
  obtenerDescripcion: () => string
}

export const useDetallePokemon = (props: DetallePokemonProps) => {
  const pokemon = ref(props.pokemon)
  const especie = ref(props.especie)
  const obtenerDescripcion = props.obtenerDescripcion

  return {
    pokemon,
    especie,
    obtenerDescripcion
  }
}
