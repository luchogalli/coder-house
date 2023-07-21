function Piloto(nombre, edad, horas_de_vuelo, vuelo){
this.nombre = nombre;
this.edad = edad;
this.horas_de_vuelo = horas_de_vuelo;
this.vuelo = vuelo;
}

var pilotos = new Array();
pilotos.push(new Piloto ("Carlos Medina", 58, 12000, 10));
pilotos.push(new Piloto ("Marcos Perez", 38, 1800, 20));
pilotos.push(new Piloto ("Carlos Menem", 55, 18000, 30));
pilotos.push(new Piloto ("Diego Gutierrez", 46, 10500, 40));
pilotos.push(new Piloto ("Jorge Macareno", 28, 8000, 50));
pilotos.push(new Piloto ("Nikola Ksuftky", 20, 5000, 60));
pilotos.push(new Piloto ("Zotroy Vladimuski", 41, 14400, 70));

const numero_de_vuelo = parseInt(prompt("Ingrese el numero de vuelo"));

for (let index = 0; index < pilotos.length; index++) {
    const element = array[index];
    if(element.vuelo === numero_de_vuelo){
        break;
    }
}