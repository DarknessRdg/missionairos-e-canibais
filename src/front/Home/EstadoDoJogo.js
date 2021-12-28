import Atores from "../../constants/atores";

/**
 * Classe para armezar um estado do jogo.
 * Atributos:
 *  - incio: {Margem}
 *  - destino: {Margem}
 *  - canoa: {Object<missionarios, canibais, esta>}
 */
class EstadoDoJogo {
    constructor(margem_a, margem_b, canoa) {
        let inicio = margem_a;
        let destino = margem_b;

        if (margem_b.de_inicio) {
            inicio = margem_b;
            destino = margem_a;
        }

        this.inicio = inicio;
        this.destino = destino;
        this.canoa = {
            missionarios: canoa.passageiros.filter((it) => it === Atores.MISSIONARIO).length,
            canibais: canoa.passageiros.filter((it) => it === Atores.CANIBAL).length,
        };
    }

    /**
     * Cria um estado do jogo antes da ação ter sido executada
     * 
     * @param {PassoExecutado} passo 
     * @returns {EstadoDoJogo}
     */
    static pre_acao(passo) {
        const com_canoa = passo.margem_com_canoa().clone();
        const sem_canoa = passo.margem_sem_canoa().clone();

        const canoa = com_canoa.canoa.clone();
        canoa.esvaziar();

        this._swap_canoa(sem_canoa, com_canoa, canoa);

        sem_canoa.executar_acao(passo.acao_executada);
        com_canoa.executar_acao(passo.acao_executada);

        this._swap_canoa(com_canoa, sem_canoa, canoa);
        canoa.esvaziar();

        return new EstadoDoJogo(com_canoa, sem_canoa, canoa);
    }

    /**
     * Cria um estado do jogo durante a execução da ação
     * 
     * @param {PassoExecutado} passo 
     * @returns {EstadoDoJogo}
     */
    static durante_acao(passo) {
        const com_canoa = passo.margem_com_canoa().clone();
        const sem_canoa = passo.margem_sem_canoa().clone();
        
        const canoa = com_canoa.canoa.clone();
        canoa.esvaziar();

        sem_canoa.canoa = canoa;
        sem_canoa.executar_acao(passo.acao_executada);

        sem_canoa.canoa = null;

        return new EstadoDoJogo(com_canoa, sem_canoa, com_canoa.canoa);
    }

    /**
     * Cria um estado do jogo após a ação ser executada
     * 
     * @param {PassoExecutado} passo 
     * @returns {EstadoDoJogo}
     */
    static pos_acao(passo) {
        const com_canoa = passo.margem_com_canoa().clone();
        const sem_canoa = passo.margem_sem_canoa().clone();

        com_canoa.canoa.esvaziar();

        return new EstadoDoJogo(com_canoa, sem_canoa, com_canoa.canoa, passo.canoa_esta_voltando);
    }

    static _swap_canoa(com_canoa, sem_canoa, canoa) {
        com_canoa.canoa = canoa;
        sem_canoa.canoa = null;
    }
}

export default EstadoDoJogo;
