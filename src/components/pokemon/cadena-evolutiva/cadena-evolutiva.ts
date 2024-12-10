import { ref, onMounted } from 'vue'
import { obtenerCadenaEvolutiva } from '@/services/servicioApi'
import type { CadenaEvolutiva } from '@/types/pokemon'

export interface CadenaEvolutivaProps {
  urlCadenaEvolutiva: string
}

interface PokemonEvolucion {
  nombre: string
  imagen: string
}

export const useCadenaEvolutiva = (props: CadenaEvolutivaProps) => {
  const evoluciones = ref<PokemonEvolucion[][]>([])
  const cargando = ref(true)
  const error = ref<string | null>(null)

  const procesarCadena = (cadena: CadenaEvolutiva): PokemonEvolucion[][] => {
    const resultado: PokemonEvolucion[][] = []
    let etapaActual: CadenaEvolutiva | null = cadena
  
    while (etapaActual) {
      if (!etapaActual.especie) break // Maneja casos donde 'especie' sea undefined
  
      const etapa: PokemonEvolucion[] = []
  
      etapa.push({
        nombre: etapaActual.especie.nombre,
        imagen: obtenerImagenPokemon(etapaActual.especie.url)
      })
  
      if (etapaActual.evoluciona_a.length > 0) {
        etapaActual.evoluciona_a.forEach(evolucion => {
          if (evolucion.especie) {
            etapa.push({
              nombre: evolucion.especie.nombre,
              imagen: obtenerImagenPokemon(evolucion.especie.url)
            })
          }
        })
        resultado.push(etapa)
        etapaActual = etapaActual.evoluciona_a[0]
      } else {
        resultado.push(etapa)
        break
      }
    }
  
    return resultado
  }

  const obtenerImagenPokemon = (url: string): string => {
    const id = url.split('/').filter(Boolean).pop()
    if (!id) return '' // Retorna una imagen genérica o un valor vacío
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }

  const cargarCadenaEvolutiva = async () => {
    try {
      cargando.value = true
      const { datos, error: evolutionError } = await obtenerCadenaEvolutiva(props.urlCadenaEvolutiva)
  
      if (evolutionError || !datos || !datos.cadena) {
        throw new Error('Error al obtener o procesar la cadena evolutiva')
      }
  
      evoluciones.value = procesarCadena(datos.cadena)
      error.value = null
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Error desconocido'
    } finally {
      cargando.value = false
    }
  }
  

  onMounted(cargarCadenaEvolutiva)

  return {
    evoluciones,
    cargando,
    error
  }
}