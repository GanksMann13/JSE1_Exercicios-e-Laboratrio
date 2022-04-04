/*Exercício 1)Escreva um pedaço de código que irá criar variáveis e inicializá-las com
valores de tipos Boolean, Number, BigInt, String e indefinidos usando
(sempre que possível) literais e funções construtoras.*/

let bool = true, num = 10, bigI = BigInt(num), str = "Vitor", und = undefined;

/*Exercício 2)Imprima os valores e seus tipos do exercício anterior usando console.log.
Tente usar a interpolação de string para exibir o valor e digitar ao mesmo tempo com
uma única chamada console.log, por exemplo, no seguinte formato: 1000 [número].*/

console.log(`${bool} [${typeof bool}]`);
console.log(`${num} [${typeof num}]`);
console.log(`${bigI} [${typeof bigI}]`);
console.log(`${str} [${typeof str}]`);
console.log(`${und} [${typeof und}]`);

/*Exercício 3)Realize uma cadeia de conversões: crie um Boolean a partir de um BigInt
criado a partir de um Number que foi criado a partir de uma String.
Comece com o valor "1234". É possível?*/

let conversoes = Boolean(BigInt(Number(String("1234"))));

/*Exercício 4)Tente adicionar dois valores do mesmo tipo e verifique o tipo de resultado.
Experimente para todos os tipos primitivos.*/

let b = true + false;
let n = 4 + 5;
let bi = BigInt(11) + BigInt(7);
let s = "abc" + "def";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`);
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`);

/*Exercício 5)Tente adicionar dois valores de tipos diferentes e verifique o
tipo de resultado.*/

console.log(`${b + n} [${typeof b + n}]`);
console.log(`${n + bi} [${typeof n + bi}]`);
console.log(`${bi + s} [${typeof bi + s}]`);
console.log(`${s + u} [${typeof s + u}]`);
console.log(`${u + b} [${typeof u + b}]`);

/*Exercício 6)Tente modificar a linha const str1 = 42 + "1"; para obter o resultado
43 (sem remover as aspas em torno de 1).*/

const str1 = 42 + Number("1");