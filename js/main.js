//Simulador plazo fijo
//Ibound
const TNA = 118;
const montoMaximo = 10000000;
let capitalizacion;
let tasaInteres;
let cliente ="NO";
let sueldo ="NO";
let alicuota;


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

let comision = valorAlicuota(cartera);

//Calculo de Plazo

let ciclos = 360 / plazo;
console.log("Ciclos: "+ ciclos);

let tasaEfectiva = Math.pow(((TNA/100) / ciclos)+1,ciclos)-1 ;

console.log("TEA: "+ tasaEfectiva.toFixed(2));

let interesGenerado = montoConsulta * ((TNA/100) / ciclos);

console.log("Intereses: "+ interesGenerado.toFixed(2));

let montoFinal = montoConsulta + interesGenerado;

console.log("Neto a cobrar: "+ montoFinal.toFixed(2));
console.log("TNA: "+ TNA+" %");
console.log("TEN: "+ tasaEfectiva.toFixed(2) +" %");

let recapitalizacion = calcularCapitalizacion(plazo);


if(sosCliente == 1){
    cliente= "SI";
    comision = comision -1
}

console.log("Cliente: "+ cliente);

if(cuentaSueldo == 1){
    sueldo= "SI";
    comision = comision -1
}

console.log("Tiene cuenta sueldo:  "+ sueldo);

console.log("Comision final: "+comision);

let cobroFinal = montoFinal *(1-comision/100);
let comisionPeso = montoFinal*comision/100;

console.log("Cobro final: "+cobroFinal.toFixed(2));

console.log("Comision Pesp: "+comisionPeso.toFixed(2));


let salida = "SIMULADOR DE PLAZO FIJO: \n\n";
salida += "Sos Cliente: "+ cliente +"\n";
salida += "Tenes cuenta sueldo: "+ sueldo +"\n";
salida += "Tipo de cuenta: "+ tipoCuenta +"\n"; 
salida += "Monto a invertir: $"+ montoConsulta +"\n"; 
salida += "Plazo: "+ plazo +"\n"; 
salida += "Capitalizacion: "+ recapitalizacion +"\n"; 
salida += "Monto a cobrar: $ "+ cobroFinal.toFixed(2) +"\n"; 
salida += "Comision: "+ comisionPeso.toFixed(2) +"%\n"; 


alert(salida);