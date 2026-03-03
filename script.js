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