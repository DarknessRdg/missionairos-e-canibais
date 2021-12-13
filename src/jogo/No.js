class No {
    constructor({ acao, margem_a, margem_b, passos_anteriores = [] }) {
        this.acao = acao;
        this._margem_a = margem_a.clone();
        this._margem_b = margem_b.clone();
        this.passos_anteriores = [...passos_anteriores];
    }

    com_canoa() { 
        if (this._margem_a.canoa_esta_na_margem()) {
            return this._margem_a;
        }
        return this._margem_b;
    }

    sem_canoa() { 
        if (!this._margem_a.canoa_esta_na_margem()) {
            return this._margem_a;
        }
        return this._margem_b;
    }

    margem_de_inicio() {
        if (this._margem_a.de_inicio) {
            return this._margem_a;
        }
        return this._margem_b;
    }

    possiveis_acoes() {
        return this.com_canoa().possiveis_acoes().filter((acao) => {
            return this.sem_canoa().pode_executar_acao(acao)
        });
    }
}

export default No;