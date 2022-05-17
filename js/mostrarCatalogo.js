//SI EL USUARIO QUIERE VER EL CATALOGO, HAGO UN DI:
verCatalogo.onclick = () =>{
    catalogo.className = 'visible';
    inicio.className = 'oculto';
    listadoCarrito.className = 'oculto';
    verCatalogo.className = 'nav-link active'
    homeBase.className = 'nav-link'
    verCarrito.className = 'nav-link'
}
homeBase.onclick = () =>{
    catalogo.className = 'oculto'
    inicio.className = 'visible'
    listadoCarrito.className = 'oculto'
    homeBase.className = 'nav-link active'
    verCarrito.className = 'nav-link'
    verCatalogo.className = 'nav-link'
}

verCarrito.onclick = () =>{
    inicio.className = 'oculto';
    catalogo.className = 'oculto';
    listadoCarrito.className = 'visible';
    verCarrito.className = 'nav-link active'
    homeBase.className = 'nav-link'
    verCatalogo.className = 'nav-link'
}

botonInicio.onclick = () =>{
    catalogo.className = 'visible';
    inicio.className = 'oculto';
    listadoCarrito.className = 'oculto';
    verCatalogo.className = 'nav-link active'
    homeBase.className = 'nav-link'
    verCarrito.className = 'nav-link'
}