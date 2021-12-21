import Peronagem from '../Personagem';
import posicao from '../../../constants/posicao';
import "./style.css";
import { useEffect, useState } from 'react';
import Atores from '../../../constants/atores';
import FINALIZADOR from '../finalizador';


function build_passageiros(acao) {
    const passageiros = [];

    for (let _ = 0; _ < acao.qnt_missioanario; _++) {
        passageiros.push(Atores.MISSIONARIO);
    }
    for (let _ = 0; _ < acao.qnt_canibal; _++) {
        passageiros.push(Atores.CANIBAL);
    }

    return passageiros;
};


function Canoa({ em_execucao, acao, ao_finalizar, esta_voltando }) {
    const [passageiros, set_passageiros] = useState(
        build_passageiros(acao)
    );

    const esta_indo = !esta_voltando;

    if (em_execucao === FINALIZADOR.CANOA) {
        setTimeout(ao_finalizar, 5100);
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
        }
    }, [em_execucao])

    return <div className="canoa-content">
        <div className={"canoa " + direcao_da_canoa}>
            {passageiros.map(it => <Peronagem tipo={it} />)}
        </div>
    </div>
}


export default Canoa;
