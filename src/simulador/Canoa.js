import { CanoaCheiaException } from './exceptions';


/**
 * Classe para representar a cano e os atores que estão
 * dentro dela duranta a execução da ação.
 */
class Canoa {
    constructor () {
        this.passageiros = [];
        this.max_qnt_passageiros = 2;
    }

    /**
     * Retorna uma nova Canoa com o mesmo estado da instância atual.
     * 
     * @returns {Canoa}
     */
    clone() {
        const outra = new Canoa();
        outra.passageiros = [...this.passageiros];
        return outra;
    }

    /**
     * Adiciona um novo passageiro na canoa.
     * 
     * @throws {CanoaCheiaException} - lançado caso tente adicionar com acima do limite permitido
     * @param {String} passageiro 
     */
    add_passageiro(passageiro) {
        if (!this.cabe_passageiro()) {
            throw new CanoaCheiaException(this.passageiros);
        }

        this.passageiros.push(passageiro);
    }

    /**
     * Retorna se ainda pode ser adicionar passageiros na canoa.
     * 
     * @returns {Boolean}
     */
    cabe_passageiro() {
        return this.passageiros.length < this.max_qnt_passageiros;
    }


    /**
     * Remove todos os atores da canoa
     */
    esvaziar() {
        this.passageiros = [];
    }
}


export default Canoa;
