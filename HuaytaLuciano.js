class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return `Me llamo ${this.nombre} ${this.apellido}`
    }

    addMascota(newMascota) {
        return this.mascotas.push(newMascota)
    }

    countMascotas() {
        return `Tengo ${this.mascotas.length} mascotas`
    }

    addBook(nombreLibro, autorLibro) {
        return this.libros.push({
            nombre: nombreLibro,
            autor: autorLibro,
        })
    }

    getBookNames() {
        return this.libros.map(item => item.nombre)
    }
}

const libros = []

const mascotas = []

let u = new Usuario('Luciano', 'Huayta', libros, mascotas)

//Invoco mis metodos 🧙‍♂️

console.log("Hola tuto!")

console.log(u.getFullName())

u.addMascota("Perro")
u.addMascota("Gato")
u.addMascota("Hamster")

console.log(u.countMascotas())

u.addBook("El hombre en busca de sentido","Viktor Frankl")
u.addBook("The pragmatic programmer","David Thomas & Andrew Hunt")
u.addBook("Oyasumi Punpun","Inio Asano")

//a ver el nuevo usuario comppleto
console.log(u)