const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^@#$%&*()_+-=[]{}<>?!';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiuscula, minuscula, numero, simbolo) {
  const senhaArray = []; // cria um array vazio para armazenar a senha
  qtd = Number(qtd); // converte a quantidade de caracteres para um número

  const funcs = []; // cria um array vazio para armazenar as funções que geram os caracteres
  if (maiuscula) funcs.push(geraMaiuscula); // se o usuário quer caracteres maiúsculos, adiciona a função geraMaiuscula ao array funcs
  if (minuscula) funcs.push(geraMinuscula); // se o usuário quer caracteres minúsculos, adiciona a função geraMinuscula ao array funcs
  if (numero) funcs.push(geraNumero); // se o usuário quer números, adiciona a função geraNumero ao array funcs
  if (numero) funcs.push(geraNumero); // se o usuário quer números, adiciona a função geraNumero ao array funcs (duas vezes para aumentar a probabilidade de ter números na senha)
  if (numero) funcs.push(geraNumero); // se o usuário quer números, adiciona a função geraNumero ao array funcs (três vezes para aumentar ainda mais a probabilidade de ter números na senha)
  if (simbolo) funcs.push(geraSimbolo); // se o usuário quer símbolos, adiciona a função geraSimbolo ao array funcs

  // Embaralha as funções de geração de caracteres
  const shuffled = funcs // cria um novo array contendo um objeto com cada função e um número aleatório para embaralhar
    .map((a) => ({sort: Math.random(), value: a})) // adiciona o número aleatório a cada objeto
    .sort((a, b) => a.sort - b.sort) // ordena o array com base no número aleatório
    .map((a) => a.value); // remove o número aleatório e deixa somente as funções em um novo array

  // Gera a senha com a ordem de caracteres embaralhada
  for (let i = 0; i < qtd; i++) {
    senhaArray.push(shuffled[i % shuffled.length]()); // adiciona um caractere à senha chamando a função correspondente, de acordo com a ordem embaralhada das funções (o operador % é usado para ciclar pelo array de funções)
  }

  return senhaArray.join(''); // retorna a senha como uma string, concatenando cada caractere do array senhaArray
}

// Exemplo de uso: gera uma senha com 8 caracteres, contendo pelo menos um número e um símbolo
// const senha = geraSenha(12, true, true, true, true);
// console.log(senha)

// Sintaxe:

// array.map(function callback(currentValue, index, array) {
//    return element for new_array
// }, thisArg)

// O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array original.

// callback: Função que produz o novo elemento do array, recebe três argumentos:
// currentValue: O elemento atual do array que está sendo processado.
// index (opcional): O índice do elemento atual do array que está sendo processado.
// array (opcional): O array original que está sendo processado.
// thisArg (opcional): Objeto a ser usado como this quando executar callback.
// O método map() não modifica o array original e retorna um novo array com o mesmo número de elementos do array original, onde cada elemento é o resultado da função de callback aplicada ao elemento correspondente no array original.

// .map((a) => ({sort: Math.random(), value: a}))

// O uso dos parênteses em volta das chaves na sintaxe .map((a) => ({sort: Math.random(), value: a})) é uma forma de criar um objeto literal dentro de uma função.

// Normalmente, quando se usa chaves para criar um objeto literal dentro de uma arrow function, é necessário usar a palavra chave return
// const array = [1, 2, 3, 4];

// const newArray = array.map((number) => {
//   return { number: number };
// });

// console.log(newArray); // [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }]

// Entretanto, quando se usa parênteses em volta das chaves, é possível omitir a palavra return. Neste caso, os parênteses servem para informar ao interpretador que se trata de um objeto literal em vez de um bloco de código.

// const array = [1, 2, 3, 4];

// const newArray = array.map((number) => ({ number: number }));

// console.log(newArray); // [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }]

// No exemplo em questão, a sintaxe .map((a) => ({sort: Math.random(), value: a})) é usada para criar um novo array com objetos que contêm um valor aleatório (sort) e uma função (value) a partir do array funcs. O uso dos parênteses em volta das chaves neste caso é uma forma de evitar o uso da palavra return.

// .sort((a, b) => a.sort - b.sort)

// array.sort([compareFunction])
// Onde array é o array a ser ordenado e compareFunction é uma função opcional que especifica a ordem de classificação.

// Se a função compareFunction não for fornecida, os elementos são classificados em ordem lexicográfica (alfabética) crescente. Se compareFunction for fornecido, o array será classificado com base no valor retornado por compareFunction.

// A função compareFunction recebe dois parâmetros (geralmente chamados de a e b) que representam os elementos a serem comparados. Ela deve retornar:

// Um valor negativo se a deve ser classificado antes de b
// Zero se a e b são considerados iguais em termos de classificação
// Um valor positivo se a deve ser classificado depois de b
// A ordem de classificação é determinada pelos valores retornados pela função compareFunction. Se o valor retornado for negativo, a é classificado antes de b. Se o valor retornado for zero, a ordem de a e b não é alterada. Se o valor retornado for positivo, b é classificado antes de a.

// const arr = [3, 1, 5, 2, 4];

// E queremos ordená-lo em ordem crescente usando a função sort(). Podemos fazer assim:

// const arrOrdenado = arr.sort((a, b) => a - b);

// Nesse caso, a e b representam cada um dos elementos do array que estão sendo comparados em cada iteração do sort().

// Na primeira iteração, a seria o primeiro elemento (3) e b seria o segundo elemento (1). Como 3 é maior que 1, a função retorna um número positivo, indicando que a deve ser ordenado antes de b.

// Na segunda iteração, a seria o segundo elemento (1) e b seria o terceiro elemento (5). Como 1 é menor que 5, a função retorna um número negativo, indicando que a não precisa ser trocado com b.

// E assim por diante, até que o array esteja completamente ordenado.

// .map((a) => ({sort: Math.random(), value: a})) 
// retorna:
// [
//   {sort: 0.562, value: geraMaiuscula},
//   {sort: 0.825, value: geraNumero},
//   {sort: 0.215, value: geraSimbolo},
//   {sort: 0.345, value: geraMinuscula}
// ]

// .sort((a, b) => a - b)

// retorna:
// elementos:
//   1       2
// 0.562 - 0.825 = negativo
// como retornou negativo, indica que o menor numero esta a esquerda
// elementos:
//   1       2
// 0.825 - 0.215 = positivo
// como retornou positivo, indica que o maior numero esta a esquerda então a posição tem de ser invertida 0.215, 0.825. até aqui 0.562, 0.215 e 0.825
