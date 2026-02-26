// === VISUALIZADOR DE MUEBLES ===
function cambiarTela(tipo) {
    const imagenMueble = document.getElementById('mueble-base');
    const linkWA = document.getElementById('whatsapp-link');
    
    // Tu número real
    const miTelefono = "5493525649575"; 

    const catalogoTelas = {
        'pana-azul': {
            img: 'https://picsum.photos/id/1018/800/500', // Reemplazar despues por tus fotos
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

// === ACORDEÓN DE MATERIALES (Abre y cierra la tarjeta) ===
function toggleMaterial(elementoTarjeta) {
    elementoTarjeta.classList.toggle('activo');
}

// === NUEVO: FILTRO DEL MENÚ LATERAL ===
function filtrarCategoria(categoria, elementoClickeado) {
    // 1. Pintar de negro/dorado el botón que tocamos en el menú
    const itemsMenu = document.querySelectorAll('.lista-categorias li');
    itemsMenu.forEach(item => {
        item.classList.remove('activo'); // Le sacamos el color a todos
    });
    elementoClickeado.classList.add('activo'); // Se lo ponemos solo al que tocamos

    // 2. Mostrar/Ocultar las tarjetas
    const tarjetas = document.querySelectorAll('.gm-material-card');
    
    tarjetas.forEach(tarjeta => {
        // Obtenemos qué categoría es la tarjeta mirando su "data-categoria" en el HTML
        const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

        // Si elegimos "todas" o si la tarjeta coincide con el menú que tocamos, se muestra
        if (categoria === 'todas' || categoriaTarjeta === categoria) {
            tarjeta.style.display = 'block';
        } else {
            // Si no coincide, la escondemos
            tarjeta.style.display = 'none';
        }
    });
}