# Consulta a la API de rapidapi.com

## Descripción
Proyecto que consume la API de rapidapi.com para obtener información de los videojuegos 

## Instalación
1. Clonar el repositorio
2. Instalar las dependencias
```bash
npm install
```
3. Renombrar el archivo .example.env a .env y agregar las variables de entorno
 - Los valores de las variables de entorno se obtienen en 
    [RapidAPI](https://rapidapi.com/digiwalls/api/free-to-play-games-database/)
```code
VITE_URL_API= https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc
VITE_URL_KEY= X-RapidAPI-Key
VITE_URL_HOST= X-RapidAPI-Host
```

4. Ejecutar el proyecto
```bash
npm run dev
```
<img src="" alt="1" border="0">