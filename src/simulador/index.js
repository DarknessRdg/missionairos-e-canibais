/**
 * Author: Luan da Silva Rodrigues
 *         Leonardo Coelho de Sousa Pinheiro
 * 
 * Matéria: Inteligência Artifial
 * Professora: Lianna Duarte
 */

import Canoa from "./Canoa";
import Margem from "./Margem";
import No from "./No";

/**
 * Classe que irá simular o problema dos missionários e canibais
 * e encontrar a sequência de passos corretos com a solução
 * do problema através de uma busca em largura
 */
class Simulador {

    /**
     * Método púlico que irá buscar a sequência de passos com a solução
     * do problema.
     * 
     * @returns {Array<PassoExecutado>}
     */
    encontrar_passos() {
        // margem da direita
        const margem_saida = new Margem({ 
            canibais: 3, 
            missionarios: 3, 
            canoa: new Canoa(), 
            de_inicio: true 
        });

        // margem da esqeurda
        const margem_destino = new Margem({ canibais: 0, missionarios: 0 });

        return this._busca_em_largura(margem_saida, margem_destino);
    }

    /**
     * Método privado para realizar busca em largura nas possíveis ações
     * e retornar os passos executados da primeira solução encontrada.
     * 
     * @param {Margem} inicio 
     * @param {Margem} destino 
     * @returns {Array<PassoExecutado>}
     */
    _busca_em_largura(inicio, destino) {
        const fila = inicio.possiveis_acoes().map((acao) => {
            return new No({
                acao: acao,
                margem_a: inicio, 
                margem_b: destino,
                passos_anteriores: new Array(0)
            })
        });

        while (fila.length !== 0) {

            const no = fila.shift();

            no.executar_acao();

            no.passos_anteriores.push(
                new PassoExecutado(no)
            );
            no.mover_canoa();

            if (no.esta_no_estado_esperado()) {
                return no.passos_anteriores;
            }

            no.adjacentes().forEach((no_adjacente) => fila.push(no_adjacente));
        }
    }
}

/**
 * Classe para manter o registro de passos executados até chegar
 * a um determinado nó do grafo. O registro mantém o estado:
 *   - margem de inicio
 *   - margem de destino
 *   - qual margem é a margem de início do jogo
 *   - qual a ação executa.
 */
class PassoExecutado {
    constructor(no) {
        this.estado_da_margem_inicial = no.margem_de_inicio().clone();
        this.estado_da_margem_destino = no.margem_de_destino().clone();
        this.acao_executada = no.acao;
        this.canoa_esta_voltando = no.esta_voltando();
    }

    /**
     * Retorna a margem no qual possui uma canoa
     * @returns {Margem}
     */
    margem_com_canoa() {
        if (this.estado_da_margem_inicial.canoa_esta_na_margem()) {
            return this.estado_da_margem_inicial
        }
        return this.estado_da_margem_destino;
    }

    /**
     * Retorna a margem no qual não existe canoa presente na margem
     * @returns {Margem}
     */
    margem_sem_canoa() {
        if (!this.estado_da_margem_inicial.canoa_esta_na_margem()) {
            return this.estado_da_margem_inicial
        }
        return this.estado_da_margem_destino;
    }
}



export default Simulador;
