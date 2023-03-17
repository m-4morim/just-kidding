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
    const s3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const map1 = s3.map(
        if (x >= 7) {
            console.log("Aprovado")
        } else if (x >= 5 && x < 7) {
            console.log("Recuperação")
        } else {
            console.log("Reprovado")
        })
}

estCond()