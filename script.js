// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


const codificar = document.querySelector("#codificar").value.toLowerCase();
const mensagem = document.querySelector(".mainAreaCriptografia")

function criptografar() {
    const codificar = document.querySelector("#codificar").value.toLowerCase();
const mensagem = document.querySelector(".mainAreaCriptografia")
    const char = '[a-zA-Z0-9]';

    if (!codificar.match(char)){
        alert("TEXTO INVALIDO! Favor escrever o texto novamente sem o uso de carcteresespeciais.");
    }

    let cripto = codificar.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
    
    mensagem.innerHTML = `<textarea readonly class="resposta" cols="45" rows="20">${cripto}</textarea>
    <button type="submit" class="btnCopiar" onclick="copiar()">Copiar</button>
    <input type="button" value="Limpar" class="limparBtn" onclick="limpaTexto()">
    `
    return cripto;
}

function descriptografar() {
    
    let cripto = codificar.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");

    
    
    mensagem.innerHTML = `<textarea readonly class="resposta" cols="45" rows="20">${cripto}</textarea>
        <button type="submit" class="btnCopiar" onclick="copiar()">Copiar</button>
        <input type="button" value="Limpar" class="limparBtn" onclick="limpaTexto()">
        `

}
function copiar() {
    let btn = document.querySelector(".btnCopiar");
    let textoCopia = document.querySelector(".resposta").value;
    navigator.clipboard.writeText(textoCopia).then(() => {
        btn.textContent = "Copiado";
        btn.style.cssText =
            'color: white;' +
            'background: green;'
    });
}
function limpaTexto() {
    let limparBtn = document.querySelector(".limparBtn")
    let textoCampoResposta = document.querySelector(".resposta");
    let texto = document.querySelector("#codificar");

    limparBtn.textContent = "Limpo";
    limparBtn.style.cssText = 
        'color = white;' +
        'background = #0A3871;';

    textoCampoResposta.value = " ";
    texto.value = " ";

}