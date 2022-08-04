const buttonForward = document.getElementById("buttonF")
const buttonBack = document.getElementById("buttonB")
const cartao = document.querySelectorAll(".cartao")

let cardIndex = 0

function hideSelectedCard (){
    const selectedCard = document.querySelector(".selecionado")
    selectedCard.classList.remove("selecionado")
}
function showSelectedCard(index) {
    cartao[index].classList.add("selecionado")
}

buttonForward.addEventListener("click", function (){
    if(cardIndex === cartao.length - 1) {
        return
    }
    cardIndex++
    
   showSelectedCard(cardIndex)
   hideSelectedCard()
    
})

buttonBack.addEventListener("click", function (){
    if(cardIndex ===0) return
    hideSelectedCard()

    cardIndex--
   showSelectedCard(cardIndex)
})

