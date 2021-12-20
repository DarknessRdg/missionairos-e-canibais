import posicao from "../../../constants/posicao";
import ContainerPersonagem from "../ContainerPersonagens";
import Peronagem from "../Personagem";
import "./style.css"
import utils from '../utils';


function build_personagem_component(personagens) {
    return personagens.map(tipo => <Peronagem id='1' lado='DIREITO' tipo={tipo} />)
}


function MargemDireita({ ao_finalizar, lado_atual, estado_atual }) {
    const canibais = utils.get_canibais_pelo_estado(estado_atual);

    const missionarios = utils.get_missionarios_pelo_estado(estado_atual);
 
    if (lado_atual === posicao.DIREITA) {
        setTimeout(ao_finalizar, 2000);
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
