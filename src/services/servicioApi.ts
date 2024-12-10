import axios from 'axios'
import type { RespuestaListaPokemon, DetallePokemon } from '@/types/pokemon'

const clienteHttp = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export const obtenerListaPokemon = async (inicio: number = 0, limite: number = 25) => {
  try {
    const respuesta = await clienteHttp.get<RespuestaListaPokemon>(`/pokemon?offset=${inicio}&limit=${limite}`)
    return { 
      datos: respuesta.data, 
      error: null 
    }
  } catch (error) {
    return { datos: null, error: 'Error al obtener la lista de Pokémon' }
  }
}

export const obtenerDetallePokemon = async (id: string | number) => {
  try {
    const respuesta = await clienteHttp.get<DetallePokemon>(`/pokemon/${id}`)
    return { 
      datos: {
        ...respuesta.data,
        nombre: respuesta.data.name // Traducción básica por ahora
      }, 
      error: null 
    }
  } catch (error) {
    return { datos: null, error: 'Error al obtener los detalles del Pokémon' }
  }
}