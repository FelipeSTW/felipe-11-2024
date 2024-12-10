import { ref, onMounted } from 'vue'
import { obtenerDetallePokemon, obtenerEspecie } from '@/services/servicioApi'
import type { DetallePokemon, EspeciePokemon } from '@/types/pokemon'

export interface DetallePokemonProps {
  id: string | number
}

export const useDetallePokemon = (props: DetallePokemonProps) => {
  const pokemon = ref<DetallePokemon | null>(null)
  const especie = ref<EspeciePokemon | null>(null)
  const cargando = ref(true)
  const error = ref<string | null>(null)

  const obtenerDescripcion = () => {
    if (!especie.value) return ''
  
    const descripcionEsp = especie.value.flavor_text_entries.find(
      entrada => entrada.language.name === 'es'
    )
  
    return descripcionEsp?.flavor_text || ''
  }

  const obtenerDatos = async () => {
    try {
      cargando.value = true
      
      const [pokemonResp, especieResp] = await Promise.all([
        obtenerDetallePokemon(props.id),
        obtenerEspecie(props.id)
      ])

      if (pokemonResp.error || especieResp.error) {
        throw new Error('Error al obtener los datos del Pokémon')
      }

      pokemon.value = pokemonResp.datos!
      especie.value = especieResp.datos!
      error.value = null
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Error desconocido'
    } finally {
      cargando.value = false
    }
  }

  onMounted(obtenerDatos)

  return {
    pokemon,
    especie,
    cargando,
    error,
    obtenerDescripcion
  }
}