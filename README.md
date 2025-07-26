# Catálogo de Videojuegos 🎮

## Descripción
Este proyecto consiste en la creación de una API desarrollada en TypeScript usando el paradigma de Programación Orientada a Objetos (POO) junto con un frontend web nativo en JavaScript. El objetivo es permitir a los usuarios explorar un catálogo de videojuegos y usar filtros por ID, nombre o género.

## Cómo ejecutar el proyecto

### Clonar el repositorio
```bash
git clone https://github.com/matias-mendez16/Trabajo-Integrador-API.git
```

### Backend
* Instalar dependencias:
  ```bash
  npm install
  npm install express cors
  npm install -D typescript ts-node-dev @types/node @types/express
  ```
* Ejecutar en modo desarrollo:
  ```bash
  npm run dev
  ```
* Servidor en: `http://localhost:3000`

### Frontend
* Abrir `index.html` en el navegador o desde un entorno como Live Server.  
* Ya está listo para consumir la API local.

## Endpoints con ejemplos
* **Obtener todos los juegos:**  
  `GET http://localhost:3000/games`
* **Obtener por ID:**  
  `GET http://localhost:3000/games/21`
* **Filtrar por nombre:**  
  `GET http://localhost:3000/games/nombre?nombre=sonic`
* **Filtrar por género:**  
  `GET http://localhost:3000/games/genero/aventura`

## Flujo general de interacción
1. Usuario ingresa filtro  
2. Frontend envía request a API  
3. Backend recibe petición  
4. Controlador llama al servicio  
5. Servicio pide datos al repositorio  
6. Repositorio devuelve datos filtrados  
7. Servicio envía respuesta  
8. Controlador devuelve JSON  
9. Frontend renderiza resultados

## Estructura de carpetas

```
Back-End/
│
├── controllers/
│   └── games.controllers.ts    – Controladores de Express
│
├── routes/
│   └── games.route.ts          – Definición de rutas y parámetros
│
├── services/
│   └── games.service.ts        – Lógica de negocio
│
├── repositories/
│   ├── games.repository.ts     – Acceso y filtrado de datos
│   └── games.json              – Base de datos simulada
│
├── models/
│   └── games.ts                – Entidad Game
│
├── app.ts                      – Configuración principal (Express, CORS)
└── package.json                – Dependencias y scripts

Front-End/
│
├── index.html       – Página principal
├── style.css        – Estilos personalizados
└── script.js        – Lógica de consumo de API y renderizado dinámico
```

## Autor
Desarrollado por **Matías Méndez**
