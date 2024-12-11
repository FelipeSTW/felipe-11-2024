Proyecto: Aplicación de Gestión de Equipos Pokémon

Este proyecto es una aplicación web para gestionar equipos Pokémon, donde los usuarios pueden agregar, visualizar y eliminar Pokémon de su equipo, así como explorar detalles específicos de cada uno.

Características Principales

Gestión de Equipos:

Agregar Pokémon al equipo desde una lista.

Visualizar el equipo con estadísticas, tipos y sonidos de cada Pokémon.

Eliminar Pokémon individuales del equipo.

Detalles del Pokémon:

Ver información detallada como estadísticas base, tipos, evoluciones y descripción.

Escuchar los sonidos específicos de cada Pokémon.

Cadena Evolutiva:

Visualización clara y dinámica de las evoluciones del Pokémon seleccionado.

Tecnologías Utilizadas

Frontend: Vue 3, SCSS, Tailwind CSS

Backend: API pública de Pokémon (https://pokeapi.co/)

Herramientas: Vite, TypeScript

Gestión de Dependencias: npm

Instalación

Clona este repositorio:

git clone https://github.com/tu-usuario/nombre-del-repo.git

Navega al directorio del proyecto:

cd nombre-del-repo

Instala las dependencias:

npm install

Uso

Desarrollo

Para iniciar el servidor de desarrollo:

npm run dev

Producción

Para compilar el proyecto:

npm run build

El código compilado se encontrará en el directorio dist/.

Pruebas

Para ejecutar las pruebas (si aplica):

npm run test

Estructura del Proyecto

├── src
│   ├── components
│   │   ├── pokemon
│   │   │   ├── reproductor-sonido
│   │   │   │   ├── ReproductorSonido.vue
│   │   │   │   ├── reproductor-sonido.ts
│   │   │   │   ├── reproductor-sonido.html
│   │   │   │   └── reproductor-sonido.scss
│   │   ├── equipo-pokemon
│   │   │   ├── EquipoPokemon.vue
│   │   │   ├── equipo-pokemon.ts
│   │   │   ├── equipo-pokemon.html
│   │   │   └── equipo-pokemon.scss
│   ├── views
│   │   ├── team
│   │   │   ├── vista-equipo
│   │   │   │   ├── VistaEquipo.vue
│   │   │   │   ├── vista-equipo.ts
│   │   │   │   ├── vista-equipo.html
│   │   │   │   └── vista-equipo.scss
│   ├── styles
│   │   └── tailwind.css
├── dist
├── vite.config.ts
├── tsconfig.json
└── README.md

Consideraciones

La API utilizada es pública y puede estar sujeta a limitaciones o cambios.

Se utiliza @apply de Tailwind CSS para estilos reutilizables.

Configuración optimizada para despliegue en plataformas como Netlify o Vercel.

Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama para tu característica o corrección (git checkout -b feature/nueva-caracteristica).

Realiza tus cambios y haz un commit (git commit -m "Descripción del cambio").

Haz un push a la rama (git push origin feature/nueva-caracteristica).

Abre un Pull Request.


Autor

Desarrollado por Felipe Ahumada .