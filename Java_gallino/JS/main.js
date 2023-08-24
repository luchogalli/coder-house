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

function Saludar(){
    const iniciar_sesion = "iniciar_sesion";
    const ya_estuvo = localStorage.getItem(iniciar_sesion);
    
    if (ya_estuvo) {
        alert("Bienvenido otra vez!");
    }
    else{
        localStorage.setItem(iniciar_sesion, true);
    }
}

function BuscarPiloto(numero){
    if (isNaN(numero)) {
        alert("Valor invalido, vuelva a ingresar");
        return;
    }
    
    const piloto_anterior = "piloto_anterior";
    const piloto_anterior_vuelo = localStorage.getItem(piloto_anterior);

    let continuar = true;
    if (numero === piloto_anterior_vuelo) {
        continuar = confirm("Este es el mismo piloto que buscaste la anterior vez, desear continuar?");
    }
    
    if (continuar === false) {
        return;
    }

    localStorage.setItem(piloto_anterior, numero);

    const numero_de_vuelo = parseInt(numero);
    const piloto_encontrado = pilotos.find(piloto => piloto.info_vuelo.vuelo === numero_de_vuelo);
    const encontre_piloto = piloto_encontrado != null;
    
    if (encontre_piloto === true) {
        const texto = piloto_encontrado.TextoInfoDePiloto();
        alert(texto);
    }
    else {
        alert("No se encontro piloto");
    }
}

async function Core(){
    pilotos = await ImportarPilotos();
}

const botonCache = document.getElementById("boton-cache");
botonCache.addEventListener("click", () => {
    localStorage.clear();
});

const botonInput = document.getElementById("boton-piloto");
botonInput.addEventListener("click", () => {
    const inputPiloto = document.getElementById("input-piloto");
    BuscarPiloto(inputPiloto.value);
});

let pilotos;

Saludar();
Core();