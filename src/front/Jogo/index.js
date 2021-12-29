/**
 * Author: Luan da Silva Rodrigues
 *         Leonardo Coelho de Sousa Pinheiro
 * 
 * Matéria: Inteligência Artifial
 * Professora: Lianna Duarte
 */

import { useEffect, useState } from "react";
import Canoa from "../components/Canoa";
import configs from "../components/configs";
import MargemDireita from "../components/MargemDireita";
import MargemEsquerda from "../components/MargemEsquerda";
import "./style.css";


function Jogo({ estados_do_jogo }) {
    const [passo_id, set_passo_id] = useState(0);

    /**
     * Condição de parada do jogo, retorna booleano indicando
     * se ainda existe passo para ser executado dentro do jogo
     * @returns {Boolean}
     */
    function ainda_tem_passos_para_executar() {
        return passo_id < estados_do_jogo.length-1;
    }

    /**
     * Função que irá inserir na fila de excução o próximo
     * passo assim que a animação finalizar se ainda houver
     * estados para serem executados.
     */
    function trigger_proximo_passo() {
        if (ainda_tem_passos_para_executar()) {
            setTimeout(
                () => set_passo_id(passo_id + 1), 
                configs.delay_animacao_em_ms
            );
        }
    }

    // quando a variavel passo_id mudar de valor, então irá
    // executar a função que após a animação alterará novamente 
    // para o próximo passo
    useEffect(trigger_proximo_passo, [passo_id]);

    /**
     * Retorna o estado do jogo atual
     * @returns {EstadoDoJogo}
     */
    function get_estado_atual() {
        return estados_do_jogo[passo_id];
    }

    return <div className="jogo">
        <div className="wrapper">
            <MargemEsquerda
                estado_atual={get_estado_atual().destino} />

            <Canoa
                estado_atual={get_estado_atual().canoa}  />

            <MargemDireita
                estado_atual={get_estado_atual().inicio} />
        </div>
    </div>
};

export default Jogo;
