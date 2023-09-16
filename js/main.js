let cantMax =2;

const pokemones = [
    {id:1, nombre:"Pikachu", tipo:"Electrico", ataque:100, defensa:50, vida:300},
    {id:2, nombre:"Charmander", tipo:"Fuego", ataque:120, defensa:60, vida:290},
    {id:3, nombre:"Squirtle", tipo:"Agua", ataque:90, defensa:60, vida:320},
    {id:4, nombre:"Bulbasaur", tipo:"Planta", ataque:100, defensa:80, vida:300},
 /*   {id:5, nombre:"Cyndaquil", tipo:"Fuego", ataque:140, defensa:60, vida:310},
    {id:6, nombre:"Totodile", tipo:"Agua", ataque:190, defensa:90, vida:350},
    {id:7, nombre:"Chikorita", tipo:"Planta", ataque:120, defensa:180, vida:320},*/

];

const pokebag =[]; //Declaro mi array Pokebag


let salidas="";

for(const pokemon of pokemones){
    salidas += pokemon.id + "-" + pokemon.tipo; + "\n";
}

let tipoSeleccionado;

while(tipoSeleccionado !=0) {
    tipoSeleccionado =parseInt(prompt("Seleccione el tipo de Pokemon: \n\n" + salidas));
    if(tipoSeleccionado == 0){
        break;
    }
    pokebag.push(pokemones[tipoSeleccionado.id-1]);
}

console.log(pokebag);

//Seleccion de Pokemon, hasta 3 puedo elegir, elige por tipo
/* do{
    entrada = parseInt(prompt("Ingresar tipo de Pokemon :\n\n"));

} while (pokebag.length !=cantMax);*/