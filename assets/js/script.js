class Propietario {
    constructor(nombre, telefono,direccion ) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
       
    }

    get nombre() {
        return this._nombre;
    }
    get telefono() {
        return this._telefono;
    }
    get direccion() {
        return this._direccion;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion} y el número telefónico de contacto: ${this._telefono}. `;
    }
}

class Animal extends Propietario {
    constructor(nombre, telefono, direccion, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }

    datosDelAnimal() {
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal {
    constructor(nombre, telefono, direccion, tipo, nombreMascota, enfermedadMascota) {
        super(nombre, telefono, direccion, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedadMascota = enfermedadMascota;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nuevoNombreMascota) {
        this._nombreMascota = nuevoNombreMascota;
    }

    get enfermedadMascota() {
        return this._enfermedadMascota;
    }
    set enfermedadMascota(enfermedadNueva) {
        this._enfermedadMascota = enfermedadNueva;
    }

    datosDeLaMascota() {
        return ` Mientras que el nombre de la mascota es: ${this._nombreMascota}, y la enfermedad es: ${this._enfermedadMascota}.`;
    }
}


agregarDatos.addEventListener("click", (event) => {
  event.preventDefault();
  let nombre = document.getElementById("propietario").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let tipo = document.getElementById("tipo").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let enfermedadMascota = document.getElementById("enfermedad").value;
  let propietario = new Propietario(nombre, telefono, direccion);
  let animal = new Animal(nombre, telefono, direccion, tipo);
  let mascota = new Mascota(
    nombre,
    telefono,
    direccion,
    tipo,
    nombreMascota,
    enfermedadMascota
  );

  document.getElementById("propietario").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("tipo").value = "";
  document.getElementById("nombreMascota").value = "";
  document.getElementById("enfermedad").value = "";
  document.getElementById("propietario").focus();
  document.getElementById("resultado").innerHTML += `
    <ul class="listas mt-5">
      <li>${propietario.datosPropietario()}</li>
      <li>${animal.datosDelAnimal()},${mascota.datosDeLaMascota()}</li>
    </ul>
    `;
});