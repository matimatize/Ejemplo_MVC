export class Product {
    constructor(id, nombre, precio, cantidad, categoria, fecha_expiracion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.fecha_expiracion = fecha_expiracion;
    }
    add(product) {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        
    }
    modificar(product) {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const index = products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            products[index] = product;
            localStorage.setItem('products', JSON.stringify(products));
        }
    }
    eliminar(product) {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const index = products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products));
        }
    }
    listar() {
        return JSON.parse(localStorage.getItem('products') || '[]');
    }
    generarID() {
        const products = this.listar();
        if (products.length === 0) {
            return 1;
        }
        return Math.max(...products.map(p => p.id)) + 1;
    }
}