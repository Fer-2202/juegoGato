const tablero = document.getElementsByClassName ("tablero");
const contenedor = document.getElementsByClassName ("contenedor");
const btnReiniciar = document.getElementById ("btnReiniciar");
let mensaje = document.getElementById ("mensaje");

let contenedores = []

const ganar = [
   [0,1,2],[3,4,5],[6,7,8],
   [0,3,6],[1,4,7],[2,5,8],
   [0,4,8],[2,4,6]
   ];

   
let jugador = true;

for (let index = 0; index < contenedor.length; index++) {
   contenedores.push(contenedor[index])
   
    contenedor[index].addEventListener("click",function () {
     if (jugador == true) {
         if (contenedor[index].textContent == "") {
            
            contenedor[index].textContent = "X"
            jugador = false
         
            contenedores = contenedores.filter(cont => cont !== contenedor[index])

            let valorale = contenedores[Math.floor(Math.random () * contenedores.length)];
         
            contenedores = contenedores.filter(cont => cont !== valorale)

            valorale.textContent = "O"
            jugador = true 

           
         }
         
      }
    })
    };


