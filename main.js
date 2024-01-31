// Bienvenidos a "En La Pera" Bebidas  

let mensajebienvenida = document.getElementById("saludo");
mensajebienvenida.innerHTML = "BIENVENIDOS A 'EN LA PERA' BEBIDAS"

let ofrecer = document.getElementById('ofrecer');
ofrecer.innerHTML = "Nos encantaria saber que clase de bebida le gustaria adquirir, esto es con lo que contamos en stock"; 






//MODIFICAMOS EL DOM Y PONEMOS EL STOCK DE BEBIDAS VINCULADO A LA BASE DE DATOS
const divProductos = document.getElementById ("productos") 
let productosDisponibles = JSON.parse(localStorage.getItem("productos"));


document.addEventListener("DOMContentLoaded", () => {
  generarCardsProductos(productosDisponibles)
})


const generarCardsProductos = (productos) => {
  
  divProductos.innerHTML = "";

  productos.forEach((producto) => {

  const { img, id, nombre,precio,marca} = producto
  
  let div = document.createElement("div")
  div.innerHTML = `
              
    <div class="contenedor-items">
        <div class="info-bebida">
            <figure>
              <img class="foto-bebida" id: "foto-bebida" src="${img}" alt="${nombre}"/>
            </figure>
            <div class="descripcionbebida" id:">
              <h3 class="identificacion">Id: ${id}</h3>
              <p class="nombrebebida">Nombre: ${nombre}</p>
              <b class="precio">$${precio}</b>
              <p class="marca"> Marca:"${marca}"</p>
              <button class="boton-comprar" id="btn${id}"> AGREGAR AL CARRITO </button>
            </div>
        </div>
    </div>
              
  `
  divProductos.appendChild(div);
  
  
  const btnComprar = document.getElementById(`btn${id}`);
  btnComprar.addEventListener("click", () => comprarProducto(producto.id));
  });

  
  
  
};



//LLAMAMOS A LA FUNCION MOSTRAR BEBIDAS PARA QUE SE MUESTREN EN LA PAGINA
// mostrarProductos(productos);

//-------------------------------------------------CARRITO---------------------------------//

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]));

let carrito = JSON.parse(sessionStorage.getItem("carrito"));

const comprarProducto = (idProducto) => {

  const producto = productosDisponibles.find((producto) => producto.id ===idProducto)
  
  const { id, nombre, precio, marca, img} = producto

  const productoCarrito = carrito.find((producto) => producto.id === idProducto);

  if (productoCarrito === undefined) {
    const nuevoProducto = {
      id: id,
      nombre : nombre,
      precio: precio,
      marca: marca,
      img : img,
      cantidad : 1
    }
  
  carrito.push(nuevoProducto);

  sessionStorage.setItem("carrito", JSON.stringify(carrito));
  
  }else {

    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto); 

    carrito[indexProductoCarrito].cantidad++
    carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad;

    sessionStorage.setItem("carrito",JSON.stringify(carrito));


  }

  carrito = JSON.parce(sessionStorage.getItem("carrito"));


}


let contenedorproductoscarrito = document.getElementById("contenedorproductoscarrito");

contenedorproductoscarrito.addEventListener("DOMContentLoaded", () =>{
  dibujarCarrito()
})


let carritoProductos = document.getElementById ("carritoproductos");


const dibujarCarrito = () => {
  carrito.innerHTML = ''
  carrito.forEach(producto => {
    const {cantidad, nombre, precio} = producto
    let div = document.createElement("div")

    div.innerHTML= `
    
    <div class="informacionproducto">
    <span class="cantidadproductocarrito">${cantidad}</span>
    <p class="tituloprocuctocarrito">${nombre}</p>
    <span class="precioprocutocarrito">$${precio}</span>
    <img src="img/cerrar.svg" alt="cerrar" class="cerraricono">
    
    `
    carritoProductos.appendChild(div)
  })

}




let boton = document.getElementById("boton")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
  alert ("Fernet >%40  Gancia = %25  Gin %35 a 54% Vodka >%40")
}

