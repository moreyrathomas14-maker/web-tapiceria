// === VISUALIZADOR DE MUEBLES ===
function cambiarTela(tipo) {
    const imagenMueble = document.getElementById('mueble-base');
    const linkWA = document.getElementById('whatsapp-link');
    
    // Tu número real
    const miTelefono = "5493525649575"; 

    const catalogoTelas = {
        'pana-azul': {
            img: 'https://picsum.photos/id/1018/800/500',
            nombre: 'Pana Azul'
        },
        'pana-roja': {
            img: 'https://picsum.photos/id/1019/800/500',
            nombre: 'Pana Violeta'
        },
        'ecocuero': {
            img: 'https://picsum.photos/id/1020/800/500',
            nombre: 'Verde Bosque'
        },
        'lino': {
            img: 'https://picsum.photos/id/1021/800/500',
            nombre: 'Ocre'
        }
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

// === NUEVO: ACORDEÓN DE SERVICIOS ===
// Es igual a la de materiales, pero la separamos por si después querés agregarle cosas distintas a los servicios
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