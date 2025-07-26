# Frontend - Catálogo de Videojuegos

## Descripción
Aplicación web desarrollada con HTML, CSS, JavaScript y Bootstrap. Permite consumir los datos de la API y ofrece filtros interactivos por nombre, ID y género. Incluye un modal para visualizar detalles de cada juego.

## Archivos principales
* **`index.html`**  
  Estructura del DOM, referencias a CSS y scripts, barra de navegación y contenedor de tarjetas.
  
* **`style.css`**  
  Estilos personalizados:
  * Tema oscuro
  * Tipografía “Goldman”
  * Efectos hover en imágenes y modales
  
* **`script.js`**  
  Lógica de consumo de API:
  * Variables globales: `filtroNombre`, `filtroGenero`
  * Función `cargarJuegos()`:
    1. Construye la URL según filtros.
    2. Devuelve *cards* visuales con portadas.
    3. Crea modales con detalles de cada juego.
  * Listeners para:
    - Búsqueda por nombre (`/nombre?nombre=…`)
    - Búsqueda por ID (`/games/:id`)
    - Filtro por género (`/games/genero/:genero`)
    - Botón “Ver todos” (limpia filtros)

## Uso
1. Abrir `index.html` en tu navegador o con la extensión Live Server.  
2. Asegúrate de tener el backend corriendo en `http://localhost:3000`.  
3. Utiliza los filtros y botones para explorar el catálogo.

## Estructura de carpetas

```
Front-End/
│
├── index.html
├── style.css
└── script.js
```

## Autor
Desarrollado por **Matías Méndez**
