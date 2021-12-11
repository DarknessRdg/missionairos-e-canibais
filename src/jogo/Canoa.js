import { CanoaCheiaException } from './exceptions';


class Canoa {
    constructor () {
        this.passageiros = [];
        this.max_qnt_passageiros = 2;
    }

    add_passageiro(passageiro) {
        if (!this.cabe_passageiro()) {
            throw CanoaCheiaException(this.passageiros.length);
        }

        this.passageiros.push(passageiro);
    }

    cabe_passageiro() {
        return this.passageiros.length < this.max_qnt_passageiros;
    }
}


export default Canoa;
