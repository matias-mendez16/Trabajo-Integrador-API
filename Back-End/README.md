# Backend - Catálogo de Videojuegos

## Descripción
La API fue desarrollada con TypeScript y Express, aplicando el paradigma POO. Los datos de los juegos están almacenados en un archivo `games.json`, que se carga en memoria al iniciar el servidor.

## Instalación y ejecución
1. Instalar dependencias:
   ```bash
   npm install
   npm install express cors
   npm install -D typescript ts-node-dev @types/node @types/express
   ```
2. Ejecutar el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
3. El servidor se ejecuta en el puerto `3000`.

## Endpoints
* `GET /games`  
  Devuelve todos los juegos.
* `GET /games/:id`  
  Juego por ID.
* `GET /games/nombre?nombre=<texto>`  
  Búsqueda por nombre (query).
* `GET /games/genero/:genero`  
  Filtro por género.

### Ejemplos
* **Obtener todos los juegos:**  
  `http://localhost:3000/games`
* **Buscar por ID:**  
  `http://localhost:3000/games/21`
* **Buscar por nombre:**  
  `http://localhost:3000/games/nombre?nombre=sonic`
* **Buscar por género:**  
  `http://localhost:3000/games/genero/aventura`

## Detalles de implementación
* **POO:**  
  `GamesRepository`, `GamesService` y `GamesController` forman una capa limpia.
* **Carga de datos:**  
  El JSON se lee sincrónicamente y se parsea a instancias de `Game`.
* **Manejo de errores:**  
  Cada método captura excepciones y responde con estado `500` (error interno) o `404` (no se encuentra el juego).
* **Validaciones:**  
  - Convierte el texto de búsqueda a minúsculas (`.toLowerCase()`).  
  - Elimina espacios al principio o final (`.trim()`).  
  - Para filtrar coincidencias parciales usa `.includes()`.
* **CORS:**  
  Habilitado para permitir consumo desde cualquier origen.

## Estructura de carpetas

```
Back-End/
│
├── controllers/
│   └── games.controllers.ts
│
├── routes/
│   └── games.route.ts
│
├── services/
│   └── games.service.ts
│
├── repositories/
│   ├── games.repository.ts
│   └── games.json
│
├── models/
│   └── games.ts
│
├── app.ts
└── package.json
```

## Autor
Desarrollado por **Matías Méndez**
