
export interface RespuestaListaPokemon {
  total: number
  siguiente: string | null
  anterior: string | null
  resultados: PokemonBasico[]
}

export interface PokemonBasico {
  nombre: string
  url: string
}

export interface DetallePokemon {
  id: number
  nombre: string
  altura: number
  peso: number
  tipos: TipoPokemon[]
  estadisticas: EstadisticaPokemon[]
  imagenes: ImagenesPokemon
  sonidos: SonidosPokemon
  especie: {
    url: string
  }
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