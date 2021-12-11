class Acao {
    constructor(canibal, missionario) {
        this.qnt_canibal = canibal;
        this.qnt_missioanario = missionario;
    }
}


export default {
    UM_CANIBAL: new Acao(1, 0),
    UM_MISSIONARIO: new Acao(0, 1),
    DOIS_CANIBAIS: new Acao(2, 0),
    DOIS_MISSIONARIOS: new Acao(0, 2),
    UM_CANIBAL_UM_MISSIONARIO: new Acao(1, 1)
};
