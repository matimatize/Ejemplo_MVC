import { Product } from "../model/productModel.js";

export class ProductController {
    // El controlador se encarga de manejar la lógica de negocio relacionada con los productos, como agregar, modificar, eliminar y listar productos. El controlador se comunica con el modelo para realizar las operaciones necesarias y con la vista para mostrar los datos al usuario. El controlador no debe contener lógica de presentación, solo debe manejar la lógica de negocio y enviar los datos a la vista para que los muestre al usuario.
    constructor() {
        this.productModel = new Product();
    }
    // El método addProduct se encarga de agregar un nuevo producto al modelo. El método modificarProduct se encarga de modificar un producto existente en el modelo. El método eliminarProduct se encarga de eliminar un producto del modelo. El método listarProducts se encarga de recuperar todos los productos del modelo y devolverlos como un array.
    addProduct(nombre, precio, cantidad, categoria, fecha_expiracion) {
        const id = this.productModel.generarID();
        const product = new Product(id, nombre, precio, cantidad, categoria, fecha_expiracion);
        this.productModel.add(product);
    }
    // El método modificarProduct se encarga de modificar un producto existente en el modelo. El método eliminarProduct se encarga de eliminar un producto del modelo. El método listarProducts se encarga de recuperar todos los productos del modelo y devolverlos como un array.
    modificarProduct(id, nombre, precio, cantidad, categoria, fecha_expiracion) {
        const product = new Product(id, nombre, precio, cantidad, categoria, fecha_expiracion);
        this.productModel.modificar(product);
    }
    // El método eliminarProduct se encarga de eliminar un producto del modelo. El método listarProducts se encarga de recuperar todos los productos del modelo y devolverlos como un array.
    eliminarProduct(id) {
        const product = new Product(id);
        this.productModel.eliminar(product);
    }
    // El método listarProducts se encarga de recuperar todos los productos del modelo y devolverlos como un array.
    listarProducts() {
        return this.productModel.listar();
    }
}