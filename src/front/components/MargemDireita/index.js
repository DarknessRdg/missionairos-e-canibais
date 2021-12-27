import ContainerPersonagem from "../ContainerPersonagens";
import "./style.css"
import utils from '../utils';
import FINALIZADOR from "../finalizador";


function MargemDireita({ ao_finalizar, em_execucao, estado_atual, estado_anterior }) {
    let canibais = utils.get_canibais_pelo_estado(estado_anterior);
    let missionarios = utils.get_missionarios_pelo_estado(estado_anterior);
 
    if (em_execucao === FINALIZADOR.MARGEM_DIREITA) {
        canibais = utils.get_canibais_pelo_estado(estado_atual);
        missionarios = utils.get_missionarios_pelo_estado(estado_atual);
        setTimeout(ao_finalizar, 2000);
    }

    return <div className="margem-direita">
        <ContainerPersonagem
            personagens={utils.build_personagem_component(canibais)}
        />
        <ContainerPersonagem
            personagens={utils.build_personagem_component(missionarios)}
        />
    </div>
};

export default MargemDireita;
