import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("José", 11122233309)
const cliente2 = new Cliente("Maria", 88822233309)

const contaCorrente1 = new ContaCorrente(1001, cliente1)
contaCorrente1._saldo = 0
const contaCorrente2 = new ContaCorrente(1001, cliente2)
contaCorrente2._saldo = 0

const valorDepositado = contaCorrente1.depositar(500)

contaCorrente1.transferir(200, contaCorrente2)
contaCorrente2.transferir(50, contaCorrente1)

console.log(contaCorrente1)
console.log(contaCorrente2)
console.log(ContaCorrente.numeroContas)