/**
 * Author: Luan da Silva Rodrigues
 *         Leonardo Coelho de Sousa Pinheiro
 * 
 * Matéria: Inteligência Artifial
 * Professora: Lianna Duarte
 */

import "./style.css";
import { useEffect, useState } from 'react';
import utils from '../utils';

/**
 * Cria um array com o tipo dos pernosagens que estão
 * na canoa a partir do estado atual
 * @param {Object<canibais, missionarios>} estado 
 * @returns {Array<Stri ng>}
 */
function build_passageiros(estado) {
    return [
        ...utils.get_canibais_pelo_estado(estado),
        ...utils.get_missionarios_pelo_estado(estado)
    ];
};


function Canoa({ estado_atual }) {
    const passageiros = build_passageiros(estado_atual);
    const [esta_voltando, set_esta_voltando] = useState(false);

    /**
     * Altera a direção da canoa se necessário
     */
    function alterar_direcao_da_canoa(){
        if (passageiros.length !== 0) {
            set_esta_voltando(!esta_voltando);
        }

    }

    /**
     * Altera o estado direção da canoa, se necessário
     * sempre que o estado atual da canoa for alterado
     */
    useEffect(alterar_direcao_da_canoa, [estado_atual]);

    let direcao_da_canoa = 'esquerda';
    if (esta_voltando) {
        direcao_da_canoa = 'direita';
    }

    return <div className="canoa-content">
        <div className={"canoa " + direcao_da_canoa}>
            {utils.build_personagem_component(passageiros)}
        </div>
    </div>
}


export default Canoa;
