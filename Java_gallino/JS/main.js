class Piloto {
    constructor(nombre, edad, horas_de_vuelo, vuelo) {
        this.nombre = nombre;
        this.edad = edad;
        this.horas_de_vuelo = horas_de_vuelo;
        this.vuelo = vuelo;
    }

    TextoInfoDePiloto(){
        let texto = "";
        texto += "Nombre: " + piloto_encontrado.nombre + "\n";
        texto += "Edad: " + piloto_encontrado.edad + "\n";
        texto += "Horas de vuelo: " + piloto_encontrado.horas_de_vuelo + "\n";
    }
}

var pilotos = new Array();
pilotos.push(new Piloto("Carlos Medina", 58, 12000, 10));
pilotos.push(new Piloto("Marcos Perez", 38, 1800, 20));
pilotos.push(new Piloto("Carlos Menem", 55, 18000, 30));
pilotos.push(new Piloto("Diego Gutierrez", 46, 10500, 40));
pilotos.push(new Piloto("Jorge Macareno", 28, 8000, 50));
pilotos.push(new Piloto("Nikola Ksuftky", 20, 5000, 60));
pilotos.push(new Piloto("Zotroy Vladimuski", 41, 14400, 70));

let imput = prompt("Ingrese el numero de vuelo");

if (isNaN(imput)===true){
    alert("Formato no valido");
    imput = -1;
}

const numero_de_vuelo = parseInt(imput);

let piloto_encontrado;
let encontre_piloto = false;

for (let index = 0; index < pilotos.length; index++) {
    const element = pilotos[index];
    if(element.vuelo === numero_de_vuelo){
        piloto_encontrado = element;
        encontre_piloto = true;
        break;
    }
} 

if(encontre_piloto === true){
    let texto = "";
    texto += piloto_encontrado.TextoInfoDePiloto();
    alert(texto);
}
else{
    alert("No se encontro piloto");
}