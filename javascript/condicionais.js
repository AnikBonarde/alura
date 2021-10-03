console.log(`Trabalhando com Condicionais`)

const racaCachorros = new Array(
    `Poodle`,
    `Labrador`,
    `Pincher`,
    `Golden Retriever`
)

/* const idadeAdotante = 12
const estaAcompanhada = true  //Tipo boleano

if(idadeAdotante >= 18){
    console.log(`Oba! Adotar é o caminho`)
}else if(estaAcompanhada){
    console.log(`Está acompanhado`)
}else{
    
console.log(`Adotar é responsabilidade!`)
    
} */

const idadeAdotante = 18
const estaAcompanhada = true  //Tipo boleano
const temPassagemComprada = false



if(idadeAdotante >= 18 || estaAcompanhada == true){ // || == OU OR umas das opções precisam ser true
    console.log(`Oba! Adotar é o caminho`)
}else{
    
console.log(`Adotar é responsabilidade!`)
    
}

if(idadeAdotante >= 18 && temPassagemComprada){  // && == E AND ambas opções precisam ser true
    console.log('Boa viagem!')
}else{
    console.log('Xiii, não pode embarcar por algum motivo')
}



//Operadores Lógicos
//  console.log(idadeAdotante > 18)
//  console.log(idadeAdotante < 18)
//  console.log(idadeAdotante <= 18)
//  console.log(idadeAdotante >= 18)
//  console.log(idadeAdotante == 18)


