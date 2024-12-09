import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { DetallePokemon } from '@/types/pokemon'

const LIMITE_EQUIPO = 6

export const useAlmacenPokemon = defineStore('pokemon', () => {
  const equipoPokemon = ref<DetallePokemon[]>([])
  
  function agregarAEquipo(pokemon: DetallePokemon) {
    if (equipoPokemon.value.length < LIMITE_EQUIPO) {
      equipoPokemon.value.push(pokemon)
      return true
    }
    return false
  }

  function eliminarDeEquipo(id: number) {
    equipoPokemon.value = equipoPokemon.value.filter(pokemon => pokemon.id !== id)
  }

  function existeEnEquipo(id: number): boolean {
    return equipoPokemon.value.some(pokemon => pokemon.id === id)
  }

  function obtenerEspaciosDisponibles(): number {
    return LIMITE_EQUIPO - equipoPokemon.value.length
  }

  return {
    equipoPokemon,
    agregarAEquipo,
    eliminarDeEquipo,
    existeEnEquipo,
    obtenerEspaciosDisponibles,
    LIMITE_EQUIPO
  }
})