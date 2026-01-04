function cambiarTela(tipo) {
    const imagenMueble = document.getElementById('mueble-base');
    
    // Aquí definimos qué imagen se muestra según el botón presionado
    // Por ahora usamos fotos de sillones de distintos colores de internet
    const catalogoTelas = {
        'pana-azul': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
        'pana-roja': 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&w=800&q=80',
        'ecocuero': 'https://images.unsplash.com/photo-1567016432779-094069958ad5?auto=format&fit=crop&w=800&q=80',
        'lino': 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80'
    };

    // Aplicamos una pequeña animación de transición
    imagenMueble.style.opacity = 0;
    
    setTimeout(() => {
        // Cambiamos la ruta de la imagen
        imagenMueble.src = catalogoTelas[tipo];
        imagenMueble.style.opacity = 1;
    }, 300);
}