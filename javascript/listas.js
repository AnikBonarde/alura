console.log(`Trabalhando com listas`)


//Declarando um Array
const nomeCachorrosAnik = new Array(
    `Costela`,
    `Maya`,
    `Marley`
)

nomeCachorrosAnik.push(`Flocos`) //push adiciona elementos na lista

console.log(nomeCachorrosAnik)

const palavrasDeAmor = new Array(
    `Te Amo`,
    `Te adoro`,
    `Te vivo`,
)

palavrasDeAmor.push(`Te venero`)//push adiciona elementos na lista

palavrasDeAmor.splice(0,1) //Remove um elemento da lista, posição do elemento e quantidade para ser removido.

console.log(palavrasDeAmor)
console.log(palavrasDeAmor[1]) //Mostra uma posição específica da lista. Toda lista começa com 0.






