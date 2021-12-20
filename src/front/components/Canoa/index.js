import { useState } from 'react';
import canoa from '../../../assets/canoa.jpg';
import Atores from '../../../constants/atores';
import Peronagem from '../Personagem';
import "./style.css";


function Canoa() {
    const [passageiros, set_passageiros] = useState(
        [Atores.CANIBAL, Atores.MISSIONARIO]
    )

    const [posicao, set_posicao] = useState('direita')

    return <div className="canoa-content">
        <div className={"canoa " + posicao}>
            {passageiros.map(it => <Peronagem id='1' tipo={it} />)}
        </div>
    </div>
}


export default Canoa;
