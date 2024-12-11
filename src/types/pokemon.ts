
export interface RespuestaListaPokemon {
  count: number
  next: string | null
  previous: string | null
  results: {
    name: string
    url: string
  }[]
}

export interface PokemonBasico {
  nombre: string
  url: string
}

export interface DetallePokemon {
  id: number
  name: string  
  nombre?: string 
  height: number
  weight: number
  abilities: any[]
  sprites: {
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
}

export interface TipoPokemon {
  posicion: number
  tipo: {
    nombre: string
    url: string
  }
}

export interface EstadisticaPokemon {
  base_stat: number;
  effort: number;
  stat: {
    name: string; // Nombre de la estadística en inglés
    url: string;  // URL del recurso
  };
}

export interface ImagenesPokemon {
  frontal_defecto: string
  otros: {
    'official-artwork': {
      frontal_defecto: string
    }
  }
}

export interface SonidosPokemon {
  ultimo: string
}

export interface RespuestaCadenaEvolutiva {
  cadena: CadenaEvolutiva
}

export interface CadenaEvolutiva {
  species: {
    name: string
    url: string
  }
  evolves_to: CadenaEvolutiva[]
}

export interface EspeciePokemon {
  flavor_text_entries: Array<{
    flavor_text: string
    language: {
      name: string
    }
  }>
  evolution_chain: {
    url: string
  }
}

export interface PokemonEquipo extends DetallePokemon {
  seleccionado: boolean
}