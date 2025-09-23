// Simula una base de datos de actividades
// Aquí debes listar todas tus actividades con sus detalles.
const allActivities = [
    { title: "Juegos Con Balón", description: "Actividades divertidas con pelota.", url: "juegos-con-balon.html" },
    { title: "Circuitos de Fuerza", description: "Ejercicios para fortalecer el cuerpo.", url: "circuitos-de-fuerza.html" },
    { title: "La Búsqueda del Tesoro", description: "Aventura y coordinación.", url: "la-busqueda-del-tesoro.html" },
    { title: "Carrera de Relevos", description: "Velocidad y trabajo en equipo.", url: "carrera-de-relevos.html" },
    { title: "Yoga Divertido", description: "Equilibrio y relajación para niños.", url: "yoga-divertido.html" },
    // Agrega más actividades aquí
];

// Función principal para mostrar los resultados de la búsqueda
function displayResults() {
    // Obtiene la consulta de la URL (lo que el usuario escribió)
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query').toLowerCase();

    // Referencias a los elementos HTML
    const resultsContainer = document.getElementById('results-container');
    const resultsTitle = document.getElementById('results-title');

    resultsTitle.textContent = `Resultados para: "${query}"`;
    resultsContainer.innerHTML = ''; // Limpia resultados anteriores

    // Filtra las actividades basándose en la consulta
    const filteredResults = allActivities.filter(activity =>
        activity.title.toLowerCase().includes(query) ||
        activity.description.toLowerCase().includes(query)
    );

    if (filteredResults.length === 0) {
        resultsContainer.innerHTML = `<p class="text-center">No se encontraron resultados para tu búsqueda.</p>`;
        return;
    }

    // Crea y muestra las tarjetas de resultados
    filteredResults.forEach(result => {
        const cardHtml = `
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <h5 class="card-title">${result.title}</h5>
                        <p class="card-text">${result.description}</p>
                        <a href="${result.url}" class="btn btn-primary mt-3">Ver actividad</a>
                    </div>
                </div>
            </div>
        `;
        resultsContainer.innerHTML += cardHtml;
    });
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', displayResults);
