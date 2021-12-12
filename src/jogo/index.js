import Canoa from "./Canoa";
import Margem from "./margem";

class Jogo {
    constructor() {
        this.ganhou = false;
        this.passos_executados = []
    }

    encontrar_acoes() {
        const margem_saida = new Margem({ 
            canibais: 3, 
            missionarios: 3, 
            canoa: new Canoa(), 
            de_inicio: true 
        });
        const margem_destino = new Margem({ canibais: 0, missionarios: 0 });

        return this._busca_em_largura(margem_saida, margem_destino);
    }

    _busca_em_largura(inicio, destino) {
        const fila = inicio.possiveis_acoes().map((it) => {
            return {
                acao: it, 
                com_canoa: inicio.clone(), 
                sem_canoa: destino.clone(),
                passos_anteriores: []
            }
        });

        while (fila.length !== 0) {
            const acao = fila.shift();

            acao.com_canoa.executar_acao(acao.acao);
            acao.sem_canoa.executar_acao(acao.acao);

            PassoExecutado.criar_e_mover_canoa(acao);

            if (acao.com_canoa.de_inicio && acao.com_canoa.esta_vazia()) {
                return acao.passos_anteriores;
            }

            acao.sem_canoa.possiveis_acoes().forEach(it => {
                fila.push({
                    acao: it, 
                    com_canoa: acao.sem_canoa.clone(), 
                    sem_canoa: acao.com_canoa.clone(),
                    passos_anteriores: [...acao.passos_anteriores]
                });
            });
        }
    }
}

class PassoExecutado {
    constructor({ com_canoa, sem_canoa, acao }) {
        this.estado_da_margem_com_canoa = com_canoa;
        this.estado_da_margem_sem_canoa = sem_canoa;
        this.acao_executada = acao;
    }

    static criar_e_mover_canoa(acao) {
        const novo_passo = new PassoExecutado({
            com_canoa: acao.com_canoa.clone(),
            sem_canoa: acao.sem_canoa.clone(),
            acao: acao.acao
        });

        acao.passos_anteriores.push(novo_passo);
        acao.sem_canoa.canoa = new Canoa();
        acao.com_canoa.canoa = null;
        return novo_passo;
    }
}


export default Jogo;
