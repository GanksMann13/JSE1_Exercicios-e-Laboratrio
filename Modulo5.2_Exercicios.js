/*Exercício 1)Os Arrays em JavaScript têm um método "sort" que, como você pode imaginar,
permite ordenar seus elementos. Este método recebe como argumento uma função que irá
comparar dois elementos do array. A função deve retornar zero se considerarmos os
argumentos iguais, um valor menor que zero se considerarmos o primeiro menor que o
segundo e um valor maior que zero caso contrário. Dê uma olhada no exemplo:

let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if(a > b) {
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

A)Tente modificar o trecho de código acima para torná-lo o mais curto possível.*/

let numbers = [50, 10, 40, 30, 20];
let ordenar = numbers.sort((a, b) => a - b);
console.log(ordenar);

/*B)Em seguida, modifique a função para que os elementos sejam classificados em
ordem decrescente, não em ordem crescente como no exemplo.*/

ordenar = numbers.sort((a, b) => b - a);
console.log(ordenar);

/*Exercício 2)Escreva três funções com os nomes add, sub e mult, que terão dois
argumentos numéricos. As funções são para verificar se os argumentos fornecidos são
inteiros (use Number.isInteger). Caso contrário, eles retornam NaN, caso contrário,
retornam o resultado da adição, subtração ou multiplicação, respectivamente. As
funções devem ser declaradas usando uma instrução de função.

Exemplo de uso e resultados esperados:

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN*/

function add(a, b)
{
    if(Number.isInteger(a) && Number.isInteger(b))
        return a + b;
    else return NaN;
}

function sub(a, b)
{
    if(Number.isInteger(a) && Number.isInteger(b))
        return a - b;
    else return NaN;
}

function mult(a, b)
{
    if(Number.isInteger(a) && Number.isInteger(b))
        return a * b;
    else return NaN;
}

console.log(add(12,10));
console.log(sub(7,2));
console.log(mult(12.5,10));

/*Exercício 3)Reescreva as funções do exercício anterior usando uma expressão de
função de seta, tentando escrevê-las na forma mais curta possível.

Exemplo de uso e resultados esperados:

console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN*/

let add2 = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
let sub2 = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
let mult2 = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;

console.log(add2(4,5.8));
console.log(sub2(90,78));
console.log(mult2(12,17));

/*Exercício 4)Escreva uma função de ação que tome a função callback
como seu primeiro argumento e os outros dois argumentos como números. Como uma
função de retorno de chamada, você poderá passar uma das três funções da tarefa
anterior. A função de ação chamará a função de retorno de chamada passada a ela
e retornará o resultado obtido. A função de retorno de chamada aceitará o segundo
e o terceiro argumentos da chamada de ação.

Exemplo de uso e resultados esperados:

console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN*/

function ope(operacao, a, b)
{
    return operacao(a, b);
}

console.log(ope(add, 4, 5));
console.log(ope(sub, 121, 118));
console.log(ope(mult, 21, 19));

/*Exercício 5)Escreva um programa que imprima (no console) inteiros consecutivos
10 vezes, em intervalos de dois segundos (comece com o número 1). Use as funções
setInterval, clearInterval e setTimeout.*/

let a = 1
let showMeNumbers = () => {let timerId = setInterval( () => { return console.log(a++);}, 2000); setTimeout( () => clearInterval(timerId), 20000)};

showMeNumbers();

/*Exercício 6)Escreva uma função que calcule o n-ésimo elemento da sequência de
Fibonacci. Esta sequência é definida por uma fórmula (que está na internet). Assim,
cada elemento da sequência (exceto os dois primeiros) é a soma dos dois anteriores.
Por exemplo: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 e F6 = F5 + F4 = 8. A função
deve usar recursão. Na definição, use uma expressão de função (armazene uma função
anônima em uma variável).*/

let fib = function(n)
{
    let respFinal = 0;
    if(n != 0 || n === 1)
    {
        respFinal = 1;
    }
    else respFinal = fib(n - 1) + fib(n - 2);
    
    return respFinal;
}

console.log(fib(4));

/*Exercício 7)Reescreva a função do exercício 6 usando uma arrow function, mas tente
encurtar seu código o máximo possível (use operadores condicionais e tente não usar
variáveis adicionais além do parâmetro n).*/

let fibb = a => a <= 0 ? 0 : ( a == 1 ? 1 : fibb(a - 1) + fibb(a - 2));

console.log(fibb(8));

/*Exercício 8)Escreva uma versão iterativa da função do exercício 6(use o loop).
Declare a função usando uma instrução de função.*/

function fibbb(n)
{
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++)
    {
        let c = a;
        a = b;
        b += c;
    }
    return b;
}

console.log(fibbb(12));
