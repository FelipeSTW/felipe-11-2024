import { ref, onMounted } from 'vue'
import { obtenerListaPokemon, obtenerDetallePokemon } from '@/services/servicioApi'
import type { DetallePokemon } from '@/types/pokemon'

export const useListaPokemon = () => {
  const pokemonList = ref<DetallePokemon[]>([])
  const cargando = ref(true)
  const error = ref<string | null>(null)
  const pagina = ref(0)
  const LIMITE_POR_PAGINA = 25

  const cargarPokemon = async () => {
    try {
      cargando.value = true
      const inicio = pagina.value * LIMITE_POR_PAGINA
      const { datos, error: listError } = await obtenerListaPokemon(inicio, LIMITE_POR_PAGINA)
      
      if (listError || !datos) {
        throw new Error('Error al obtener la lista de Pokémon')
      }
  
      const detallesPokemon = await Promise.all(
        datos.results.map(async (pokemon) => {
          const id = pokemon.url.split('/').filter(Boolean).pop()
          const { datos: detalle, error: detalleError } = await obtenerDetallePokemon(id!)
          if (detalleError || !detalle) {
            throw new Error(`Error al obtener detalles de ${pokemon.name}`)
          }
          return detalle
        })
      )
  
      pokemonList.value = pagina.value === 0 
        ? detallesPokemon 
        : [...pokemonList.value, ...detallesPokemon]
        
      error.value = null
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Error desconocido'
    } finally {
      cargando.value = false
    }
  }

  const cargarSiguientePagina = async () => {
    pagina.value++
    await cargarPokemon()
  }

  onMounted(cargarPokemon)

  return {
    pokemonList,
    cargando,
    error,
    cargarSiguientePagina
  }
}