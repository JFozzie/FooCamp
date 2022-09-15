
function adivinaNumero() {
    let numero = Math.floor(Math.random() * 100) +1;
    let valor = 0;

    while (valor !== numero) {
        valor = prompt("Adivina el numero");
        if (valor < numero) {
            alert("El valor es mayor");
        } else if (valor > numero) {
            alert("El valor es menor");
        } else if(valor == numero){
            alert( valor + " es el numero");
            break
        }
        

    }

}


