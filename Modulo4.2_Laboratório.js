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
                alert(`Nome: ${contacts[0].name}\nTelefone: ${contacts[0].phone}\nE-mail: ${contacts[0].email}`);
                break;

            case "2":
                let u = contacts.length - 1;
                alert(`Nome: ${contacts[u].name}\nTelefone: ${contacts[u].phone}\nE-mail: ${contacts[u].email}`);
                break;
        
            case "3":
                let texto = "";
                for(let c of contacts)
                {
                    for(let key in c)
                    {
                        texto += `${key}: ${c[key]}\n`;
                    }
                    texto += "---------------------------------\n";
                }
                alert(texto);
                break;
                
            case "4":            
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
        
            case "5":
                escolha = 5;
                break;
        
            default:
                alert("Função Inválida!");
        }
    }
}
while(escolha !== 5)
alert("Obrigado por usar a lista. Volte sempre!!");