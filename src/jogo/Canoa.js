import { CanoaCheiaException } from './exceptions';


class Canoa {
    constructor () {
        this.passageiros = [];
        this.max_qnt_passageiros = 2;
    }

    clone() {
        const outra = new Canoa();
        outra.passageiros = [...this.passageiros];
        return outra;
    }

    add_passageiro(passageiro) {
        if (!this.cabe_passageiro()) {
            throw new CanoaCheiaException(this.passageiros);
        }

        this.passageiros.push(passageiro);
    }

    cabe_passageiro() {
        return this.passageiros.length < this.max_qnt_passageiros;
    }

}


export default Canoa;
