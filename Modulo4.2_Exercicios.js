/*Exercício 1:Escreva um pedaço de código que escreverá números de 100 a 0 no console,
mas em passos de 10; então 100, 90, 80... etc.*/

for(let i = 100; i >= 0; i -= 10)
{
    console.log(i);
}

/*Exercício 2) Modifique o programa anterior para que ele peça ao usuário o primeiro e
o último número que ele usa em vez de 100 e 0 (dica: use a caixa de diálogo prompt).
Verifique se os valores inseridos estão corretos (se o valor inicial é maior que o
valor final).*/

let inicial = Number(prompt("Digite seu valor inicial:")), final = Number(prompt("Digite o valor final:"));

if(inicial > final)
{
    for(let i = inicial; i >= final; i -= 10)
    {
        console.log(i);    
    }
}

/*Exercício 3)Existem dez números diferentes nesta matriz de números.

numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

Escreva um programa que primeiro escreva todos esses números no console, depois
apenas aqueles que são pares (dica: o resto da divisão de um número par por 2 é igual
a 0), depois apenas aqueles que são maiores que 10 e ao mesmo tempo menor que 60.*/

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

console.log("Todos os elementos do array");
for(n of numbers)
{
    console.log(n);
}
console.log("Todos os elementos pares");
for(n of numbers)
{
    if(n % 2 == 0)console.log(n);
}
console.log("Todos os elementos entre 10 e 60");
for(n of numbers)
{
    if(n > 10 && n < 60)console.log(n);
}

/*Exercício 4)Escreva um programa usando um loop que peça ao usuário o nome do filme
(primeiro prompt) e sua classificação em www.imdb.com (segundo prompt).
O programa permitirá que você insira quantos filmes quiser na matriz de filmes.
Cada elemento do array será um objeto, composto por dois campos: title e imdb.
A entrada é concluída se o usuário pressionar Cancelar na caixa de diálogo de prompt.
Em seguida, o programa deve imprimir primeiro no console todos os filmes que tenham
classificação inferior a 7, depois aqueles cuja classificação seja maior ou igual a 7.
Escreva o nome do filme e sua classificação um ao lado do outro, no formato
[Nome do Filme](Classificação)*/

let filmes = [], continuar = false;

do
{
    let n = prompt("Digite o nome do filme:"), c = prompt("Digite a classificação do filme:");
    filmes.push({nome:n, classificacao:c});
    continuar = confirm("Gostaria de colocar mais um filme?");
}
while(continuar);

console.log("Filmes com classificação abaixo de 7");
for(f of filmes)
    if(f.classificacao < 7) console.log(`${f.nome} (${f.classificacao})`);

console.log("Filmes com classificação acima ou igual a 7");
for(f of filmes)
    if(f.classificacao >= 7) console.log(`${f.nome} (${f.classificacao})`);
    
/*Exercício 5)O conteúdo do objeto que descreve a posição do navio chamado "Mareno"
é escrito no console.

LATITUDE -> 40.07288
LONGITUDE -> 154,48535
CURSO -> 285,6
VELOCIDADE -> 14,0
OMI -> 9175717
NOME -> MARENO

O código apresentado a seguir é usado para isso. Complete o programa abaixo
declarando o objeto ausente no lugar dos três pontos.

let vessel = ... 
 
for(let key in vessel) { 
    console.log('${key} -> ${vessel[key]}'); 
}*/


let vessel = {
LATITUDE:"40.07288",
LONGITUDE:"154.48535",
CURSO:"285.6",
VELOCIDADE:"14.0",
OMI:"9175717",
NOME:"MARENO"};

for(let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}

/*Exercício 6)Modifique o programa da calculadora que você criou no Módulo 4,
Seção 2, de forma que funcione em loop até que o usuário insira Q em qualquer
uma das caixas de prompt.*/

while (true) {
    let a = prompt("Digite o primeiro número:");
    let b = prompt("Digite o segundo número:");
    let operando = prompt("Operando do cálculo (+, -, * or /)");
    let resultado;

    if (a === "Q" || b === "Q" || operando === "Q") {break;}

    a = Number(a);
    b = Number(b);

    if (!Number.isNaN(a) && !Number.isNaN(b))
    {
        switch (operando)
        {
            case "+":
                resultado = a + b;
                break;

            case "-":
                resultado = a - b;
                break;
                
            case "*":
                resultado = a * b;
                break;
                
            case "/":
                resultado = a / b;
                break;
                
            default:
                resultado = "Operando inválido";
        }
    }
    else
    {
        resultado = "Um ou mais valores não é um número";
    }
    alert(resultado);
}