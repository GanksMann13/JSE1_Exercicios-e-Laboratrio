/*Exercício 1)Vamos voltar à nossa lista de contatos. Após alguns ajustes recentes
(ou seja, usando uma matriz e objetos), está realmente começando a parecer uma lista.
No entanto, um problema bastante sério permaneceu. A alteração de dados na lista,
como adicionar um novo contato, deve ser fornecida imediatamente no código do programa.
E se quisermos dar ao usuário a capacidade de inserir os dados do contato adicionado
enquanto o programa estiver em execução? Modifique o programa para adicionar, no final
da lista, não o contato, que é fornecido no código, mas aquele que o usuário fornecerá
durante a execução do programa. Use o método prompt para fazer isso. Ao final, exiba o
primeiro e o último contato da lista.*/

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

contacts.push({
    name: prompt("Nome do novo contato:"),
    phone: prompt("Telefone do novo contato:"),
    email: prompt("E-mail do novo contato:")
    });

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);