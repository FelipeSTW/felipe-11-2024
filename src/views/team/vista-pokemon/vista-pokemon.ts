import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAlmacenPokemon } from '@/stores/almacenPokemon'
import { obtenerDetallePokemon, obtenerEspecie, obtenerCadenaEvolutiva } from '@/services/servicioApi'
import type { DetallePokemon, EspeciePokemon, RespuestaCadenaEvolutiva } from '@/types/pokemon'

export const useVistaPokemon = () => {
  const route = useRoute()
  const router = useRouter()
  const almacen = useAlmacenPokemon()

  const pokemon = ref<DetallePokemon | null>(null)
  const especie = ref<EspeciePokemon | null>(null)
  const cadenaEvolutiva = ref<RespuestaCadenaEvolutiva | null>(null)
  const cargando = ref(true)
  const error = ref<string | null>(null)

  const cargarDatosPokemon = async () => {
    try {
      cargando.value = true
      const id = route.params.id as string
      
      // Verificar si el Pokémon está en el equipo
      const pokemonEquipo = almacen.equipoPokemon.find(p => p.id.toString() === id)
      if (!pokemonEquipo) {
        throw new Error('Este Pokémon no está en tu equipo')
      }

      const [pokemonResp, especieResp] = await Promise.all([
        obtenerDetallePokemon(id),
        obtenerEspecie(id)
      ])

      if (pokemonResp.error || especieResp.error) {
        throw new Error('Error al obtener los datos del Pokémon')
      }
      console.log('Detalle del Pokémon:', pokemonResp.datos)
      pokemon.value = {
        ...pokemonResp.datos!,
        imagenes: pokemonResp.datos!.sprites || { otros: { 'official-artwork': { frontal_defecto: '' } } },
        cries: pokemonResp.datos!.cries || { latest: '', legacy: '' },
        estadisticas: pokemonResp.datos!.stats || []
      }
      especie.value = especieResp.datos!

      // Obtener cadena evolutiva
      const urlCadenaEvolutiva = especieResp.datos!.evolution_chain.url
      const cadenaResp = await obtenerCadenaEvolutiva(urlCadenaEvolutiva)
      
      if (cadenaResp.error) {
        throw new Error('Error al obtener la cadena evolutiva')
      }

      cadenaEvolutiva.value = cadenaResp.datos!
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
      return ''; // Retorna un string vacío si la propiedad no existe.
    }
  
    const descripcionEsp = especie.value.flavor_text_entries.find(
      entrada => entrada.language.name === 'es'
    );
  
    return descripcionEsp?.flavor_text || 'Descripción no disponible.';
  };

  onMounted(cargarDatosPokemon)

  return {
    pokemon,
    especie,
    cadenaEvolutiva,
    cargando,
    error,
    navegarAEquipo,
    obtenerDescripcionEspanol
  }
}