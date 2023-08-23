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
        const terminacion_de_linea = "\n";
        texto += "Nombre: " + this.nombre + terminacion_de_linea;
        texto += "Edad: " + this.edad + terminacion_de_linea;
        texto += "Horas de vuelo: " + this.horas_de_vuelo + terminacion_de_linea;
        texto += "Duracion de vuelo: " + this.info_vuelo.TiempoDeVuelo() + terminacion_de_linea;
        return texto;
    }
}

async function ImportarPilotos(){
    const json = await fetch("./JSONS/pilotos.json");
    if (!json.ok) {
        console.error("Error");
        return null;
    }
    
    const data = await json.json();

    const pilotos = new Array();
    for (let index = 0; index < data.pilotos.length; index++) {
        const element = data.pilotos[index];
        const infoVuelo = new InfoVuelo(element.info_vuelo.vuelo, element.info_vuelo.hora_salida, element.info_vuelo.hora_llegada);
        pilotos.push(new Piloto(element.nombre, element.edad, element.horas_de_vuelo, infoVuelo));
    }

    return pilotos;
}

async function Core(){
    const pilotos = await ImportarPilotos();
    
    let input = prompt("Ingrese el numero de vuelo");
    
    if (isNaN(input) === true) {
        alert("Formato no valido");
        input = -1;
    }
    
    const numero_de_vuelo = parseInt(input);
    const piloto_encontrado = pilotos.find(item => item.info_vuelo.vuelo === numero_de_vuelo);
    let encontre_piloto = piloto_encontrado != null;
    
    if (encontre_piloto === true) {
        let texto = "";
        texto += piloto_encontrado.TextoInfoDePiloto();
        alert(texto);
    }
    else {
        alert("No se encontro piloto");
    }
}
