
import {ProductView} from "../src/view/productView.js";
import {ProductController} from "./controller/productController.js";
const controller = new ProductController();
const view = new ProductView(controller);
view.render();

//Asignamos los arrays necesarios para el funcionamiento del programa
const categorias = ["Alimentos", "Bebidas", "Limpieza", "Higiene", "Otros"];

//Creamos los desplegables de categorias para los formlarios
const categoriaSelect = document.getElementById("categoria");
const mcategoriaSelect = document.getElementById("mcategoria");

// creamos desplegable de categorias
categorias.forEach((categoria) => {
  const option = document.createElement("option");
  option.value = categoria;
  option.textContent = categoria;
  categoriaSelect.appendChild(option);
  //con cloneNode(true) evitamos que se eliminen las opciones del primer select al agregar las mismas al segundo select
  mcategoriaSelect.appendChild(option.cloneNode(true));
});
// Asignamos los eventos necesarios para el funcionamiento del formulario principal, el formulario de modificacion de productos y la tabla de productos
const form = document.getElementById("formulario");
const tabla = document.querySelector(".tabla");
// El evento submit del formulario principal se encarga de agregar un nuevo producto al controlador y de actualizar la vista con los datos actuales. El evento click de la tabla se encarga de detectar si se hizo click en un botón de modificar o eliminar y de llamar a los métodos correspondientes de la vista para modificar o eliminar el producto.
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("producto").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const categoria = document.getElementById("categoria").value;
  const fecha_expiracion = document.getElementById("fecha_expiracion").value;
  controller.addProduct(nombre, precio, cantidad, categoria, fecha_expiracion);
  view.render();
  form.reset();
  });

// El evento click de la tabla se encarga de detectar si se hizo click en un botón de modificar o eliminar y de llamar a los métodos correspondientes de la vista para modificar o eliminar el producto.
tabla.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-modif")) {
    const id = parseInt(event.target.getAttribute("data-id"));
    view.modificarProduct(id);
  } else if (event.target.classList.contains("btn-elim")) {
    const id = parseInt(event.target.getAttribute("data-id"));
    view.eliminarProduct(id);
  }
});



