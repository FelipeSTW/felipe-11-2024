import { computed } from 'vue'
import type { EstadisticaPokemon } from '@/types/pokemon'

export interface EstadisticasPokemonProps {
  estadisticas: EstadisticaPokemon[]
}

export const useEstadisticasPokemon = (props: EstadisticasPokemonProps) => {
  const estadisticasFormateadas = computed(() => {
    return props.estadisticas.map(stat => ({
      nombre: traducirNombreEstadistica(stat.stat.name), // Uso de stat.name
      valor: stat.base_stat,
      porcentaje: (stat.base_stat / 255) * 100, // 255 es el máximo valor posible
    }));
  });

  const traducirNombreEstadistica = (nombre: string): string => {
    const traducciones: Record<string, string> = {
      'hp': 'PS',
      'attack': 'Ataque',
      'defense': 'Defensa',
      'special-attack': 'Atq. Esp.',
      'special-defense': 'Def. Esp.',
      'speed': 'Velocidad',
    };
    return traducciones[nombre] || nombre;
  };

  return {
    estadisticasFormateadas,
  };
};
