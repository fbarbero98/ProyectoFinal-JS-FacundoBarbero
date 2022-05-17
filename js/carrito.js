//LOGICA DEL CARRITO: 

let carrito = [];

const agregarProductoAlCarrito = (precioProducto,producto,imagenProducto)=>{
    let precio = document.getElementById(precioProducto).innerText;
    let imagen = document.getElementById(imagenProducto).innerHTML;
    let posicion = carrito.findIndex(elem => elem.producto === producto);
    posicion!=-1 ? carrito[posicion].cantidad += 1 : carrito.push({producto: producto,precio:precio, cantidad: 1, imagen: imagen});
    
    renderizarElemento()
    
    sessionStorage.setItem('carrito', JSON.stringify(carrito))
    Swal.fire({
        icon: 'success',
        title: 'El producto fue agregado al carrito!',
        showConfirmButton: false,
        timer: 1000
    })
    
}

const renderizarElemento = ()=>{
    listadoCarrito.innerHTML = '';
    let sumaTotal = 0;
    let tabla = document.createElement("div");

// A ese div le agregaremos todos los datos de la tabla
tabla.innerHTML = `
    <table id="tablaCarrito" class="table text-white">
        <thead>
            <tr>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Eliminar</th>
            </tr>
        </thead>
        <tbody id="bodyTabla"></tbody>

    </table>
`;

listadoCarrito.append(tabla);

    if(carrito.length > 0){
        for (let index = 0; index < carrito.length; index++) {
            let bodyTabla = document.getElementById("bodyTabla");
            let elemento = document.createElement('tr')
            elemento.className = `${carrito[index].producto}`
            let precioParcial = `${carrito[index].precio}` * `${carrito[index].cantidad}`
            elemento.innerHTML = `
            
            <td>${carrito[index].producto}</td>
            <td>${carrito[index].cantidad}</td>
            <td>${precioParcial}</td>
            <td><button id="butnElim-${carrito[index].producto}" type="button" class= "btn btn-dark">Eliminar del carrito</button></td>

            `
            sumaTotal = sumaTotal + carrito[index].precio * carrito[index].cantidad
            bodyTabla.append(elemento)
            let eliminar = document.getElementById(`butnElim-${carrito[index].producto}`)

            eliminar.onclick = () =>{
                eliminarProductoDelCarrito(`${carrito[index].producto}`)
            }
            
        }
        let verTotal = document.createElement('p') 
        verTotal.innerText = `Total a pagar: ${sumaTotal}`
        listadoCarrito.append(verTotal)
    }

}
const eliminarProductoDelCarrito = (producto) =>{
    let posicion = carrito.findIndex(elem => elem.producto === producto);
    if (posicion!=-1 && carrito[posicion].cantidad > 0) {
    
    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {
        
    
            if(result.isConfirmed) {
             if (carrito[posicion].cantidad > 0) {
                 carrito[posicion].cantidad -= 1;


            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'Se ha eliminado el producto del carrito!'
            })
            console.log("entro el if");
            console.log(carrito[posicion].cantidad); 
            console.log(posicion);
            renderizarElemento()
            sessionStorage.setItem('carrito', JSON.stringify(carrito))
            }}
            else{ Swal.fire({
                title: 'No borrado!',
                icon: 'warning',
                text: 'El elemento no se elimino del carrito!'
            })
        console.log('elemento no borrado')}
            
          })
          
    }
    else{ Swal.fire({
        title: '¡El producto no esta en el carrito!',
        icon: 'warning',
        confirmButtonText: 'OK'})
        console.log("entro el else") 
        carrito[posicion] ? console.log(carrito[posicion].cantidad) : console.log('El producto no tiene la propiedad "cantidad" en el objeto carrito')
        console.log(posicion)

}
}
if (carrito.length == 0 && sessionStorage.getItem('carrito')){
    let carritoStorage = JSON.parse(sessionStorage.getItem('carrito'));
    carrito = carritoStorage
   renderizarElemento()
}