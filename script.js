function mostrarEvento(sala) {
    let detalles = document.getElementById('event-details');
    
    if (sala === 1) {
        detalles.innerHTML = `
            <p><strong>Hora:</strong> 13:30</p>
            <p><strong>Tema:</strong> ACV</p>
            <p><strong>Orador:</strong> Julio Verne</p>
        `;
    } else if (sala === 2) {
        detalles.innerHTML = `
            <p><strong>Hora:</strong> 15:40</p>
            <p><strong>Tema:</strong> Cómo construir pisos de loza</p>
            <p><strong>Orador:</strong> Martín Moyano</p>
        `;
    } else if (sala === 3) {
        detalles.innerHTML = `
            <p><strong>Hora:</strong> 17:30</p>
            <p><strong>Tema:</strong> Ataques cardiovasculares</p>
            <p><strong>Orador:</strong> José Hernández</p>
        `;
    }
}
