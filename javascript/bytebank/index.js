class Cliente{
    nome;
    cpf;  
}

class contaCorrente{
    agencia;
    _saldo; // significa atributo privado, não mexer fora da classs.

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
       
    }

    depositar(valor){
       if(valor >0 ){
            this._saldo+= valor
       }
    }
}

//Adicionando novo cliente
const cliente1 = new Cliente()
cliente1.nome = 'Ricardo'
cliente1.cpf = '123456789'

//Criando nova classe conta corrente
const contaCorrenteRicardo = new contaCorrente()
contaCorrenteRicardo._saldo = 100
contaCorrenteRicardo.agencia = 1001

//depositando e sacando valores
contaCorrenteRicardo.depositar(100)

contaCorrenteRicardo.depositar(100)

contaCorrenteRicardo.sacar(50)

console.log(contaCorrenteRicardo)





