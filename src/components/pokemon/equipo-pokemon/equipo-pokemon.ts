import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAlmacenPokemon } from '@/stores/almacenPokemon'

export const useEquipoPokemon = () => {
  const router = useRouter()
  const almacen = useAlmacenPokemon()

  const equipo = computed(() => almacen.equipoPokemon)
  
  const equipoVacio = computed(() => equipo.value.length === 0)
  
  const espaciosDisponibles = computed(() => 
    almacen.LIMITE_EQUIPO - equipo.value.length
  )

  const eliminarDelEquipo = (id: number) => {
    almacen.eliminarDeEquipo(id)
  }

  const verDetallePokemon = (id: number) => {
    router.push(`/equipo/${id}`)
  }

  const obtenerDistribucionTipos = computed(() => {
    const distribucion: Record<string, number> = {}
    
    equipo.value.forEach(pokemon => {
      pokemon.tipos.forEach(({ tipo }) => {
        distribucion[tipo.nombre] = (distribucion[tipo.nombre] || 0) + 1
      })
    })

    return distribucion
  })

  const obtenerPromedioEstadisticas = computed(() => {
    if (equipoVacio.value) return []

    const totalEstadisticas: Record<string, number> = {}
    
    equipo.value.forEach(pokemon => {
      pokemon.estadisticas.forEach(stat => {
        const nombreStat = stat.estadistica.nombre
        totalEstadisticas[nombreStat] = (totalEstadisticas[nombreStat] || 0) + stat.valor_base
      })
    })

    return Object.entries(totalEstadisticas).map(([nombre, total]) => ({
      nombre,
      promedio: Math.round(total / equipo.value.length)
    }))
  })

  return {
    equipo,
    equipoVacio,
    espaciosDisponibles,
    eliminarDelEquipo,
    verDetallePokemon,
    obtenerDistribucionTipos,
    obtenerPromedioEstadisticas
  }
}