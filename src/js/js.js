const tablero = document.getElementsByClassName ("tablero")
const contenedor = document.getElementsByClassName ("contenedor")
const btn = document.getElementsByClassName ("botonReiniciar")


const ganar = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[]]




let jugador = true;

for (let index = 0; index < contenedor.length; index++) {
    contenedor[index].addEventListener("click",function () {
     if (jugador == true) {
        contenedor[index].innerHTML = "X"
        jugador = false
     } else {
        contenedor[index].innerHTML = "O"
        jugador = true
        
     }
        
    }) 
    }

    