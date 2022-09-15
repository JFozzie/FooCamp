let fijas = 0;
let picas = 0;
let myNum = "";
let myArray = [];
let num = randomNum();

function randomNum() { 
    myArray = [];
while (myArray.length < 4) {
        let rNum = Math.floor(Math.random() * 10);
        let existe = false;
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] == rNum) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            myArray[myArray.length] = rNum;
        }
    }
    return (myArray.join(""))
}

console.log("random = " + num);

while (fijas != 4) {
    while (myNum.length != 4) {
        myNum = prompt("Ingresa numero de 4 digitos");
        if (myNum.length == 4) {
            break;
        } else {
            alert("Debes ingresar un mumero de 4 digitos! Intenta de nmuevo...");
        }
    }

    fijas = 0;
    picas = 0;

    console.log("Numero = " + myNum);

    for (let i = 0; i < num.length; i++) {
        if (num[i] == myNum[i]) {
            fijas++;
        } else {
            for (let a = 0; a < num.length; a++) {
                if (num[i] == myNum[a] && i !== a) {
                    picas++;
                }

            }
        }
    }

    console.log("Fijas = " + fijas);
    console.log("Picas = " + picas);
    if (fijas != 4) {
        alert("Ingresaste el " + myNum + ", tienes " + picas + " picas y " + fijas + " fijas. Vuelve a intentar.");
    } else {
        break;
    }

    myNum = "";

}

alert("Felicidades, adivinaste el número");

