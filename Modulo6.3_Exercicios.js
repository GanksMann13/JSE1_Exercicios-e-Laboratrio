/*Exercício 1)Execute o seguinte código:

let end = 2;
for(let i = 1; i < end; i++){
console.log(i);
}

Ele deve exibir os números 1 e 2 no console. Use o debugger para fazer com que o programa
produza os números 1, 2, 3, 4 e 5. Não modifique o código do programa. Use apenas pontos
de interrupção e a opção de modificar variáveis.*/

debugger;

let end = 2;

for(let i = 1; i < end; i++)
{
    console.log(i);
}

/*Exercício 2)Use o debugger para entender por que o resultado final registrado é igual
a zero quando em cada iteração do for, um valor de loop da variável result aumenta.
Use Watch para rastrear as mudanças nas variáveis selecionadas.*/

let counter = 0; 
let maxValue = 10; 
let result = 1; 
 
debugger; 
for (counter = 0; counter < maxValue; counter++)
{ 
    console.log(result); 
    result *= maxValue - counter - 1; //O valor dá 0 porque o multiplicador resulta em 0
} 
 
console.log("Final result: ", result);

/*Exercício 3)Execute o seguinte código:

função max(matriz) {
     deixe valorMax = array[1];
     for(let i=1; i<array.length; i++) {
         if(array[i] > maxValue) {
             maxValue = array[i];
         }
     }
     return valorMax;
}
 
console.log( max([1, 4, 6, 2])); // -> 6
console.log( max([10, 4, 6, 2])); // -> 6

A função max deve retornar o maior número do array dado como argumento. Como você
pode ver, no segundo caso funciona incorretamente: em vez do valor 10 obtemos 6.
Usando o debugger, rastreie a execução da função max passo a passo. Observe os
valores das variáveis i e maxValue. Localize o problema e corrija o código para
que funcione corretamente.*/

function max(array)
{
    let maxValue = array[1];
     
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] > maxValue)
        {
            maxValue = array[i];
        }
    }
    return maxValue;
}
 
console.log(max([1, 4, 6, 2]));
console.log(max([10, 4, 6, 2]));