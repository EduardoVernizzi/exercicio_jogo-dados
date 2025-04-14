
function jogar(){


let a = Math.floor(Math.random() * 6) + 1

let b = Math.floor(Math.random() * 6) + 1


document.querySelector('#img1').src = `./img/dice${a}.png`
document.querySelector('#img2').src = `./img/dice${b}.png`


if(a>b){
  document.querySelector('#vencedor').innerHTML = `JOGADOR 1 VENCEU!! 🏆 `;
} 

if(b>a){
  document.querySelector('#vencedor').innerHTML = `JOGADOR 2 VENCEU!! 🏆`;
}

else if (a===b){
  document.querySelector('#vencedor').innerHTML = `EMPATOU!!`
}
}


