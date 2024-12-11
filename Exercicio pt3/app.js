// 1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function massaCorporal(peso, altura) {
    let imc = peso / (altura*altura);
    console.log(`Com ${peso}Kg e ${altura} metros, seu IMC é de ${imc.toFixed(2)}`);
}
let peso = 70;
let altura = 1.80;
massaCorporal(peso, altura);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function numeroFatorial(fatorial) {
    let cont = fatorial - 1;
    let resultado = fatorial * cont;
    while (cont > 1) {
        cont--;
        resultado *= cont;
    }
    console.log(resultado);
}
let fatorial = parseInt(prompt('Digite um numero:'));
numeroFatorial(fatorial);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$6,06.
function convertendoDolar(meusDolares) {
    let umDolarEmReal = 6.06;
    let resultado = meusDolares * umDolarEmReal;
    console.log(`Ok senhor, seus $${meusDolares.toFixed(2)} vão se torna R$${resultado.toFixed(2)}`);
}
let meusDolares = parseFloat(prompt('Quantos dolares você quer converter?'));
convertendoDolar(meusDolares);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// Area do retangulo = largura x altura   --------   Perimetro do retangulo = 2 x (largura + altura)
function salaRetangular (altura, largura) {
    let resultadoArea = altura * largura;
    let resultadoPerimetro = 2 * (altura + largura);
    console.log(`Essa sala com ${altura} metros de altura e ${largura} metros de largura, possui área de ${resultadoArea} metros e perímetro de ${resultadoPerimetro} metros`);
}
let alt = parseFloat(prompt('Qual a altura da sala?'));
let lar = parseFloat(prompt('E qual a largura?'));
salaRetangular(alt, lar);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
//Perimetro do circulo = 2 * Pi * raio ---------------------------- Area = pi x raio²
function salaCircular(raio) {
    let Pi = 3.1416;
    let resultadoArea = Pi * (raio * raio);
    let resultadoPerimetro = 2 * Pi * raio;
    return `Com o raio de ${raio} metros, essa sala possui área de ${resultadoArea.toFixed(2)} metros e perímetro de ${resultadoPerimetro.toFixed(2)} metros!`;
}
let raio = parseFloat(prompt('Qual o raio dessa sala?'));
let resultadoSalaCircular = salaCircular(raio);
console.log(resultadoSalaCircular);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    let cont = 1;
    while (cont <= 10) {
        let resultado = numero * cont
        console.log(`${numero} x ${cont} = ${resultado}`);
        cont++;
    }
}
let numero = parseInt(prompt('Quer ver a tabuada de qual numero?'))
tabuada(numero);