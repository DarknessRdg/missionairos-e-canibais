/**
 * Author: Luan da Silva Rodrigues
 *         Leonardo Coelho de Sousa Pinheiro
 * 
 * Matéria: Inteligência Artifial
 * Professora: Lianna Duarte
 */

import atores from "./atores";

class Acao {
    constructor(canibal, missionario, atores) {
        this.qnt_canibal = canibal;
        this.qnt_missioanario = missionario;
        this.atores = atores;
    }
}

const Acoes = {
    UM_CANIBAL: new Acao(1, 0, [atores.CANIBAL]),
    UM_MISSIONARIO: new Acao(0, 1, [atores.MISSIONARIO]),
    DOIS_CANIBAIS: new Acao(2, 0, [atores.CANIBAL, atores.CANIBAL]),
    DOIS_MISSIONARIOS: new Acao(0, 2, [atores.MISSIONARIO, atores.MISSIONARIO]),
    UM_CANIBAL_UM_MISSIONARIO: new Acao(1, 1, [atores.MISSIONARIO, atores.CANIBAL])
}


export default Acoes;
