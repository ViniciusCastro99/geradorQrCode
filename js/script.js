/*Seleção de elementos */

const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")


//Função:

function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value
    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código..."

    //Altera o src da imagem para o link da api que gera o QR Code
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    //Cria um evento do tipo load para exibir somente quando a imagem carregar.
    qrCodeImg.addEventListener("load", () => {
        //Adiciona a classe "active" ao container, pois, o css exíbe o QR Code somente com essa classe.
        //Ou seja, exíbe o QR Code gerado.
        container.classList.add("active")
        qrCodeBtn.innerText = "QR Code gerado com sucesso!"
    })

    //Adiciona a classe "active" ao container, pois, o css exíbe o QR Code somente com essa classe
    container.classList.add("active")

}

//Eventos

qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})

//Evento para gerar pressionando enter

qrCodeInput.addEventListener("keydown", (e) => {
    /*Verifica se o código da tecla pressionada é enter, se for, executa a função que gera o QR Code */
    if(e.code === "Enter"){
        generateQrCode()
    }
})

// Limpar área do QR Code quando apagamos o conteudo do input:

qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value){
        //revome a classe active do container para o ocultar o QR Code
        container.classList.remove("active")
        qrCodeBtn.innerText="Gerar QR Code"
    }
})