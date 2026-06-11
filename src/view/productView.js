import { ProductController } from '../controller/productController.js';

export class ProductView {
       
    constructor(controller) {
        this.controller = controller;   
    };
    
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
                    <button class="modificar-btn" data-id="${product.id}">Modificar</button>    
                    <button class="eliminar-btn" data-id="${product.id}">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        // Agregar event listeners a los botones de modificar y eliminar
        const modificarButtons = document.querySelectorAll('.modificar-btn');
        const eliminarButtons = document.querySelectorAll('.eliminar-btn');
    }
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
            
        }
    }
    eliminarProduct(id) {
        this.controller.eliminarProduct(id);
        this.render(); 
    }


    }