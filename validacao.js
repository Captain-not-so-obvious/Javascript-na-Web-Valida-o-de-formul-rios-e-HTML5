export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = " ";

    if(!maiorQue18(dataRecebida));
    mensagem = "Você deve ser maior do que 18 anos para se cadastrar!";

    input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}