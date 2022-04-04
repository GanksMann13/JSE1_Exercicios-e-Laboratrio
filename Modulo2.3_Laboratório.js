/*Você se lembra da lista de contatos que criou enquanto fazia a tarefa do laboratório
anterior? Você tem que admitir que, à primeira vista, parecia bastante estranho.
Tivemos que usar nove variáveis para armazenar informações sobre apenas três usuários.
O que é pior, adicionar cada novo usuário exigiria a criação de mais três variáveis.
Isso não é conveniente nem prático. Felizmente, desde então aprendemos algo sobre
arrays e objetos, o que nos permitirá salvar nossa lista de uma maneira um pouco mais
conveniente. Usando os mesmos dados do laboratório anterior, crie a lista de contatos
como um array, cada elemento do qual será um objeto descrevendo um único usuário.
Portanto, devemos obter um array de três elementos, e cada objeto colocado nele conterá
três informações (nome, telefone e email).

No final da lista declarada desta forma, adicione um novo contato usando o método de
array apropriado.

O novo contato é: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

Exiba o primeiro e o último contato, novamente no formato: nome/telefone/e-mail.
Use a propriedade length do array para determinar o índice do último elemento.
Lembre-se de que os elementos do array são indexados a partir de 0.*/


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
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca."
    });

let last = contacts.length - 1;
    
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);