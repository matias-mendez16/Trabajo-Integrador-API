let filtroNombre = '';
let filtroGenero = '';

function cargarJuegos() {
    let urlBase = 'http://localhost:3000/games';
    let urlFinal = urlBase;

    if (filtroNombre) {
        urlFinal = `${urlBase}/nombre?nombre=${filtroNombre}`;
    } else if (filtroGenero) {
        urlFinal = `${urlBase}/genero/${filtroGenero}`;
    }

    fetch(urlFinal)
        .then(response => {
            if (!response.ok) throw new Error("Error interno de nuestros servidores. (Error 500)");
            return response.json();
        })
        .then(data => {
            if (!data || (Array.isArray(data) && data.length === 0)) {
                document.getElementById('juegos').innerHTML = `
                    <div class="alert alert-warning text-center" role="alert">
                        No se encontraron juegos que coincidan con tu búsqueda.
                    </div>
                `;
                return;
            }

            if (!Array.isArray(data)) {
                data = [data];
            }

            let html = '';
            data.forEach(juego => {
                let modalId = `modalId${juego.id}`;

                html += `
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
                        <img class="imgCard" src="${juego.portada}" alt="${juego.nombre}">
                        <h5 class="nameCharacter">${juego.nombre}</h5>
                    </button>

                    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title titleModal fs-5" id="${modalId}Label">${juego.nombre}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img class="marginModal" src="${juego.portada}" alt="${juego.nombre}">
                                    <p>Género: ${juego.genero}</p>
                                    <p>Fecha de lanzamiento: ${juego.fechaLanzamiento}</p>
                                    <p>Desarrollador: ${juego.desarrollador}</p>
                                    <p>Multijugador: ${juego.multijugador ? 'Si' : 'No'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });

            document.getElementById('juegos').innerHTML = html;
        })
        .catch(error => {
            console.error('Error cargando juegos:', error);
            document.getElementById('juegos').innerHTML = `
                <div class="alert alert-danger text-center" role="alert">
                    El nombre que seleccionaste no coincide con ningún juego de nuestro catálogo.
                </div>
            `;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarJuegos();

    // Evento de Búsqueda por nombre
    const formBuscar = document.getElementById('formBuscar');
    if (formBuscar) {
        formBuscar.addEventListener('submit', (e) => {
            e.preventDefault();
            filtroNombre = document.getElementById('buscarNombre').value.toLowerCase().trim();
            filtroGenero = '';
            document.getElementById('filtroGenero').value = '';
            document.getElementById('buscarId').value = '';
            cargarJuegos();
        });
    }

    // Evento de Búsqueda por ID
    const formBuscarId = document.getElementById('formBuscarId');
    if (formBuscarId) {
        formBuscarId.addEventListener('submit', (e) => {
            e.preventDefault();
            const idBuscado = document.getElementById('buscarId').value.trim();
            if (!idBuscado) return;

            fetch(`http://localhost:3000/games/${idBuscado}`)
                .then(response => {
                    if (!response.ok) throw new Error('Juego no encontrado');
                    return response.json();
                })
                .then(juego => {
                    let modalId = `modalId${juego.id}`;
                    document.getElementById('buscarNombre').value = '';
                    document.getElementById('filtroGenero').value = '';
                    document.getElementById('buscarNombre').placeholder = 'Buscar por nombre';
                    document.getElementById('buscarId').placeholder = 'Buscar por ID';

                    document.getElementById('juegos').innerHTML = `
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
                            <img class="imgCard" src="${juego.portada}" alt="${juego.nombre}">
                            <h5 class="nameCharacter">${juego.nombre}</h5>
                        </button>

                        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title titleModal fs-5" id="${modalId}Label">${juego.nombre}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <img class="marginModal" src="${juego.portada}" alt="${juego.nombre}">
                                        <p>Género: ${juego.genero}</p>
                                        <p>Fecha de lanzamiento: ${juego.fechaLanzamiento}</p>
                                        <p>Desarrollador: ${juego.desarrollador}</p>
                                        <p>Multijugador: ${juego.multijugador ? 'Sí' : 'No'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                })
                .catch(error => {
                    console.error('Error al buscar por ID:', error);
                    document.getElementById('juegos').innerHTML = `
                        <div class="alert alert-danger text-center" role="alert">
                            El ID que seleccionaste no coincide con ningún juego de nuestro catálogo.
                        </div>
                    `;
                });
        });
    }

    // Evento de Búsqueda por género
    const filtroGeneroSelect = document.getElementById('filtroGenero');
    if (filtroGeneroSelect) {
        filtroGeneroSelect.addEventListener('change', (e) => {
            filtroGenero = e.target.value.toLowerCase();
            filtroNombre = '';

            document.getElementById('buscarNombre').value = '';
            document.getElementById('buscarId').value = '';
            document.getElementById('buscarNombre').placeholder = 'Buscar por nombre';
            document.getElementById('buscarId').placeholder = 'Buscar por ID';

            cargarJuegos();
        });
    }

    // Evento de Ver todos, dejando en blanco todos los filtros
    const verTodosBtn = document.getElementById('verTodos');
    if (verTodosBtn) {
        verTodosBtn.addEventListener('click', () => {
            filtroNombre = '';
            filtroGenero = '';
            document.getElementById('filtroGenero').value = '';
            document.getElementById('buscarNombre').value = '';
            document.getElementById('buscarId').value = '';
            document.getElementById('buscarNombre').placeholder = 'Buscar por nombre';
            document.getElementById('buscarId').placeholder = 'Buscar por ID';
            cargarJuegos();
        });
    }
});
