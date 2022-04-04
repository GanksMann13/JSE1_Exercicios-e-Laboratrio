/*Durante a última modificação do programa com a lista de contatos, permitimos que o
usuário adicione um novo contato com os dados inseridos pelo usuário durante a
execução do programa. Vamos dar um passo adiante – tente modificar o programa para
que o usuário possa escolher o que quer fazer com a lista. Eles terão a opção de:

1)mostrar o primeiro contato (primeiro)
2)mostrar o último contato (último)
3)adicionar um novo contato (novo)

Ao adicionar um novo contato, verifique se o usuário inseriu todos os dados necessários.
Se pelo menos um dos três valores estiver ausente (nome, telefone ou email), não
adicione o contato.*/

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

alert("Bem-vindo(a) à sua lista de contatos!");

let escolha = prompt(`Qual das ações você quer fazer?
1)Mostrar primeiro contato
2)Mostrar último contato
3)Adicionar novo contato`);

if(!Number.isNaN(escolha))
{
    switch(escolha)
    {
        case "1":
            alert(`Nome: ${contacts[0].name}\nTelefone: ${contacts[0].phone}\nE-mail: ${contacts[0].email}`);
            break;

        case "2":
            let u = contacts.length - 1;
            alert(`Nome: ${contacts[u].name}\nTelefone: ${contacts[u].phone}\nE-mail: ${contacts[u].email}`);
            break;
        
        case "3":            
            let n = prompt("Nome do novo contato:");
            let t = prompt("Telefone do novo contato:");
            let e = prompt("E-mail do novo contato:");
        
            if(n != "" && t != "" && e != "")
            {
                contacts.push({name:n, phone:t, email:e});
                
                let u = contacts.length - 1;
                alert(`Dados do Novo Contato:\n\nNome: ${contacts[u].name}\nTelefone: ${contacts[u].phone}\nE-mail: ${contacts[u].email}`);
            }
            else alert("Nome, Telefone ou email faltando. Tente novamente.");
            break;
        
        default:
            alert("Função Inválida!");
    }
}