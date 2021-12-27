import "./style.css";
import { useEffect, useRef, useState } from 'react';
import Atores from '../../../constants/atores';
import FINALIZADOR from '../finalizador';
import utils from '../utils';


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


function Canoa({ em_execucao, acao, ao_finalizar, esta_voltando, lado_da_canoa }) {
    const canoa_div = useRef();
    const [passageiros, set_passageiros] = useState([]);

    const esta_indo = !esta_voltando;

    if (em_execucao === FINALIZADOR.CANOA) {
        setTimeout(ao_finalizar, 2000);
    }

    useEffect(function desembarcar_passageiros() {
        if (esta_indo && em_execucao === FINALIZADOR.MARGEM_ESQUERDA) {
            set_passageiros([]);
        } else {
            set_passageiros(build_passageiros(acao));
        }
    }, [em_execucao]);

    useEffect(() => {
        if (!canoa_div.current.className.includes(lado_da_canoa)) {
            canoa_div.current.classList.remove('direita')
            canoa_div.current.classList.remove('esquerda')

            setTimeout(() => {
                canoa_div.current.classList.add(lado_da_canoa)
            }, 10);
        }
    }, [lado_da_canoa]);

    return <div className="canoa-content">
        <div className="canoa direita" ref={canoa_div} >
            {utils.build_personagem_component(passageiros)}
        </div>
    </div>
}


export default Canoa;
