import axios, { AxiosError } from 'axios'
import type { RespuestaListaPokemon, DetallePokemon, EspeciePokemon, RespuestaCadenaEvolutiva } from '@/types/pokemon'

const clienteHttp = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

interface ErrorApi {
  mensaje: string
  codigo: number
  detalles?: unknown
}

const manejarError = (error: AxiosError): ErrorApi => {
  if (error.response) {
    return {
      mensaje: 'Error en la respuesta del servidor',
      codigo: error.response.status,
      detalles: error.response.data
    }
  } else if (error.request) {
    return {
      mensaje: 'No se pudo establecer conexión con el servidor',
      codigo: 0
    }
  } else {
    return {
      mensaje: 'Error al procesar la solicitud',
      codigo: 0,
      detalles: error.message
    }
  }
}

export const obtenerListaPokemon = async (inicio: number = 0, limite: number = 25) => {
  try {
    const respuesta = await clienteHttp.get<RespuestaListaPokemon>(`/pokemon?offset=${inicio}&limit=${limite}`)
    return { datos: respuesta.data, error: null }
  } catch (error) {
    return { datos: null, error: manejarError(error as AxiosError) }
  }
}

export const obtenerDetallePokemon = async (id: number | string) => {
  try {
    const respuesta = await clienteHttp.get<DetallePokemon>(`/pokemon/${id}`)
    return { datos: respuesta.data, error: null }
  } catch (error) {
    return { datos: null, error: manejarError(error as AxiosError) }
  }
}

export const obtenerEspecie = async (id: number | string) => {
  try {
    const respuesta = await clienteHttp.get<EspeciePokemon>(`/pokemon-species/${id}`)
    return { datos: respuesta.data, error: null }
  } catch (error) {
    return { datos: null, error: manejarError(error as AxiosError) }
  }
}

export const obtenerCadenaEvolutiva = async (url: string) => {
  try {
    const respuesta = await axios.get<RespuestaCadenaEvolutiva>(url)
    return { datos: respuesta.data, error: null }
  } catch (error) {
    return { datos: null, error: manejarError(error as AxiosError) }
  }
}