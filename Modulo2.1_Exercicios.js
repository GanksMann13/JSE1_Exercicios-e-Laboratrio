/*Exercício 1) Vamos brincar de florista. Declare seis variáveis,
lembrando-se de nomeá-las de acordo com seu propósito:

o preço de uma única rosa (8) e o número de rosas que você tem (70)
o preço de um único lírio (10) e o número de lírios que você tem (50)
o preço de uma única tulipa (2) e o número de tulipas que você tem (120)

Agora declare três variáveis, uma para as rosas, lírios e tulipas que você tem,
nas quais você coloca seu preço total. Insira os valores correspondentes nas variáveis
usando as variáveis declaradas na etapa anterior. Por fim, declare uma variável na qual
você armazena o preço de todas as suas flores (novamente, use as variáveis anteriores
para inicialização). Exiba todas as informações de inventário no console da seguinte
forma:

Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total:  1300*/


let roseQuantity = 70, rosePrice = 8, roseTotalValue;
let lilyQuantity = 50, lilyPrice = 10, lilyTotalValue;
let tulipQuantity = 120, tulipPrice = 2, tulipTotalValue;

roseTotalValue = roseQuantity * rosePrice;
lilyTotalValue = lilyQuantity * lilyPrice;
tulipTotalValue = tulipQuantity * tulipPrice;

let flowersTotalValue = roseTotalValue + lilyTotalValue + tulipTotalValue;

console.log(`Rose - unit price: ${rosePrice}, quantity: ${roseQuantity},
value: ${roseTotalValue}`);
console.log(`Lily - unit price: ${lilyPrice}, quantity: ${lilyQuantity},
value: ${lilyTotalValue}`);
console.log(`tulip - unit price: ${tulipPrice}, quantity: ${tulipQuantity},
value: ${tulipTotalValue}`);
console.log(`Total: ${flowersTotalValue}`);




/*Exercício 2)Modifique o código do exercício anterior. Suponha que os preços das flores
sejam constantes (eles não mudarão). Declare e inicialize as variáveis restantes da 
mesma forma que no exercício anterior. Exiba todas as informações coletadas no console.
Agora diminua o número de rosas em 20 e lírios em 30. Exiba todas as informações 
coletadas no console novamente.*/

const rosePrice2 = 8, lilyPrice2 = 10, tulipPrice2 = 2;

let roseQuantity2 = 70, lilyQuantity2 = 50, tulipQuantity2 = 120;
let roseTotalValue2, lilyTotalValue2, tulipTotalValue2;

roseTotalValue2 = roseQuantity2 * rosePrice2;
lilyTotalValue2 = lilyQuantity2 * lilyPrice2;
tulipTotalValue2 = tulipQuantity2 * tulipPrice2;

let flowersTotalValue2 = roseTotalValue2 + lilyTotalValue2 + tulipTotalValue2;

console.log(`Rose - unit price: ${rosePrice2}, quantity: ${roseQuantity2},
value: ${roseTotalValue2}`);
console.log(`Lily - unit price: ${lilyPrice2}, quantity: ${lilyQuantity2},
value: ${lilyTotalValue2}`);
console.log(`tulip - unit price: ${tulipPrice2}, quantity: ${tulipQuantity2},
value: ${tulipTotalValue2}`);
console.log(`Total: ${flowersTotalValue2}`);

roseQuantity2 -= 20;
lilyQuantity2 -= 30;

roseTotalValue2 = roseQuantity2 * rosePrice2;
lilyTotalValue2 = lilyQuantity2 * lilyPrice2;
tulipTotalValue2 = tulipQuantity2 * tulipPrice2;

flowersTotalValue2 = roseTotalValue2 + lilyTotalValue2 + tulipTotalValue2;

console.log(`Rose - unit price: ${rosePrice2}, quantity: ${roseQuantity2},
value: ${roseTotalValue2}`);
console.log(`Lily - unit price: ${lilyPrice2}, quantity: ${lilyQuantity2},
value: ${lilyTotalValue2}`);
console.log(`tulip - unit price: ${tulipPrice2}, quantity: ${tulipQuantity2},
value: ${tulipTotalValue2}`);
console.log(`Total: ${flowersTotalValue2}`);