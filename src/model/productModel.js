export class Product {
    // La clase Product representa un producto con sus atributos y métodos para agregar, modificar, eliminar y listar productos. La clase Product se encarga de manejar la lógica de negocio relacionada con los productos, como generar un ID único para cada producto, almacenar los productos en el localStorage y recuperar los productos del localStorage.
    constructor(id, nombre, precio, cantidad, categoria, fecha_expiracion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.fecha_expiracion = fecha_expiracion;
    }
    // El método add se encarga de agregar un nuevo producto al localStorage. El método modificar se encarga de modificar un producto existente en el localStorage. El método eliminar se encarga de eliminar un producto del localStorage. El método listar se encarga de recuperar todos los productos del localStorage y devolverlos como un array. El método generarID se encarga de generar un ID único para cada producto basado en el ID más alto existente en el localStorage.
    add(product) {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        
    }
    // El método modificar se encarga de modificar un producto existente en el localStorage. El método eliminar se encarga de eliminar un producto del localStorage. El método listar se encarga de recuperar todos los productos del localStorage y devolverlos como un array. El método generarID se encarga de generar un ID único para cada producto basado en el ID más alto existente en el localStorage.
    modificar(product) {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const index = products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            products[index] = product;
            localStorage.setItem('products', JSON.stringify(products));
        }
    }
    // El método eliminar se encarga de eliminar un producto del localStorage. El método listar se encarga de recuperar todos los productos del localStorage y devolverlos como un array. El método generarID se encarga de generar un ID único para cada producto basado en el ID más alto existente en el localStorage.
    eliminar(product) {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const index = products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products));
        }
    }
    // El método listar se encarga de recuperar todos los productos del localStorage y devolverlos como un array. El método generarID se encarga de generar un ID único para cada producto basado en el ID más alto existente en el localStorage.
    listar() {
        return JSON.parse(localStorage.getItem('products') || '[]');
    }
    // El método generarID se encarga de generar un ID único para cada producto basado en el ID más alto existente en el localStorage.
    generarID() {
        const products = this.listar();
        if (products.length === 0) {
            return 1;
        }
        return Math.max(...products.map(p => p.id)) + 1;
    }
}