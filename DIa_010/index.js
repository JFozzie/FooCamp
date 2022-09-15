const inputPass = document.querySelector('#pass');
const mensaje = document.querySelector('#mensaje');

inputPass.addEventListener('mouseenter', () => {
    inputPass.type = "text";
});

inputPass.addEventListener('mouseout', () => {
    inputPass.type = "password";
});

inputPass.addEventListener('keypress', (event) => {
    let tempo = event.target.value
    if (event.key === "Enter" && tempo.length > 7) {
        mensaje.innerText = 'Correcto';

    } else if (event.key === "Enter" && tempo.length < 8){
        mensaje.innerText = 'Contraseña debe de ser de al menos 8 caracteres';
        setTimeout(() => {
            mensaje.innerText = "";
        }, 1000);
    }
});
