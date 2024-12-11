// 1.Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Ola Mundo!');
}
olaMundo();//como se fosse um botão de click para funcionar a função

// 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
    console.log(`Olá ${nome}!`)
}
exibirNome('Lucas');

// 3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function retornaDobro(numero) {
    return numero * 2;
}
let numero = 10;
let dobro = retornaDobro(numero);
console.log(dobro);

// 4.Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}
let num1 = 5;
let num2 = 10;
let num3 = 100;
let media = mediaNumeros(num1, num2, num3);//podia colocar numero direto, só n quis
console.log(`A média de ${num1} + ${num2} + ${num3} é ${media.toFixed(1)}.`)

// 5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        if (b > a) {
            return b;
        } else {
            return 'nenhum, pois são iguais!'
        }
    }
}
let a = prompt('Digite um numero:');
let b = prompt('Digite mais um numero:');
let maior = maiorNumero(a,b);
console.log(`Entre ${a} e ${b}, o maior é ${maior}.`);

// 6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroAoQuadrado(quadrado) {
    return quadrado * quadrado;
}
let num = 9;
let resultadoAoQuadrado = numeroAoQuadrado(num);
console.log(`O quadrado de ${num} é ${resultadoAoQuadrado}.`);