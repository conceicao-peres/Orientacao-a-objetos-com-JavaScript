import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroContas = 0

    agencia;
    _cliente;
    _saldo;

    get saldo(){
        return this._saldo
    }
    set cliente(novoCliente){
        if (novoCliente instanceof Cliente){
            this._cliente = novoCliente
        }
    }
    get cliente(){
        return this._cliente
    }

    constructor(agencia, cliente){
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numeroContas += 1
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }
    depositar(valor){
        if(valor <= 0){
            return
        }
        this._saldo += valor
        return valor
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}