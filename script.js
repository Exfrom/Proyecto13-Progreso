// Selección del elemento con la clase "progreso" y asignación a la variable 'progreso'
let progreso = document.querySelector(".progreso");

// Selección del elemento con la clase "porcentaje" y asignación a la variable 'porcentaje'
let porcentaje = document.querySelector(".porcentaje");

// Selección del elemento 'body' y asignación a la variable 'celebracion'
let celebracion = document.querySelector("body");

// Inicialización de la variable 'avance' con el valor 0
let avance = 0;

// Configuración de un intervalo de tiempo que se ejecuta cada 75 milisegundos
let tiempo = setInterval(() => {
    // Incremento de la variable 'avance' en 1 en cada iteración
    avance += 1;

    // Actualización del ancho de la barra de progreso según el valor de 'avance'
    progreso.style.width = `${avance}%`;

    // Verificación si el avance ha alcanzado el 100%
    if (avance === 100) {
        // Detención del intervalo de tiempo
        clearInterval(tiempo);

        // Adición de la clase 'celebracion' al cuerpo del documento
        celebracion.classList.add("celebracion");
    }

    // Actualización del contenido de la etiqueta con la clase 'porcentaje' con el valor de 'avance'
    porcentaje.textContent = `${avance}%`;
}, 75);
