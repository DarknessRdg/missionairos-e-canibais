import acoes from '../constants/acoes';

/**
 * Classe que represennta uma margem do rio
 */
class Margem {
    constructor({ canibais, missionarios, canoa = null, de_inicio = false }) {
        this.canibais = canibais;
        this.missionarios = missionarios;
        this.canoa = canoa;
        this.acao_executada = null;
        this.de_inicio = de_inicio;
    }

    /**
     * Cria uma nova instância de Marge com o mesmo estado a instância atual.
     * 
     * @returns {Margem}
     */
    clone() { 
        const outra = new Margem({ 
            canibais: this.canibais, 
            missionarios: this.missionarios,
            de_inicio: this.de_inicio
        });

        outra.acao_executada = this.acao_executada;

        if (this.canoa_esta_na_margem()) {
            outra.canoa = this.canoa.clone();
        }

        return outra;
    }

    /**
     * Retorna se não existe não existe algum ator na margem.
     * 
     * @returns {Boolean}
     */
    esta_vazia() {
        return this.canibais === 0 && this.missionarios === 0;
    }

    /**
     * Returna uma lista com todas ações que podem ser excutada pela margem.
     * 
     * @returns {Array<acoes>} 
     */
    possiveis_acoes() {
        return Object.values(acoes).filter((it) => this.pode_executar_acao(it));
    }

    /**
     * Atualia o estado da magem atual de acordo com a ação fornecida.
     * 
     * @param {acao} acao 
     */
    executar_acao(acao) { 
        this.acao_executada = acao;
        const novo_estado = this._proximo_estado_dada_acao(acao);

        this.canibais = novo_estado.canibais;
        this.missionarios = novo_estado.missionarios;

        
        if (this.canoa_esta_na_margem()) {
            acao.atores.forEach(ator => this.canoa.add_passageiro(ator));
        }
    }

    /**
     * Verifica se a ação vai deixar a margem com um estado
     * válido, onde os missionários sobrevivem, e existem atores
     * suficiente para mover de lado.
     * 
     * @param {acao} acao
     */
    pode_executar_acao(acao) {
        const proximo_estado = this._proximo_estado_dada_acao(acao);

        let missionarios_sobrevivem = proximo_estado.missionarios >= proximo_estado.canibais;

        if (proximo_estado.missionarios === 0) {
            missionarios_sobrevivem = true;
        }

        const quantidade_negativa = proximo_estado.missionarios < 0 || proximo_estado.canibais < 0;

        return missionarios_sobrevivem && !quantidade_negativa;
    }

    missionarios_mortos() {
        return this.missionarios < this.canibais;
    }

    /**
     * Calcula o próximo estado da margem e retorna um objeto com os
     * valores do próximo estado, caso a ação seja executada.
     * 
     * @param {acao} acao 
     * @returns {{canibais: Number, missionarios: Number}}
     */
    _proximo_estado_dada_acao(acao) {   
        const proximo_estado = {
            canibais: this.canibais, 
            missionarios: this.missionarios
        };

        if (this.canoa_esta_na_margem()) {
            proximo_estado.canibais -= acao.qnt_canibal;
            proximo_estado.missionarios -= acao.qnt_missioanario;
        } else {
            proximo_estado.canibais += acao.qnt_canibal;
            proximo_estado.missionarios += acao.qnt_missioanario;
        }

        return proximo_estado;
    }

    /**
     * Retorna se a canoa está presente na margem atual.
     * 
     * @returns {Boolean}
     */
    canoa_esta_na_margem() { return this.canoa !== null; }
};

export default Margem;
