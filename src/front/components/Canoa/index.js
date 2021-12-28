import "./style.css";
import { useEffect, useState } from 'react';
import Atores from '../../../constants/atores';
import utils from '../utils';

function build_passageiros(acao) {
    console.log(acao)
    const passageiros = []

    for (let _ = 0; _ < acao.missionarios; _++) {
        passageiros.push(Atores.MISSIONARIO);
    }
    for (let _ = 0; _ < acao.canibais; _++) {
        passageiros.push(Atores.CANIBAL);
    }

    return passageiros;
};


function Canoa({ estado_atual }) {
    const passageiros = build_passageiros(estado_atual);
    const [esta_voltando, set_esta_voltando] = useState(false   );

    useEffect(() => {
        if (passageiros.length !== 0) {
            set_esta_voltando(!esta_voltando);
        }
    }, [estado_atual]);

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
