import { ref, onMounted } from 'vue';
import { Volume2, VolumeX } from 'lucide-vue-next';

export interface ReproductorSonidoProps {
  urlSonido: string;
  nombrePokemon: string;
}

export const useReproductorSonido = (props: ReproductorSonidoProps) => {
  const reproduciendo = ref(false);
  const audio = ref<HTMLAudioElement | null>(null);

  const reproducirSonido = () => {
    if (!audio.value) {
      console.error('El elemento de audio no está inicializado.');
      return;
    }

    if (reproduciendo.value) {
      audio.value.pause();
      audio.value.currentTime = 0;
      reproduciendo.value = false;
    } else {
      audio.value.src = props.urlSonido; // Establece la fuente antes de reproducir
      audio.value
        .play()
        .then(() => {
          reproduciendo.value = true;
        })
        .catch(error => {
          console.error('Error al reproducir el sonido:', error);
        });
    }
  };

  const onAudioEnd = () => {
    reproduciendo.value = false;
  };

  onMounted(() => {
    console.log('Elemento de audio:', audio.value);
  });

  return {
    audio,
    reproduciendo,
    reproducirSonido,
    onAudioEnd,
    Volume2,
    VolumeX,
  };
};
