function calcularConsumoElectricidad(cantidad, costo) {
  var total = cantidad * costo;
  return total;
}


var totalConsumo = 0;
for (var i = 0; i < 3; i++) {
  var nombreElectrodomestico = prompt("Ingrese el nombre del electrodoméstico " + (i+1));
  var cantidadUsada = parseInt(prompt("Ingrese la cantidad de electricidad usada por hora:"));
  var costoPorHora = parseInt(prompt("Ingrese el costo por hora:"));


  if (!isNaN(cantidadUsada) && !isNaN(costoPorHora)) {
    var consumoElectrico = calcularConsumoElectricidad(cantidadUsada, costoPorHora);
    totalConsumo += consumoElectrico;

    console.log(nombreElectrodomestico + " consume: $" + consumoElectrico + " por hora");
  } else {
    console.log("Entrada no válida.");
    i--;
  }
}

console.log("El consumo eléctrico total por hora es de $" + totalConsumo);
