# Proyecto: Aplicación de Gestión de Equipos Pokémon

Puedes ver la app en el siguiente Link :https://felipe-poke-app.netlify.app/

Este proyecto es una aplicación web para gestionar equipos Pokémon, donde los usuarios pueden agregar, visualizar y eliminar Pokémon de su equipo, así como explorar detalles específicos de cada uno.

## Características Principales

### Gestión de Equipos
- **Agregar Pokémon**: Selecciona Pokémon desde una lista completa para añadir a tu equipo.
- **Visualización del Equipo**: Explora estadísticas, tipos y sonidos de cada Pokémon.
- **Eliminación de Pokémon**: Remueve Pokémon individuales del equipo con facilidad.

### Detalles del Pokémon
- **Información Detallada**: Accede a:
  - Estadísticas base
  - Tipos
  - Evoluciones
  - Descripción completa
- **Experiencia Multimedia**: Escucha los sonidos únicos de cada Pokémon.

### Cadena Evolutiva
- Visualización clara y dinámica de las evoluciones del Pokémon seleccionado.

## Tecnologías Utilizadas

- **Frontend**: 
  - Vue 3
  - SCSS
  - Tailwind CSS
- **Backend**: 
  - API pública de Pokémon ([PokeAPI](https://pokeapi.co/))
- **Herramientas**:
  - Vite
  - TypeScript
- **Gestión de Dependencias**: npm

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/FelipeSTW/felipe-12-2024.git poke-app
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd poke-app
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

### Desarrollo
Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

### Producción
Para compilar el proyecto:
```bash
npm run build
```
El código compilado se encontrará en el directorio `dist/`.

### Pruebas
Para ejecutar las pruebas:
```bash
npm run test
```

## Estructura del Proyecto

```
├── src
│   ├── components
│   │   ├── pokemon
│   │   │   ├── reproductor-sonido
│   │   │   │   ├── ReproductorSonido.vue
│   │   │   │   ├── reproductor-sonido.ts
│   │   │   │   ├── reproductor-sonido.html
│   │   │   │   └── reproductor-sonido.scss
│   │   │   ├── equipo-pokemon
│   │   │   │   ├── EquipoPokemon.vue
│   │   │   │   ├── equipo-pokemon.ts
│   │   │   │   ├── equipo-pokemon.html
│   │   │   │   └── equipo-pokemon.scss
│   │   ├── views
│   │   │   ├── team
│   │   │   │   ├── vista-equipo
│   │   │   │   │   ├── VistaEquipo.vue
│   │   │   │   │   ├── vista-equipo.ts
│   │   │   │   │   ├── vista-equipo.html
│   │   │   │   │   └── vista-equipo.scss
│   │   ├── styles
│   │   │   └── tailwind.css
├── dist
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Consideraciones

- La API utilizada es pública y puede estar sujeta a limitaciones o cambios.
- Se utiliza `@apply` de Tailwind CSS para estilos reutilizables.
- Configuración optimizada para despliegue en plataformas como Netlify o Vercel.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica o corrección:
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Descripción del cambio"
   ```
4. Haz un push a la rama:
   ```bash
   git push origin feature/nueva-caracteristica
   ```
5. Abre un Pull Request.

## Autor

Desarrollado por Felipe Ahumada.
