/*Exercício 1)Escreva sua própria função "div" que receberá dois argumentos de chamada
e retornará o resultado da divisão do primeiro argumento pelo segundo. Em JavaScript,
o resultado da divisão por zero é o valor Infinity (ou -Infinity, se tentarmos dividir
um número negativo). Mude isso. Se você passar 0 como segundo argumento, sua função
deverá lançar uma exceção RangeError com a mensagem apropriada. Prepare uma chamada
de teste da função para divisão válida e divisão por zero.*/

function div(a, b)
{
    if (b == 0) {
        throw new RangeError("A divisão não pode ocorrer com b = 0");
    }
    return a / b;
}
console.log(div(4, 2));
console.log(div(4, 0));

/*Exercício 2)Declaramos um array de números:

let numbers = [10, 40, 0, 20, 50];

Escreva um programa que, em um loop, divida o número 1000 por elementos sucessivos
da matriz de números, exibindo o resultado de cada divisão. Para dividir os números,
use a função da tarefa anterior. Use a construção try ... catch para manipular uma
exceção lançada no caso de divisão por zero. Se tal exceção for capturada, o
programa deve imprimir uma mensagem apropriada (retirada da exceção) e continuar sua
operação (divisão por elementos sucessivos do array).*/

let numbers = [10, 40, 0, 20, 50];

for (let i = 0; i < numbers.length; i++)
{
    let resultado;
    
    try
    {
        resultado = div(1000, numbers[i]);
    }
    catch(e)
    {
        resultado = e.message;
    }
    console.log(resultado);
}