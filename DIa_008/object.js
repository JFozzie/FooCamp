const persona = {
    nombre: 'Jordy Miguel Vasquez' ,
    edad: 45 ,
    profesión: 'Mecatrónica',
    colorfavorito: 'azul',
    altura: 180,
    hobbies : ['los videojuegos', 'investigar nuevas tecnologias', 'aprender de todo un poco', 'reparar ojetos dañados']
}
function presenta(){
    return `Hola mi nombre es ${persona.nombre},tengo ${persona.edad} años, mido ${persona.altura}cm, estudié ${persona.profesión}, mi color favorito es el ${persona.colorfavorito} y mis hobbies son ${persona.hobbies[0]}, ${persona.hobbies[1]}, ${persona.hobbies[2]} y ${persona.hobbies[3]}`
}

console.log(presenta());