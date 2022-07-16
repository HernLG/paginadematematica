function borrar(){
    document.getElementById("formulario").reset();
}

function calcular() {
    // entrada
    let a=parseInt(document.getElementById("primero").value);
    let b=parseInt(document.getElementById("segundo").value);
    let c=parseInt(document.getElementById("tercero").value);

    // validar a, b y c
    if (a == 0) {
        salida = "<em>a</em> no puede ser igual a cero!";
    } else if (isNaN(a)) {
        salida = "<em>a</em> tiene que ser un numero!";
    } else if (isNaN(b)) {
        salida = "<em>b</em> tiene que ser un numero!";
    } else if (isNaN(c)) {
        salida = "<em>c</em> tiene que ser un numero!!";
    } else {
        // calcular el resultado usando x = (-b +- sqrt(b^2 - 4ac)) / 2a
    var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    salida = "Para la ecuación <strong>" + (a == 1 ? "" : a) + "x\u00B2 + " + (b == 1 ? "" : b) + "x + " + c + " = 0";
    }
    // mostrar resultado (ó errores)
    document.getElementById("resultado").innerHTML = salida;
    document.getElementById("xuno").innerHTML = (x1).toFixed(2);
    document.getElementById("xdos").innerHTML = (x2).toFixed(2);
}
//=========================================================================================



