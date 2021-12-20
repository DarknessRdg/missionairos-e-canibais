import Peronagem from '../Personagem';
import posicao from '../../../constants/posicao';
import "./style.css";
import { useState } from 'react';
import Atores from '../../../constants/atores';


function build_passageiros(acao) {
    const passageiros = [];

    console.log(acao)
    for (let _ = 0; _ < acao.qnt_missioanario; _++) {
        passageiros.push(Atores.MISSIONARIO);
    }
    for (let _ = 0; _ < acao.qnt_canibal; _++) {
        passageiros.push(Atores.CANIBAL);
    }

    return passageiros;
};


function Canoa({ posicao_ataual = posicao.DIREITA, acao }) {
    const [passageiros, set_passageiros] = useState(
        build_passageiros(acao)
    );

    return <div className="canoa-content">
        <div className={"canoa " + posicao_ataual}>
            {passageiros.map(it => <Peronagem tipo={it} />)}
        </div>
    </div>
}


export default Canoa;
