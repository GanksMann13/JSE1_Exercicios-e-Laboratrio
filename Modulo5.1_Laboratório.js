/*Cenário)Nosso programa cresceu bastante, tornando-o um pouco difícil de ler. É
especialmente visível na instrução switch, onde a maior parte da lógica está incluída.
Tente organizar o código do programa usando funções. Defina e chame três funções
nos locais apropriados:

showContact: a função deve receber dois argumentos; o primeiro é a lista de contatos e
o segundo é o número de índice do contato a ser exibido; dentro da função, verifique
se os argumentos corretos foram passados, ou seja, se os contatos são um array
(use a construção instanceofArray para isso);

showAllContacts: a função deve receber um argumento, a lista de contatos; dentro da
função, verifique se o argumento fornecido é um array;

addNewContact: a função deve receber quatro argumentos, uma lista de contatos e os
dados do novo contato, ou seja: nome, telefone e número; antes de adicionar um
novo contato, verifique se o argumento passado é um array e se os dados do novo
contato possuem algum valor.*/

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

let escolha;

let mostrarContato = function(lista, i)
{
    if(lista instanceof Array)
        if(lista.length > i)
        {  
            let texto = "", valores = lista[i];
            
            for(let key in lista[i])
                texto += `${key}: ${lista[i][key]}\n`;
            
            return texto;
        }
        else return "Esse contato não existe";
}

let mostrarTodosContatos = function(lista)
{
    if(lista instanceof Array)
    {
        let texto = "";
        
        for(let l of lista)
        {
            for(let key in l)
                texto += `${key}: ${l[key]}\n`;
            
            texto += "---------------------------\n";
        }        
        return texto;
    }
}

let addNovoContato = function(lista, nome, telefone, email)
{
    if(lista instanceof Array)
        if(nome != "" && telefone != "" && email != "")
        {
            lista.push({name:nome, phone:telefone, email:email});
        }
}

alert("Bem-vindo(a) à sua lista de contatos!");

do
{
    escolha = prompt(`Qual das ações você quer fazer agora?
    1)Mostrar primeiro contato
    2)Mostrar último contato
    3)Mostrar todos os contatos
    4)Adicionar novo contato
    5)Sair do programa`);

    if(!Number.isNaN(escolha))
    {
        switch(escolha)
        {
            case "1":
                alert(mostrarContato(contacts, 0));
                break;
            
            case "2":
                alert(mostrarContato(contacts, contacts.length - 1));
                break;
            
            case "3":
                alert(mostrarTodosContatos(contacts));
                break;
                
            case "4":
                addNovoContato(contacts, prompt("Novo nome:"), prompt("Novo telefone:"), prompt("Novo email:"));
                break;
            
            case "5":
                escolha = 5;
                break;
                
            default:
                alert("Opção Inválida.");
        }
    }
}
while(escolha !== 5)

alert("Obrigado por usar a lista. Volte sempre!!");