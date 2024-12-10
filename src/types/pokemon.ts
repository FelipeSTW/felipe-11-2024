
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
  valor_base: number
  esfuerzo: number
  estadistica: {
    nombre: string
    url: string
  }
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
  especie: {
    nombre: string
    url: string
  }
  evoluciona_a: CadenaEvolutiva[]
}

export interface EspeciePokemon {
  entradas_texto: Array<{
    texto: string
    idioma: {
      nombre: string
    }
  }>
}

export interface PokemonEquipo extends DetallePokemon {
  seleccionado: boolean
}