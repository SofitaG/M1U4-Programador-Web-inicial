const medioTransp = prompt("medio de transporte adecuado");


if (medioTransp >= 0 && medioTransp < 1000) {
    alert("a Pie");
}
else if (medioTransp >= 1000 && medioTransp < 10000) {
    alert("Bicicleta");
}
else if (medioTransp >= 10000 && medioTransp < 30000) {
    alert("Colectivo");
}
else if (medioTransp >= 30000 && medioTransp < 100000) {
    alert("Auto");
}
else  {
    alert("Avion");
}

// let resultado = 1;
// while (resultado<=10) {
//     console.log("vuelta " + resultado);
//     resultado ++;
// }

for (let i=1; i<=10; i++) {
    console.log("numero " + i);
   
}
if (Mayor=10){
    console.log("el mayor es " + Mayor);
}