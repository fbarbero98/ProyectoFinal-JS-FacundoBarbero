const agregarDiv = document.createElement('div');


//?ARMO EL CATALOGO:
const productosJSON = () => {fetch('js/products.json')
        .then((resp) => resp.json())
        .then((data) =>  {data.forEach(producto => {
            let divContenedor = document.createElement('div');
            divContenedor.innerHTML = 
            
            `
            <div class="card text-center d-flex flex-wrap">
            <div class= "card-body">
            <h2 class="card-title text-dark">${producto.cosa}</h2>
            <div class= "text-dark"><span id= "imagen-${producto.id}"> <img src="${producto.imagen}" class="width=10% height=10%"></span></div>
            <h5 class="card-subtitle mb-2 text-muted">${producto.specs}</h5>
            <p class= "text-dark">Precio: $<span id="precio-${producto.id}">${producto.precio}</span></p>                  
            <button id="btn-${producto.id}" type="button">Agregar al carrito</button>
            </div>
            </div>`

        
    
    contenedor.append(divContenedor)
    let botonAgregar = document.getElementById(`btn-${producto.id}`);
    botonAgregar.onclick = () =>{
        agregarProductoAlCarrito(`precio-${producto.id}`,`${producto.cosa}`,`imagen-${producto.id}`);
    }
})
;})
}

productosJSON();



