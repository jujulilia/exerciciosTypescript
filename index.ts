let numero: number =200;
let segundoNumero: number =100;

console.log(numero + segundoNumero);

let idade: number = 16;
let texto: string = "Minha idade é:" + idade;

console.log(texto);

let idadeNova: number = 16;
let textoNovo: string = "Minha idade é:";

console.log(textoNovo + idadeNova);

let verdadeiro: boolean = false;

console.log(verdadeiro);

let arr: number[] = [1, 2, 3, 4, 5, 10, 50, 60];

console.log(arr);
console.log("Tamanho do Arrey:" + arr.length);
console.log("Acessando a posição do array:" + arr[5]);
console.log(arr.indexOf(60));

let arrayTexto: Array<string>;
arrayTexto = ['ab', 'bc', 'cd', 'de'];

console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));

function exibirTexto(){
    console.log('Exibindo meu Texto');
}

exibirTexto();

function exibirOutroTexto(){
    return "Exibindo outro Texto";
}

console.log(exibirOutroTexto());

function retornarNumero(){
    return 10;
}

console.log(retornarNumero());

function retornaTexto(): string{
    return "retornando string"; 
}

console.log(retornaTexto());

function soma(a: number, b: number): number {
     return a + b;
}

console.log("O valor da soma é: " + soma(50, 100));


function multiplicaçao(a: number, b: number): number {
    return a * b;
}

console.log("O valor da multiplicação é: " + multiplicaçao(5, 10));

function parametros(a: number, b: number, c: number): number {
    return (a + b)* c ;
}

console.log("O valor da conta é: " + parametros(5, 5, 2));



function resultado(a: number, b: number): string {
    return "O resultado da multiplicação é: " + (a * b);
}

console.log(resultado(10, 5));        