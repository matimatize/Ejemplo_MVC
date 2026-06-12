import { ProductController } from '../controller/productController.js';
// La vista se encarga de mostrar los datos al usuario y de interactuar con el usuario a través de eventos. La vista no debe contener lógica de negocio, solo debe mostrar los datos que le proporciona el controlador y enviar las acciones del usuario al controlador.
export class ProductView {
   // El constructor recibe una instancia del controlador para poder interactuar con él y obtener los datos necesarios para mostrar al usuario.    
    constructor(controller) {
        this.controller = controller;   
    };
    // El método render se encarga de mostrar los datos al usuario. En este caso, muestra una tabla con los productos. El método render se llama cada vez que se agrega, modifica o elimina un producto para actualizar la vista con los datos actuales.
    render() {
        const products = this.controller.listarProducts();
        const tableBody = document.getElementById('tabla-productos');
        tableBody.innerHTML='';
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.nombre}</td>
                <td>${product.cantidad}</td>
                <td>${product.precio}</td>    
                <td>${product.categoria}</td>
                <td>${product.fecha_expiracion}</td>
                <td>
                    <button class="btn-modif" data-id="${product.id}">Modificar</button>    
                </td>
                <td>
                   <button class="btn-elim" data-id="${product.id}">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        // Agregar event listeners a los botones de modificar y eliminar
        const modificarButtons = document.querySelectorAll('.btn-modif');
        const eliminarButtons = document.querySelectorAll('.btn-elim');
    }
    // El método modificarProduct se encarga de mostrar un formulario con los datos del producto a modificar y de enviar los datos modificados al controlador para que actualice el producto. El método eliminarProduct se encarga de enviar la acción de eliminar al controlador para que elimine el producto.
    modificarProduct(id) {
        const product = this.controller.listarProducts().find(p => p.id === id);
        if (product) {
            document.getElementById('mproducto').value = product.nombre;
            document.getElementById('mprecio').value = product.precio;
            document.getElementById('mcantidad').value = product.cantidad;
            document.getElementById('mcategoria').value = product.categoria;
            document.getElementById('mfecha_expiracion').value = product.fecha_expiracion;
            document.querySelector('dialog').showModal();
            const modificarForm = document.querySelector('dialog form');
            const cancelarBtn = document.getElementById('cancelar');
            
            modificarForm.onsubmit = (event) => {
                event.preventDefault();
                const nombre = document.getElementById('mproducto').value;
                const precio = parseFloat(document.getElementById('mprecio').value);
                const cantidad = parseInt(document.getElementById('mcantidad').value);
                const categoria = document.getElementById('mcategoria').value;
                const fecha_expiracion = document.getElementById('mfecha_expiracion').value;
                this.controller.modificarProduct(id, nombre, precio, cantidad, categoria, fecha_expiracion);
                this.render();
                document.querySelector('dialog').close();
            };
            
            cancelarBtn.onclick = () => {
                document.querySelector('dialog').close();
            };
        }
    }

    // El método eliminarProduct se encarga de enviar la acción de eliminar al controlador para que elimine el producto. Luego, llama al método render para actualizar la vista con los datos actuales.
    eliminarProduct(id) {
        this.controller.eliminarProduct(id);
        this.render(); 
    }


    }