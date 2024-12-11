// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let horaDoDesafio = document.querySelector('h1');
horaDoDesafio.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function clicandoConsole() {
    console.log('Clicando no Botão Console!');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function criandoAlerta() {
    alert('Eu amo JS!');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando
// a resposta com o texto: Estive em {cidade} e lembrei de você.
function cidadeDoBrasil() {
    let cidade = prompt('Em qual cidade você já foi?');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somandoNumeros() {
    let num1 = parseInt(prompt('Digite um numero:'));
    let num2 = parseInt(prompt('Escolha mais um numero:'));
    let resultado = (num1 + num2);
    alert(`A soma de ${num1} + ${num2} = ${resultado}.`)
}



