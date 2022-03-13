function Chutar() {
  var numeroSecreto = Math.floor(Math.random() * 10);
  var chute = parseInt(document.getElementById("valor").value);
  var resultadoChute = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    resultadoChute.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    resultadoChute.innerHTML = "Digite um número de 0 a 10";
  } else {
    resultadoChute.innerHTML =
      "Você errou, o número secreto era " + numeroSecreto;
  }
}