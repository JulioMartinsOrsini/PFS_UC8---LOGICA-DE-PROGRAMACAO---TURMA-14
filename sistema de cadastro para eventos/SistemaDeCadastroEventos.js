let DataEvento = (14/09/2022)
let DataAtual  = (09/08/2022) 
let Idade = 18
let NumeroParticipantes = 99
let ListaDeParticipantes = ["Rafael","Vanessa","Joel","Laura","Julio","Raimunda"]
let QuantidadeDeParticipantes = ListaDeParticipantes.length;
let NomesDosPalestrantes = ["Prof Odirlei Sabella","Prof Steve Rogers","Prof Tony Stark"]
let NumeroDePalestrantes = NomesDosPalestrantes.length;


if (DataEvento >= DataAtual) {
    console.log(" A Data foi Aprovada ")
    if (Idade >= 18 ) {
        console.log(" A Idade foi Aprovada ")
        if (NumeroParticipantes <= 99) {
            console.log(" A Inscrição Foi Aprovada ")
            console.log("Exibir os Nomes dos Participantes Já Cadastrados")
            if (QuantidadeDeParticipantes <= 99 ) {
                ListaDeParticipantes.push("Patricia");
                console.log(ListaDeParticipantes);
                console.log("Exibir os Nomes Dos Palestrantes")
                for (let index = 0; index <NumeroDePalestrantes; index++) {
                    const PalestranteCorrente = NomesDosPalestrantes[index];
                    console.log(PalestranteCorrente);
                }
            } else {
                console.log("Falha No Cadastramento Numero De Participantes Excedido")
            }
        } else {
            console.log("Falha No Cadastramento Numero De Participantes Execedido")
        }
    } else {
        console.log("Falha No Cadastramento Ter No Mínimo 18 anos")
    }
} else {
    console.log(" Data Expirada Cadastro Não Permitido")
}
