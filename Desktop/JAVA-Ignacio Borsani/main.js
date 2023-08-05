let valorProducto;
let cuotas;
let recargo;
let ValorFinal = false;

function validar(valor){
    if(!isNaN(valor) && valor > 0){
        return true;
    }else{
        alert("No es un numero mayor a 0");
        return false;
    }
}


while(true && true){

    valorProducto = prompt("Ingrese el valor del producto");

    valorProducto = parseFloat(valorProducto);

    if(validar(valorProducto)){
        break;
    }
}

while(true && true){

    cuotas = prompt("Ingrese las cuotas");

    cuotas = Math. round(cuotas);

    if(validar(cuotas)){
        break;
    }
}

while(true && true){

    recargo = prompt("Ingrese el valor del Recargo");

    recargo = parseFloat(recargo);

    if(validar(recargo)){
        break;
    }
}

if(ValorFinal){
    alert("Refrescar la pagina en caso de querer hacer otra operacion");
}else{
    let valorProductoConRecargo = ((valorProducto*recargo)/100) + valorProducto;
    let valorDeCuota = valorProductoConRecargo/cuotas;
    
    alert(`Usted debe abonar ${cuotas} cuotas fijas de $${valorDeCuota.toFixed(2)} , valor total a pagar $${valorProductoConRecargo.toFixed(2)}`);
    alert("Presione F5 para repetir operacion");
}