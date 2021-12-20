import Canoa from "./Canoa";

class No {
    constructor({ acao, margem_a, margem_b, passos_anteriores }) {
        this.acao = acao;
        this._margem_a = margem_a.clone();
        this._margem_b = margem_b.clone();

        this.passos_anteriores = [...passos_anteriores];
    }

    executar_acao() {
        this._margem_a.executar_acao(this.acao);
        this._margem_b.executar_acao(this.acao);
    }

    esta_no_estado_esperado() {
        return this.margem_de_inicio().esta_vazia();
    }

    mover_canoa() {
        const _com_canoa = this.com_canoa();
        const _sem_canoa = this.sem_canoa();

        _com_canoa.canoa = null;
        _sem_canoa.canoa = new Canoa();
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

    margem_de_destino() {
        if (!this._margem_a.de_inicio) {
            return this._margem_a;
        }
        return this._margem_b;
    }

    possiveis_acoes() {
        return this.com_canoa().possiveis_acoes().filter((acao) => {
            if (this.esta_voltando() && acao === this.acao) return false;    
            return this.sem_canoa().pode_executar_acao(acao)
        });
    }

    adjacentes() {
        return this.possiveis_acoes().map(acao => new No({
            acao: acao,
            margem_a: this._margem_a,
            margem_b: this._margem_b,
            passos_anteriores: this.passos_anteriores
        }));
    }

    esta_voltando() {
        return this.sem_canoa() === this.margem_de_inicio();
    }
}

export default No;