//Simulador plazo fijo
//Ibound
const TNA = 118;
const montoMaximo = 10000000;
let alicuota;
let recapitalizacion;
let tasaInteres;
let cliente ="NO";
let sueldo ="NO";

// Preguntar si es cliente
let sosCliente = ingresarCliente();

// Preguntar si tiene cuenta sueldo
let cuentaSueldo = ingresarSueldo();

// Preguntar tipo de cuenta o cartera
let tipoCuenta = cartera();

// Preguntar monto a consultar
let montoConsulta = montoInicio();

// Preguntar plazo
let plazo = duracion();




//Calculo de Plazo

let ciclos = 360 / plazo;
console.log("Ciclos: "+ ciclos);

let tasaEfectiva = Math.pow(((TNA/100) / ciclos)+1,ciclos)-1 ;

console.log("TEA: "+ tasaEfectiva);

let interesGenerado = montoConsulta * ((TNA/100) / ciclos);

console.log("Intereses: "+ interesGenerado);

let montoFinal = montoConsulta * tasaEfectiva;

console.log("Neto a cobrar: "+ montoFinal);
console.log("TNA: "+ montoFinal+" %");
console.log("TEN: "+ tasaEfectiva +" %");

if(plazo == 30){
    recapitalizacion = "Mensual";
} else if(plazo == 60){
    recapitalizacion = "Bimestral";
} else if(plazo == 180){
    recapitalizacion = "Semestral";
} else {
    recapitalizacion ="Anual";
}

console.log("Capitalizacion "+recapitalizacion);


if(sosCliente == 1){
    cliente= "SI";
}

console.log("Cliente: "+ cliente);


if(cuentaSueldo == 1){
    sueldo= "SI";
}

console.log("Tiene cuenta sueldo:  "+ sueldo);
