function cambiarTela(tipo) {
    const imagenMueble = document.getElementById('mueble-base');
    const linkWA = document.getElementById('whatsapp-link');
    
    // IMPORTANTE: Poné tu número real aquí (sin el + y con el código de área)
    // Ejemplo: 5493525649575
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
        // 1. Cambiamos la imagen del mueble
        imagenMueble.src = catalogoTelas[tipo].img;
        imagenMueble.style.opacity = 1;
        
        // 2. Preparamos el mensaje personalizado
        const mensaje = `Hola! Estuve viendo la web de GM Tapizados y me interesa un presupuesto para el color: ${catalogoTelas[tipo].nombre}`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        
        // 3. Actualizamos el link del botón de WhatsApp
        linkWA.href = `https://wa.me/${miTelefono}?text=${mensajeCodificado}`;
    }, 300);
}