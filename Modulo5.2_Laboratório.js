/*Cenário)Usaremos as funções para adicionar mais um item de funcionalidade. Os arrays
têm um método de classificação que nos permite classificar seus elementos. Para este
método, passamos uma função que deve comparar dois elementos do array e decidir qual
deles é menor e qual é maior. Se o primeiro elemento for menor, a função retornará um
valor menor que zero, se forem iguais retornará zero, e se o primeiro for maior,
retornará um valor maior que zero. Por exemplo, a matriz:

let numbers = [10, 50, 40, 20];

podem ser classificados em ordem crescente com uma chamada:

números.sort(function (a, b) {
     let retVal = 0;
     if (a > b) {
         retVal = 1;
     } else {
         retVal = -1;
     }
     return retVal;
});

ou mais simplesmente:

números.sort((a, b) => a - b);

Dê ao usuário a opção de selecionar uma ação de classificação na lista. Quando
esta opção é selecionada, o usuário deve poder especificar se deseja classificar os
contatos por nome, telefone ou e-mail.*/



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

let ordenarContatos = function(opcao)
{
    let mensagem;    
    contacts.sort((a,b) => {
    
    let na, nb;
    
    if(opcao == "1")
    {
        na = a.name.toLowerCase(), nb = b.name.toLowerCase();
        mensagem = "A lista foi ordenada pelo nome com sucesso.";
    }
    else if(opcao == "2")
    {
        na = a.phone.toLowerCase(), nb = b.phone.toLowerCase();               
        mensagem = "A lista foi ordenada pelo telefone com sucesso.";
    }
    else if(opcao == "3")
    {
        na = a.email.toLowerCase(), nb = b.email.toLowerCase();                
        mensagem = "A lista foi ordenada pelo email com sucesso.";
    }
    
    if(na < nb) return -1;
    else if(na > nb) return 1;
    return 0;
    });

    alert(mensagem);
}


alert("Bem-vindo(a) à sua lista de contatos!");

do
{
    escolha = prompt(`Qual das ações você quer fazer agora?
    1)Mostrar primeiro contato
    2)Mostrar último contato
    3)Mostrar todos os contatos
    4)Adicionar novo contato
    5)Ordenar contatos
    6)Sair do programa`);

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
                let opcao = prompt(`Deseja ordenar sua lista por qual modo:\n1)Nome\n2)Telefone\n3)Email`);
                ordenarContatos(opcao);
                break;
                
            case "6":
                escolha = 6;
                break;
                
            default:
                alert("Opção Inválida.");
        }
    }
}
while(escolha !== 6)

alert("Obrigado por usar a lista. Volte sempre!!");