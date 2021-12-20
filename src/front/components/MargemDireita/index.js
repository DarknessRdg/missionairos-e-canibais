import { useState } from "react";
import Atores from "../../../constants/atores";
import ContainerPersonagem from "../ContainerPersonagens";
import Peronagem from "../Personagem";
import "./style.css"

function MargemDireita() {
    const [canibais, set_canibais] = useState(
        [Atores.CANIBAL, Atores.CANIBAL, Atores.CANIBAL]
    );
    const [missionarios, set_missionarios] = useState(
        [Atores.MISSIONARIO, Atores.MISSIONARIO, Atores.MISSIONARIO]
    );

    function build_personagem_component(personagens) {
        return personagens.map(tipo => <Peronagem id='1' lado='DIREITO' tipo={tipo} />)
    }

    return <div className="margem-direita">
        <ContainerPersonagem
            personagens={build_personagem_component(canibais)}
        />
        <ContainerPersonagem
            personagens={build_personagem_component(missionarios)}
        />
    </div>
};

export default MargemDireita;
