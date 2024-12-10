import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAlmacenPokemon } from '@/stores/almacenPokemon'
import { obtenerDetallePokemon, obtenerEspecie } from '@/services/servicioApi'
import type { DetallePokemon, EspeciePokemon } from '@/types/pokemon'

export const useVistaPokemon = () => {
  const route = useRoute()
  const router = useRouter()
  const almacen = useAlmacenPokemon()

  const pokemon = ref<DetallePokemon | null>(null)
  const especie = ref<EspeciePokemon | null>(null)
  const cargando = ref(true)
  const error = ref<string | null>(null)

  const cargarDatosPokemon = async () => {
    try {
      
      cargando.value = true
      const id = route.params.id as string
      const pokemonEquipo = almacen.equipoPokemon.find(p => p.id.toString() === id)
      if (!pokemonEquipo) {
        throw new Error('Este Pokémon no está en tu equipo')
      }

      const [pokemonResp, especieResp] = await Promise.all([
        obtenerDetallePokemon(id),
        obtenerEspecie(id)
      ])

      console.log("URL de la cadena evolutiva:", especieResp.datos?.evolution_chain.url);

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

  const navegarAEquipo = () => {
    router.push('/equipo')
  }

  const obtenerDescripcionEspanol = () => {
    if (!especie.value || !Array.isArray(especie.value.flavor_text_entries)) {
      return ''
    }
    const descripcionEsp = especie.value.flavor_text_entries.find(
      entrada => entrada.language.name === 'es'
    )
    return descripcionEsp?.flavor_text || 'Descripción no disponible.'
  }

  onMounted(cargarDatosPokemon)

  return {
    pokemon,
    especie,
    cargando,
    error,
    navegarAEquipo,
    obtenerDescripcionEspanol
  }
}
