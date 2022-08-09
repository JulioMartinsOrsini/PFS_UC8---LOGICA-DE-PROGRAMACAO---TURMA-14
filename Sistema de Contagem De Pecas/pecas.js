let pesoPeca = 300 // peso deve ser maior que 100
let nomePeca = "disco" // tamanho do nome deve ser maior que 2 caracteres
let quantidadePecas = 5 // quantidade de peças não pode ser maior que 10
 if (quantidadePecas < 10 ) {
    console.log("A lista de peças ainda tem espaço,a peça pode ser cadastrada")
    if (nomePeca.length >2) {
        console.log("Nome oK")
     if (pesoPeca >= 100) {
        console.log("Peso ok, peça cadastrada com sucesso")
     } else {
        console.log("Peso inferior a 100g, a peça não podeser cadastrada")
     }
    } else {
        console.log("O nome da peça tem menos que 3 caracteres e não pode ser cadastrada")
    }
 } else {
    console.log("A lista de peça ja esta completa, não é possivel cadastrar mais peça ")
 }
