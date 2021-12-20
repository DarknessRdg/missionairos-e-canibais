import { useState } from "react";
import Atores from "../../../constants/atores";
import ContainerPersonagem from "../ContainerPersonagens";
import Peronagem from "../Personagem";
import "./style.css"

function MargemEsquerda() {
    const [canibais, set_canibais] = useState(
        []
    );
    const [missionarios, set_missionarios] = useState(
        []
    );

    function build_personagem_component(personagens) {
        return personagens.map(tipo => <Peronagem id='1' lado='ESQUERDO' tipo={tipo} />)
    }

    return <div className="margem-esquerda">
        <ContainerPersonagem
            personagens={build_personagem_component(canibais)}
        />
        <ContainerPersonagem
            personagens={build_personagem_component(missionarios)}
        />
    </div>
};

export default MargemEsquerda;
