class InfoVuelo {
    constructor(vuelo, hora_salida, hora_llegada) {
        this.vuelo = vuelo;
        this.hora_salida = hora_salida;
        this.hora_llegada = hora_llegada;
    }

    TiempoDeVuelo() {
        return this.hora_llegada - this.hora_salida;
    }
}

class Piloto {
    constructor(nombre, edad, horas_de_vuelo, info_vuelo) {
        this.nombre = nombre;
        this.edad = edad;
        this.horas_de_vuelo = horas_de_vuelo;
        this.info_vuelo = info_vuelo;
    }

    TextoInfoDePiloto() {
        let texto = "";
        texto += "Nombre: " + this.nombre + "\n";
        texto += "Edad: " + this.edad + "\n";
        texto += "Horas de vuelo: " + this.horas_de_vuelo + "\n";
        texto += "Duracion de vuelo: " + this.info_vuelo.TiempoDeVuelo() + "\n";
        return texto;
    }
}

var pilotos = new Array();
pilotos.push(new Piloto("Carlos Medina", 58, 12000, new InfoVuelo(10, 8, 15)));
pilotos.push(new Piloto("Marcos Perez", 38, 1800, new InfoVuelo(20, 8, 16)));
pilotos.push(new Piloto("Carlos Menem", 55, 18000, new InfoVuelo(30, 8, 18)));
pilotos.push(new Piloto("Diego Gutierrez", 46, 10500, new InfoVuelo(40, 10, 12)));
pilotos.push(new Piloto("Jorge Macareno", 28, 8000, new InfoVuelo(50, 14, 15)));
pilotos.push(new Piloto("Nikola Ksuftky", 20, 5000, new InfoVuelo(60, 2, 15)));
pilotos.push(new Piloto("Zotroy Vladimuski", 41, 14400, new InfoVuelo(70, 8, 15)));

let imput = prompt("Ingrese el numero de vuelo");

if (isNaN(imput) === true) {
    alert("Formato no valido");
    imput = -1;
}

const numero_de_vuelo = parseInt(imput);

let piloto_encontrado;
let encontre_piloto = false;

for (let index = 0; index < pilotos.length; index++) {
    const element = pilotos[index];
    if (element.info_vuelo.vuelo === numero_de_vuelo) {
        piloto_encontrado = element;
        encontre_piloto = true;
        break;
    }
}

if (encontre_piloto === true) {
    let texto = "";
    texto += piloto_encontrado.TextoInfoDePiloto();
    alert(texto);
}
else {
    alert("No se encontro piloto");
}