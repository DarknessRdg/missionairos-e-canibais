import acoes from '../constants/acoes';


class Margem {
    constructor({ canibais, missionarios }) {
        this.canibais = canibais;
        this.missionarios = missionarios;
    }

    pode_executar_acao(acao) {
        let canibais_restantes = this.canibais;
        let missioanrios_restantes = this.missionarios;

        switch (acao) {
            case acoes.UM_CANIBAL:
                canibais_restantes--;
                break;
            case acoes.UM_MISSIONARIO:
                missioanrios_restantes--;
                break;
            case acoes.UM_CANIBAL_UM_MISSIONARIO:
                missioanrios_restantes --;
                canibais_restantes --;
                break;
            case acoes.DOIS_CANIBAIS:
                canibais_restantes -= 2;
                break;
            case acoes.DOIS_MISSIONARIOS:
                missioanrios_restantes -= 2;
                break;
            default:
                missioanrios_restantes = -1;
                canibais_restantes = -1;
                break;
        };

        const missionarios_sobrevivem = missioanrios_restantes >= canibais_restantes;
        const quantidade_negativa = missioanrios_restantes < 0 || canibais_restantes < 0;

        return missionarios_sobrevivem && !quantidade_negativa;
    }
};

export default Margem;
