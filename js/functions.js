function ingresarCliente(){
    let sosCliente = prompt("Sos Cliente?\n1-Si\n2-No").toUpperCase();

//Verificar si es cliente
    while (sosCliente != 1 && sosCliente != 2){
        alert("Error, favor de utilizar 1-SI o 2-NO para indicar si sos cliente");
        sosCliente = prompt("Sos Cliente?\n1-Si\n2-No").toUpperCase() ;
    }

    console.log("Sos cliente?: "+ sosCliente);

    return sosCliente;
}

function ingresarSueldo(){
    let cuentaSueldo = prompt("Tiene cuenta sueldo?\n1-Si\n2-No").toUpperCase();


    while (cuentaSueldo != 1 && cuentaSueldo != 2){
        alert("Error, favor de utilizar 1-SI o 2-NO para indicar si sos es cuenta sueldo");
        cuentaSueldo = prompt("Tiene cuenta sueldo?\n1-Si\n2-No");
    }

    console.log("Tiene Cuenta Sueldo?: "+ cuentaSueldo);

    return cuentaSueldo;
}

function cartera(){
    let tipoCuenta = prompt("Ingrese el tipo de Cuenta: Normal/Gold/Premium/Otros").toUpperCase();

    return tipoCuenta;
}

function valorAlicuota(cartera){
    if(tipoCuenta == "NORMAL"){
        alicuota = 7;
    } else if(tipoCuenta == "GOLD"){
        alicuota = 5;
    } else if(tipoCuenta == "PREMIUM"){
        alicuota = 3;
    } else {
        alicuota = 8;
    }

    return alicuota;
}



function montoInicio(){
    let montoConsulta = parseFloat(prompt("Ingrese monto a Consultar: "));


    while (montoConsulta>montoMaximo){
        alert("El monto supera el maximo permitido de $"+montoMaximo);
        montoConsulta = parseFloat(prompt("Ingrese monto a Consultar: "));

        if(montoConsulta <= montoMaximo){
            break;
        }

    }
    console.log("Monto consultado: $"+ montoConsulta);

    return montoConsulta;
}

function duracion(){
    let plazo =parseFloat(prompt("Ingrese plazo: 30/60/180/360:"));

    while (plazo != 30 && plazo != 60 && plazo != 180 && plazo != 360){
        alert("El plazo es indicado es Incorrecto, solo se pueden plazos de 30, 60, 180 y 360 días");
        plazo =parseFloat(prompt("Ingrese plazo: 30/60/180/360:"));
    }

    console.log("Plazo Consultado: "+ plazo);

    return plazo;

}

function calcularCapitalizacion(plazo){
    if(plazo == 30){
        capitalizacion = "Mensual";
    } else if(plazo == 60){
        capitalizacion = "Bimestral";
    } else if(plazo == 180){
        capitalizacion = "Semestral";
    } else {
        capitalizacion ="Anual";
    }
    
    console.log("Capitalizacion: "+capitalizacion);
    return capitalizacion;
}