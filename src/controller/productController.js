import { Product } from "../model/productModel.js";

export class ProductController {

    constructor() {
        this.productModel = new Product();
    }
    addProduct(nombre, precio, cantidad, categoria, fecha_expiracion) {
        const id = this.productModel.generarID();
        const product = new Product(id, nombre, precio, cantidad, categoria, fecha_expiracion);
        this.productModel.add(product);
    }
    modificarProduct(id, nombre, precio, cantidad, categoria, fecha_expiracion) {
        const product = new Product(id, nombre, precio, cantidad, categoria, fecha_expiracion);
        this.productModel.modificar(product);
    }
    eliminarProduct(id) {
        const product = new Product(id);
        this.productModel.eliminar(product);
    }
    listarProducts() {
        return this.productModel.listar();
    }
}