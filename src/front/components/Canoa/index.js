import "./style.css";
import { useEffect, useState } from 'react';
import Atores from '../../../constants/atores';
import FINALIZADOR from '../finalizador';
import utils from '../utils';
import configs from "../configs";


function build_passageiros(acao) {
    const passageiros = []

    for (let _ = 0; _ < acao.qnt_missioanario; _++) {
        passageiros.push(Atores.MISSIONARIO);
    }
    for (let _ = 0; _ < acao.qnt_canibal; _++) {
        passageiros.push(Atores.CANIBAL);
    }

    return passageiros;
};


function Canoa({ em_execucao, acao, ao_finalizar, esta_voltando }) {
    const [passageiros, set_passageiros] = useState([]);

    const esta_indo = !esta_voltando;

    if (em_execucao === FINALIZADOR.CANOA) {
        setTimeout(ao_finalizar, configs.delay_animacao_em_ms);
    }

    let direcao_da_canoa = 'esquerda';
    if (esta_voltando) {
        direcao_da_canoa = 'direita';
    }

    useEffect(function desembarcar_passageiros() {
        if (esta_indo && em_execucao === FINALIZADOR.MARGEM_ESQUERDA) {
            set_passageiros([])
        } else if (esta_voltando && em_execucao === FINALIZADOR.MARGEM_DIREITA) {
            set_passageiros([])
        } else {
            set_passageiros(build_passageiros(acao));
        }
    }, [em_execucao])

    return <div className="canoa-content">
        <div className={"canoa " + direcao_da_canoa}>
            {utils.build_personagem_component(passageiros)}
        </div>
    </div>
}


export default Canoa;
