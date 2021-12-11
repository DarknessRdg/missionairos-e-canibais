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

    it('pode executar quando a quantidade for igual a de de missionairos', () => {
        const margem = new Margem({ canibais: 3, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it('pode executar quando o total restante for menor que a quantidade de missionarios', () => {
        const margem = new Margem({ canibais: 3, missionarios: 4 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it('pode executar quando o total restante for igual ao total de missionarios', () => {
        const margem = new Margem({ canibais: 3, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it ('não pode executar quando o total restante for maior que ao total de missionários', () => {
        const margem = new Margem({ canibais: 6, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(false);
    })

    it ('não pode executar quando so existe 1 canibal na magem', () => {
        const margem = new Margem({ canibais: 1, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(false);
    })

    it ('não pode executar quando não canibal na magem', () => {
        const margem = new Margem({ canibais: 0, missionarios: 3 });

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

    it ('não pode executar so existe 1 missionário na margem', () => {
        const margem = new Margem({ canibais: 0, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(false);
    })

    it ('não pode não missionário na margem', () => {
        const margem = new Margem({ canibais: 0, missionarios: 0 });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(false);
    })
});

describe('Pode executar ação: UM_CANIBAL', () => {
    it('pode executar quando o total restante for menor do que total de missionários', () => { 
        const margem = new Margem({ canibais: 1, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL)).toBe(true);
    })

    it('pode executar quando o total restante for igual ao total de missionários', () => { 
        const margem = new Margem({ canibais: 2, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL)).toBe(true);
    })

    it('não pode executar quando o total restante for maior que do total de missionários', () => { 
        const margem = new Margem({ canibais: 3, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL)).toBe(false);
    })

    it('não pode executar quando não tiver canibal', () => { 
        const margem = new Margem({ canibais: 0, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL)).toBe(false);
    })
})

describe('Pode executar ação: UM_MISSIONARIO', () => {
    it('pode executar quando o total restante for maior do que total de canibais', () => { 
        const margem = new Margem({ canibais: 1, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.UM_MISSIONARIO)).toBe(true);
    })

    it('pode executar quando o total restante for igual ao total de canibais', () => { 
        const margem = new Margem({ canibais: 1, missionarios: 2 });

        expect(margem.pode_executar_acao(acoes.UM_MISSIONARIO)).toBe(true);
    })

    it('não pode executar quando o total restante for menor do que total de canibais', () => { 
        const margem = new Margem({ canibais: 1, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.UM_MISSIONARIO)).toBe(false);
    })

    it('não pode executar não existe missionário', () => {
        const margem = new Margem({ canibais: 2 , missionarios: 0 });

        expect(margem.pode_executar_acao(acoes.UM_MISSIONARIO)).toBe(false);
    })
})

describe('Pode executar ação: UM_CANIBAL_UM_MISSIONARIO', () => {
    it('pode executar quando o total de missionário igual ao total de canibal', () => { 
        const margem = new Margem({ canibais: 2, missionarios: 2 });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(true);
    })

    it('pode executar quando o total de missionário maior do que canibal', () => { 
        const margem = new Margem({ canibais: 2, missionarios: 3 });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(true);
    })

    it('não pode executar quando o total de missionário menor do que canibal', () => { 
        const margem = new Margem({ canibais: 2, missionarios: 1 });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(false);
    })

    it('não pode executar quando não tiver missionário', () => { 
        const margem = new Margem({ canibais: 2, missionarios: 0 });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(false);
    })

    it('não pode executar quando não tiver canibal', () => { 
        const margem = new Margem({ canibais: 0, missionarios: 2 });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(false);
    })
})

describe('Está vazia', () => {
    it ('deve estar vazia se não houver canibal e missionario', () => {
        const margem = new Margem({ canibais: 0, missionarios: 0 });

        expect(margem.esta_vazia()).toBe(true);
    })

    it ('não estar vazia se não houver pelo menos 1 canibal', () => {
        const margem = new Margem({ canibais: 1, missionarios: 0 });

        expect(margem.esta_vazia()).toBe(false);
    })

    it ('não estar vazia se não houver pelo menos 1 missionarios', () => {
        const margem = new Margem({ canibais: 0, missionarios: 1 });

        expect(margem.esta_vazia()).toBe(false);
    })
})
    