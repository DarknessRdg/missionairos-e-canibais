import acoes from "../../src/constants/acoes";
import Margem from "../../src/jogo/margem";

describe('Construtor', () => {
    it('deve inicializar as variaveis com os valores fornecidos', () => {
        const margem = new Margem({ canibais: 2, missionarios: 3 });

        expect(margem.canibais).toBe(2);
        expect(margem.missionarios).toBe(3);
    });
});


describe('Pode executar ação: DOIS_CANIBAIS', () => {
    it('pode executar quando existem mais missionarios', () => {
        const margem = new Margem({ canibais: 2, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it('pode executar quando a quantidade de missionairos igual a de canibais', () => {
        const margem = new Margem({ canibais: 3, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it('pode executar quando o total de canibais - 2 for menor que a quantidade de missionarios', () => {
        const margem = new Margem({ canibais: 3, missionarios: 4 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it('pode executar quando o total de canibais - 2 for igual a missionarios', () => {
        const margem = new Margem({ canibais: 3, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it ('não pode executar quando a quantidade de canibais - 2 for maior que a quantidade de missionários', () => {
        const margem = new Margem({ canibais: 6, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(false);
    })

    it ('não pode executar quando so existe 1 canibal na magem', () => {
        const margem = new Margem({ canibais: 1, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(false);
    })
});


describe('Pode executar ação: DOIS_MISSIONARIOS', () => {
    it('pode executar quando sobrar mais missionarios após remover 2', () => {
        const margem = new Margem({ canibais: 0, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(true);
    })

    it('pode executar quando sobrar a mesma quantidade de canibais após remover 2', () => {
        const margem = new Margem({ canibais: 1, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(true);
    })

    it ('não pode executar quando sobrar menos missionários do que canibais', () => {
        const margem = new Margem({ canibais: 1, missionarios: 2 });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(false);
    })

    it ('não pode executar tiver 1 missionário', () => {
        const margem = new Margem({ canibais: 0, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(false);
    })
});
