import ContainerPersonagem from "../ContainerPersonagens";
import "./style.css"
import utils from "../utils";
import FINALIZADOR from "../finalizador";
import { useEffect, useState } from "react";
import configs from "../configs";

function MargemEsquerda({ ao_finalizar, estado_atual, em_execucao }) {
    const [canibais, set_canibais] = useState([]);
    const [missionarios, set_missionarios] = useState([]);

    if (em_execucao === FINALIZADOR.MARGEM_ESQUERDA) {
        setTimeout(ao_finalizar, configs.delay_animacao_em_ms);
    }

    useEffect(function atualiazr_atores() {
        if (em_execucao === FINALIZADOR.MARGEM_ESQUERDA) {
            set_canibais(utils.get_canibais_pelo_estado(estado_atual));
            set_missionarios(utils.get_missionarios_pelo_estado(estado_atual));
        }
    }, [em_execucao]);

    return <div className="margem-esquerda">
        <ContainerPersonagem
            personagens={utils.build_personagem_component(canibais)} />

        <ContainerPersonagem
            personagens={utils.build_personagem_component(missionarios)} />
    </div>
};

export default MargemEsquerda;
