const saboresDePizza = new Array (
    `Mussarela`,
    `Marguerita`,
    `Brócolis com queijo`,
    `Escarola com queijo`,
)

 const saborEscolhido = 'Brócolis com queijo'

 let contador = 0

while(contador < 4){
    if(saboresDePizza[contador] == saborEscolhido){
        console.log('Temos no cardapio!')
        break
    }else{
        console.log('Não temos no cardápio')
    }

    contador += 1
}

const palavra = 'Te amo, amor!'
let conta = 2
let contadordeAmor = 0;

/* while(contadordeAmor <= 100 && conta == 2 ){
    console.log(palavra)
    contadordeAmor += 1
} */


//incrementa, verifica 

for(let cont = 0 ; contadordeAmor <= 100 && conta == 2; cont += 1 ){
    console.log(palavra)
}


   
