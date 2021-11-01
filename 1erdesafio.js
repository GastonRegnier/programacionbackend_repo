class Usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;

    }

    getFullName() {
        return `mi nombre completo es ${this.nombre} ${this.apellido}`;
    }
    addMascotas() { 
        this.mascotas.push(mascotas)
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(nombre, autor) {
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }
    getBookNames() {
        let nombres = []
        for (let i = 0; i < this.libros.length; i++) {
            nombres.push(this.libros[i].nombre)
        }
        return nombres
    }

}

let nombre = "Juan Carlos"
let apellido = "MuchoGusto"
let mascotas = []
let libros = []
let usuario = new Usuario(nombre, apellido, mascotas, libros);

usuario.addMascotas("Pato Manuel")
usuario.addMascotas("Caballo Juan")
usuario.addBook('Harry Potter', 'JKR')
usuario.addBook('GOT', 'George R. R. Martin')

console.log(usuario.getFullName())
console.log(usuario.addMascotas())
console.log(usuario.getBookNames())