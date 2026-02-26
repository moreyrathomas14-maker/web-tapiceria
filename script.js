// Función para el Visualizador de Muebles (La que ya tenías)
function cambiarTela(tipo) {
    const imagenMueble = document.getElementById('mueble-base');
    const linkWA = document.getElementById('whatsapp-link');
    
    // Tu número real
    const miTelefono = "5493525649575"; 

    const catalogoTelas = {
        'pana-azul': {
            img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
            nombre: 'Pana Azul'
        },
        'pana-roja': {
            img: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&w=800&q=80',
            nombre: 'Pana Violeta'
        },
        'ecocuero': {
            img: 'https://images.unsplash.com/photo-1567016432779-094069958ad5?auto=format&fit=crop&w=800&q=80',
            nombre: 'Verde Bosque'
        },
        'lino': {
            img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80',
            nombre: 'Ocre'
        }
    };

    // Efecto visual de transición
    imagenMueble.style.opacity = 0;
    
    setTimeout(() => {
        imagenMueble.src = catalogoTelas[tipo].img;
        imagenMueble.style.opacity = 1;
        
        const mensaje = `Hola! Estuve viendo la web de GM Tapizados y me interesa un presupuesto para el color: ${catalogoTelas[tipo].nombre}`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        
        linkWA.href = `https://wa.me/${miTelefono}?text=${mensajeCodificado}`;
    }, 300);
}

// === NUEVA FUNCIÓN: ACORDEÓN DE MATERIALES ===
// Esta función se activa al hacer clic en una tarjeta de material
function toggleMaterial(elementoTarjeta) {
    // 1. 'elementoTarjeta' es la tarjeta completa a la que se le hizo clic (el <div> con clase gm-material-card)
    
    // 2. Le agregamos o quitamos la clase 'activo'. 
    // CSS se encarga del resto (mostrar la expansión y girar la flecha)
    elementoTarjeta.classList.toggle('activo');
}