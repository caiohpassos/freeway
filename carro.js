//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 100, 155, 215, 270, 322];
let velocidadeCarros = [2, 3, 2.5, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 30;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}