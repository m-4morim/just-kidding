var n1 = 2
var n2 = 1

var s = n1 + n2

console.log(s)

let w = 0
let q = 4

let Soma = w - q

console.log(Soma)


var Ab = Soma / 2

console.log(Ab)

var s1 = 5
var s2 = 10
var s3 = (s1 + s2) / 2

console.log(s3)

function estCond(s3) {
    s3 = 0;
    for (i = 0; i < 10; i++) {
        s3 += 1
        console.log(s3)

        if (s3 >= 7) {
            console.log("Aprovado")
        } else if (s3 >= 5 && s3 < 7) {
            console.log("Recuperação")
        } else {
            console.log("Reprovado")
        }
    }
}

estCond()

function Contador(cont) {
    cont = 0;
    for (i = 0; i < 10; i++) {
    cont += 1;
    console.log(cont)
    }
}

Contador()

console.log("Intervalo")

function contadorNeg(cont) {
    cont = 11;
    for (i = 11; i > 1; i--) {
    cont -= 1;
    console.log(cont)
    }
}

contadorNeg()

console.log("Par-ímpar")

function parImp(cont) {
    cont = 0;
    for (i = 0; i < 10; i++) {
    cont += 1;
    console.log(cont)
    
    if (cont % 2 == 0) {
        console.log("Número par")
    } else {
        console.log("Número ímpar")
    }

    }

}

parImp()