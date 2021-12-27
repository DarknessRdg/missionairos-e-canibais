import ContainerPersonagem from "../ContainerPersonagens";
import "./style.css"
import utils from '../utils';
import FINALIZADOR from "../finalizador";


function MargemDireita({ ao_finalizar, em_execucao, estado_atual, estado_anterior }) {
    let canibais; let missionarios;


    function set_personagens(estado) {
        canibais = utils.get_canibais_pelo_estado(estado);
        missionarios = utils.get_missionarios_pelo_estado(estado);
    }

    if (em_execucao === FINALIZADOR.MARGEM_DIREITA) {
        set_personagens(estado_atual);
        setTimeout(ao_finalizar, 2000);
    } else {
        set_personagens(estado_anterior);
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
