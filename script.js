// === VISUALIZADOR DE MUEBLES ===
function cambiarTela(tipo) {
    const imagenMueble = document.getElementById('mueble-base');
    const linkWA = document.getElementById('whatsapp-link');
    
    // Tu número real
    const miTelefono = "5493525649575"; 

    const catalogoTelas = {
        'pana-azul': { img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', nombre: 'Pana Azul' },
        'pana-roja': { img: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&w=800&q=80', nombre: 'Pana Violeta' },
        'ecocuero': { img: 'https://images.unsplash.com/photo-1567016432779-094069958ad5?auto=format&fit=crop&w=800&q=80', nombre: 'Verde Bosque' },
        'lino': { img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80', nombre: 'Ocre' }
    };

    imagenMueble.style.opacity = 0;
    
    setTimeout(() => {
        imagenMueble.src = catalogoTelas[tipo].img;
        imagenMueble.style.opacity = 1;
        
        const mensaje = `Hola! Estuve viendo la web de GM Tapizados y me interesa un presupuesto para el color: ${catalogoTelas[tipo].nombre}`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        
        linkWA.href = `https://wa.me/${miTelefono}?text=${mensajeCodificado}`;
    }, 300);
}

// === ACORDEÓN DE MATERIALES ===
function toggleMaterial(elementoTarjeta) {
    elementoTarjeta.classList.toggle('activo');
}

// === ACTUALIZAR IMAGEN PRINCIPAL AL TOCAR COLOR ===
function actualizarImagenPrincipal(imagenChica, nuevaRuta) {
    const tarjeta = imagenChica.closest('.gm-material-card');
    const imagenPrincipal = tarjeta.querySelector('.gm-banner-img');
    imagenPrincipal.src = nuevaRuta;
}

// === ACORDEÓN DE SERVICIOS ===
function toggleServicio(elementoServicio) {
    elementoServicio.classList.toggle('activo');
}

// === FILTRO DEL MENÚ LATERAL ===
function filtrarCategoria(categoria, elementoClickeado) {
    const itemsMenu = document.querySelectorAll('.lista-categorias li');
    itemsMenu.forEach(item => {
        item.classList.remove('activo');
    });
    elementoClickeado.classList.add('activo');

    const tarjetas = document.querySelectorAll('.gm-material-card');
    
    tarjetas.forEach(tarjeta => {
        const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

        if (categoria === 'todas' || categoriaTarjeta === categoria) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}