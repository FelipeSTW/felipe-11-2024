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
    const resultado: PokemonEvolucion[][] = [];
    
    let etapaActual: CadenaEvolutiva | null = cadena;
  
    while (etapaActual) {
      const etapa: PokemonEvolucion[] = [];
  
      
      if (etapaActual.species && etapaActual.species.name && etapaActual.species.url) {
        etapa.push({
          nombre: etapaActual.species.name,
          imagen: obtenerImagenPokemon(etapaActual.species.url),
        });
      }
  
      
      if (etapa.length > 0) {
        resultado.push(etapa);
      }
  
     
      etapaActual = etapaActual.evolves_to.length > 0 ? etapaActual.evolves_to[0] : null;
    }
  
    return resultado;
  };
  
  
  
  

  const obtenerImagenPokemon = (url: string): string => {
    const id = url.split('/').filter(Boolean).pop();
    if (!id) {
      console.error("ID del Pokémon no encontrado en la URL:", url);
      return "";
    }
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };

  const cargarCadenaEvolutiva = async () => {
    try {
      cargando.value = true;
      const { datos, error: evolutionError } = await obtenerCadenaEvolutiva(props.urlCadenaEvolutiva);
  
      if (evolutionError) {
        console.error("Error al obtener la cadena evolutiva desde la API:", evolutionError);
        throw new Error("Error al obtener la cadena evolutiva");
      }
  
      if (!datos || !datos.chain) {
        console.error("Datos de la cadena evolutiva incompletos:", datos);
        throw new Error("Datos de la cadena evolutiva incompletos");
      }
  
      console.log("Datos de la cadena evolutiva obtenidos:", datos.chain);
      evoluciones.value = procesarCadena(datos.chain);
      error.value = null;
    } catch (e) {
      console.error("Error en cargarCadenaEvolutiva:", e);
      error.value = e instanceof Error ? e.message : "Error desconocido";
    } finally {
      cargando.value = false;
    }
  }; 

  onMounted(cargarCadenaEvolutiva)

  return {
    evoluciones,
    cargando,
    error
  }
}