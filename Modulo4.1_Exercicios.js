/*Exercício 1)Escreva um script que peça ao usuário para inserir um número. Exiba a
mensagem "Bingo!" quando o número for maior que 90 mas menor que 110, caso contrário
exibir a mensagem: "Miss". Use a instrução if.*/

let number = Number(prompt("Digite um número:"));

if(number > 90 && number < 110) console.log("Bingo!");
else console.log("Errou!");

/*Exercício 2)Reescreva o código do exercício anterior, substituindo if por um
operador condicional ternário.*/

let resultado = number > 90 && number < 110 ? console.log("Bingo!") : console.log("Errou!");

/*Exercício 3)Escreva um aplicativo de calculadora simples. Peça ao usuário a seguinte
entrada, um por um: dois números e um caractere representando uma operação matemática,
um de "+", "-", "*", "/". Se a entrada do usuário for válida, calcule o resultado e
mostre-o ao usuário. Se a entrada do usuário for inválida, exiba uma mensagem
informando ao usuário que ocorreu um erro. Lembre-se que o valor retornado pela função
prompt é do tipo string. Você pode usar o método Number.isNaN para verificar se
obtém o número correto após a conversão. Por exemplo, chamar Number.isNaN(10)
retornará false, enquanto Number.isNaN(NaN) retornará true.*/

let a = Number(prompt("Digite um número:")), b = Number(prompt("Digite outro número:"));
let ope = prompt("Digite o operador do cálculo ('+', '-', '*', '/')");

if(!Number.isNaN(a) && !Number.isNaN(b))
{
    switch(ope)
    {
        case "+": alert(a + b); break;
        case "-": alert(a - b); break;
        case "*": alert(a * b); break;
        case "/": alert(a / b); break;
        default: alert("Operador Inválido");
    }
}
else alert("A ou B não é um número");