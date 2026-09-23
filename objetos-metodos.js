// ejemplo de objeto con metodos - datos de un producto

const producto = {
    id: "p-07",
    nombre: "Agua",
    precio: 15,
    categorias:"bebidas",
    disponible: true,

//metodos
resumen() {
    return this.nombre + " -$" + this.precio + " (" + this.categorias +")";
},
estaDisponible(){
    return this.disponible;
}

};

//paso uno mostrando objeto
console.log("---Objeto completo---")
console.log(producto);