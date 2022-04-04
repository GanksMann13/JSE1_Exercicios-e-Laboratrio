/*Exercício 1)Crie um objeto que descreva uma passagem de trem e armazene-o na variável
ticket. O objeto deve ter três campos:

-estação inicial (dê o nome da chave de from, dê o nome da estação mais próxima em sua
área como valor);
-estação final (dê o nome da chave de to, dê qualquer outra estação dentro de 100 km
como valor);
-preço do bilhete (dê o nome da chave de price, indique o valor que gostaria de pagar
por este bilhete).

O objeto deve ser criado usando chaves, em que todos os campos criados serão listados
imediatamente. Em seguida, exiba os valores de todos os campos do ticket no console.*/

let trainTicket =
{
    from: "Recreio Shopping",
    to: "Salvador Allende",
    price: 10
}

console.log(`Local de embarque: ${trainTicket.from}`);
console.log(`Local de desembarque: ${trainTicket.to}`);
console.log(`Preço da passagem: ${trainTicket.price}`);

/*Exercício 2)Declare um objeto vazio e salve-o em uma variável "person". Usando a
notação de ponto, adicione os campos de nome e sobrenome ao objeto inserindo seus
dados como valores. Tente exibir os campos individuais no console.*/

let person = {};

person.nome = "Vítor";
person.sobrenome = "Ganko";

console.log(`Nome: ${person.nome}`);
console.log(`Sobrenome: ${person.sobrenome}`);

/*Exercício 3)Estamos montando nossa pequena biblioteca de livros sobre programação
JavaScript. Temos três livros e queremos preparar uma lista deles. Armazenaremos
três informações sobre cada livro: título, autor e número de páginas:

-Falando JavaScript, Axel Rauschmayer, 460;
-Programando aplicativos JavaScript, Eric Elliott, 254;
-Entendendo o ECMAScript 6, Nicholas C. Zakas, 352.

Crie uma matriz de três objetos representando os livros. Cada objeto deve ter as
seguintes propriedades: título, autor, páginas.*/

let biblioteca = [
    {
        titulo: "Falando JavaScript",
        autor: "Axel Rauschmayer",
        numeroPaginas: 460
    },
    {
        titulo: "Programando aplicativos JavaScript",
        autor: "Eric Elliott",
        numeroPaginas: 254
    },
    {
        titulo: "Entendendo o ECMAScript 6",
        autor: "Nicholas C. Zakas",
        numeroPaginas: 352
    }
];

/*Exercício 4)Adicione um novo livro à coleção acima:

-Learning JavaScript Design Patterns, de Addy Osmani, 254 páginas.

Use o método apropriado para fazer isso, que anexará o livro no final da matriz. Exiba
o comprimento da matriz e, por sua vez, todos os nomes de livros na coleção.*/

biblioteca.push(
    {
        titulo: "Aprendendo padrões de design JavaScript",
        autor: "Addy Osmani",
        numeroPaginas: 254
    });
    
console.log(`Título 1: ${biblioteca[0].titulo}`);
console.log(`Título 2: ${biblioteca[1].titulo}`);
console.log(`Título 3: ${biblioteca[2].titulo}`);
console.log(`Título 4: ${biblioteca[3].titulo}`);

/*Exercício 5)Use o comando "slice" para copiar os dois últimos livros array acima.*/

let novaBiblioteca = biblioteca.slice(2);
console.log(`Títulos da Nova Biblioteca: ${novaBiblioteca[0].titulo} e
${novaBiblioteca[1].titulo}`);

/*Exercício 6)O primeiro livro da coleção é perdido em circunstâncias inexplicáveis.
Você já aceitou a perda, então remova-o do array. Qual método você usará para esse fim?
Exiba o comprimento da matriz e todos os nomes dos livros da coleção por sua vez.*/

biblioteca.shift();
console.log(`Número atual de livros da biblioteca: ${biblioteca.length}`);
console.log(`Título 1: ${biblioteca[0].titulo}`);
console.log(`Título 2: ${biblioteca[1].titulo}`);
console.log(`Título 3: ${biblioteca[2].titulo}`);

/*Exercício 7)Exiba a soma das páginas de todos os livros da coleção.*/

console.log(`Total de páginas da biblioteca: ${biblioteca[0].numeroPaginas +
biblioteca[1].numeroPaginas + biblioteca[2].numeroPaginas}`);