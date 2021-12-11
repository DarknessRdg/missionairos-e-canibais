class Margem {
    constructor({ canibais, missionarios }) {
        this.canibais = canibais;
        this.missionarios = missionarios;
    }

    pode_executar_acao(acao) {
        const proximo_estado = this._proximo_estado_dada_acao(acao);

        const missionarios_sobrevivem = proximo_estado.missioanrios >= proximo_estado.canibais;
        const quantidade_negativa = proximo_estado.missioanrios < 0 || proximo_estado.canibais < 0;

        return missionarios_sobrevivem && !quantidade_negativa;
    }

    esta_vazia() {
        return this.canibais === 0 && this.missionarios === 0;
    }

    _proximo_estado_dada_acao(acao) {
        return {
            canibais: this.canibais - acao.qnt_canibal, 
            missioanrios: this.missionarios - acao.qnt_missioanario
        };
    }
};

export default Margem;
