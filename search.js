// Simula una base de datos de actividades
const allActivities = [
    { title: "Juegos Con Balón", description: "Actividades divertidas con pelota.", url: "juegos-con-balon.html", image: "https://via.placeholder.com/400x300.png?text=Juegos+con+Balon" },
    { title: "Circuitos de Fuerza", description: "Ejercicios para fortalecer el cuerpo.", url: "circuitos-de-fuerza.html", image: "https://via.placeholder.com/400x300.png?text=Circuitos+de+Fuerza" },
    { title: "La Búsqueda del Tesoro", description: "Aventura y coordinación.", url: "la-busqueda-del-tesoro.html", image: "https://via.placeholder.com/400x300.png?text=Busqueda+del+Tesoro" },
    { title: "Carrera de Relevos", description: "Velocidad y trabajo en equipo.", url: "carrera-de-relevos.html", image: "https://via.placeholder.com/400x300.png?text=Carrera+de+Relevos" },
    { title: "Yoga Divertido", description: "Equilibrio y relajación para niños.", url: "yoga-divertido.html", image: "https://via.placeholder.com/400x300.png?text=Yoga+Divertido" },
    // Agrega aquí más actividades
];

// Función para obtener parámetros de la URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params.get('query') || '';
}

// Función principal para mostrar los resultados de la búsqueda
function displayResults() {
    const query = getQueryParams().toLowerCase();
    const resultsContainer = document.getElementById('results-container');
    const resultsTitle = document.getElementById('results-title');

    resultsTitle.textContent = `Resultados para: "${query}"`;
    resultsContainer.innerHTML = ''; // Limpia resultados anteriores

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
                <a href="${result.url}" class="card-link">
                    <div class="result-card shadow-sm">
                        <img src="${result.image}" class="card-img-top" alt="${result.title}">
                        <div class="card-body">
                            <h5 class="card-title">${result.title}</h5>
                            <p class="card-text">${result.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
        resultsContainer.innerHTML += cardHtml;
    });
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', displayResults);
