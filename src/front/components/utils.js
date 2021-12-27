import Atores from "../../constants/atores";
import Personagem from "../components/Personagem";


function get_canibais_pelo_estado(estado) {
    const atores = [];
    for (let _ = 0; _ < estado.canibais; _++) {
        atores.push(Atores.CANIBAL);
    }
    return atores;
}

function get_missionarios_pelo_estado(estado) {
    const atores = [];
    for (let _ = 0; _ < estado.missionarios; _++) {
        atores.push(Atores.MISSIONARIO);
    }
    return atores;
}

function build_personagem_component(personagens) {
    return personagens.map((tipo, id) => <Personagem key={id} tipo={tipo} />)
}


export default {
    get_canibais_pelo_estado,
    get_missionarios_pelo_estado,
    build_personagem_component
};
