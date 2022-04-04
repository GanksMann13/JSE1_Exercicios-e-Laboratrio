/*Exercício 1)Usando tudo que você aprendeu até este ponto, escreva um script que pergunte
ao usuário sobre a largura, altura e comprimento de uma caixa, então calcule e devolva
ao usuário o volume desta caixa.

Como exemplo, uma caixa com largura = 20, altura = 10 e comprimento = 50 terá um
volume de 10.000 (omitindo unidades, pois não são relevantes neste cenário). Por
enquanto, suponha que os valores fornecidos pelo usuário sejam números válidos, mas
se você tiver alguma ideia de como, pode tentar fazer esse script de forma que seja
resistente a valores inválidos.*/

let boxVolume = prompt("Altura da Caixa:") * prompt("Largura da Caixa:") *
prompt("Profundidade da Caixa:");

console.log(boxVolume);