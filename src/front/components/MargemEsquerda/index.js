/**
 * Author: Luan da Silva Rodrigues
 *         Leonardo Coelho de Sousa Pinheiro
 * 
 * Matéria: Inteligência Artifial
 * Professora: Lianna Duarte
 */

import ContainerPersonagem from "../ContainerPersonagens";
import "./style.css"
import utils from "../utils";

function MargemEsquerda({ estado_atual }) {
    let canibais = utils.get_canibais_pelo_estado(estado_atual);
    let missionarios = utils.get_missionarios_pelo_estado(estado_atual);

    return <div className="margem-esquerda">
        <ContainerPersonagem
            personagens={utils.build_personagem_component(canibais)} />

        <ContainerPersonagem
            personagens={utils.build_personagem_component(missionarios)} />
    </div>
};

export default MargemEsquerda;
