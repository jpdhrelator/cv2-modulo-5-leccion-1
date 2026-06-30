class CuentaBancaria{

    #saldo=0;
    #historial=[];
    constructor(titular,saldoInicial=0){
        this.titular=titular;
        this.#saldo=saldoInicial;
        this.#historial= [];

        this.#historial.push(`Cuenta abierta con ${saldoInicial}`)
    }

    get saldo(){
        return this.#saldo;
    }

    deposita(monto){
        if(!monto || monto<0) console.log(`✅ El monto debe ser mayor a 0`);

        this.#saldo += monto;
        this.#historial.push(`Depósito: +$${monto} → Saldo: $${this.#saldo}`);
        console.log(`✅ Depósito de $${monto} realizado`);
    }

    retirar(monto){
        if(!monto || monto<0) console.log(`✅ El monto debe ser mayor a 0`);
       
        if(monto > this.#saldo) console.log(`❌ Saldo insuficiente. Tienes $${this.#saldo}`);
        
        
        this.#saldo-= monto;
        this.#historial.push(`Retiro: -$${monto} → Saldo: $${this.#saldo}`);
        console.log(`💸 Retiro de $${monto} realizado`);

    }


    verHistoria(){
        console.log(`--- Historial de ${this.titular} ---`);
        this.#historial.forEach((h,index)=> console.log(`${index+1}.`,h));
    }
}


const ctaCte= new CuentaBancaria("Jose",50000);
console.log(ctaCte.saldo);
ctaCte.deposita(50000);
ctaCte.retirar(1358);
ctaCte.verHistoria()

