import acoes from "../../src/constants/acoes";
import atores from "../../src/constants/atores";
import Margem from "../../src/jogo/margem";
import Canoa from "../../src/jogo/Canoa";

describe('Construtor', () => {
    it('deve inicializar as variaveis com os valores fornecidos', () => {
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 3 
        });

        expect(margem.canibais).toBe(2);
        expect(margem.missionarios).toBe(3);
    });
});


describe('Pode executar ação: DOIS_CANIBAIS', () => {
    it('pode executar quando existem mais missionarios', () => {
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 3, 
            canoa: new Canoa()
        });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it('pode executar quando a quantidade for igual a de de missionairos', () => {
        const margem = new Margem({ 
            canibais: 3, 
            missionarios: 3, 
            canoa: new Canoa()
        });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it('pode executar quando o total restante for menor que a quantidade de missionarios', () => {
        const margem = new Margem({ 
            canibais: 3, 
            missionarios: 4, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it('pode executar quando o total restante for igual ao total de missionarios', () => {
        const margem = new Margem({ 
            canibais: 3, 
            missionarios: 1, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(true);
    })

    it ('não pode executar quando o total restante for maior que ao total de missionários', () => {
        const margem = new Margem({
             canibais: 6, 
             missionarios: 3, 
             canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(false);
    })

    it ('não pode executar quando so existe 1 canibal na magem', () => {
        const margem = new Margem({ 
            canibais: 1, 
            missionarios: 3, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(false);
    })

    it ('não pode executar quando não canibal na magem', () => {
        const margem = new Margem({ 
            canibais: 0, 
            missionarios: 3, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_CANIBAIS)).toBe(false);
    })
});


describe('Pode executar ação: DOIS_MISSIONARIOS', () => {
    it('pode executar quando sobrar mais missionarios após remover 2', () => {
        const margem = new Margem({ 
            canibais: 0, 
            missionarios: 3,
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(true);
    })

    it('pode executar quando sobrar a mesma quantidade de canibais após remover 2', () => {
        const margem = new Margem({ 
            canibais: 1, 
            missionarios: 3, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(true);
    })

    it ('não pode executar quando sobrar menos missionários do que canibais', () => {
        const margem = new Margem({ 
            canibais: 1,
            missionarios: 2, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(false);
    })

    it ('não pode executar so existe 1 missionário na margem', () => {
        const margem = new Margem({ 
            canibais: 0, 
            missionarios: 1, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(false);
    })

    it ('não pode não missionário na margem', () => {
        const margem = new Margem({ 
            canibais: 0, 
            missionarios: 0, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.DOIS_MISSIONARIOS)).toBe(false);
    })
});

describe('Pode executar ação: UM_CANIBAL', () => {
    it('pode executar quando o total restante for menor do que total de missionários', () => { 
        const margem = new Margem({ 
            canibais: 1, 
            missionarios: 1, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL)).toBe(true);
    })

    it('pode executar quando o total restante for igual ao total de missionários', () => { 
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 1, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL)).toBe(true);
    })

    it('não pode executar quando o total restante for maior que do total de missionários', () => { 
        const margem = new Margem({ 
            canibais: 3,
            missionarios: 1, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL)).toBe(false);
    })

    it('não pode executar quando não tiver canibal', () => { 
        const margem = new Margem({ 
            canibais: 0, 
            missionarios: 1, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL)).toBe(false);
    })
})

describe('Pode executar ação: UM_MISSIONARIO', () => {
    it('pode executar quando o total restante for maior do que total de canibais', () => { 
        const margem = new Margem({ 
            canibais: 1, 
            missionarios: 3, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_MISSIONARIO)).toBe(true);
    })

    it('pode executar quando o total restante for igual ao total de canibais', () => { 
        const margem = new Margem({ 
            canibais: 1, 
            missionarios: 2, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_MISSIONARIO)).toBe(true);
    })

    it('não pode executar quando o total restante for menor do que total de canibais', () => { 
        const margem = new Margem({ 
            canibais: 1, 
            missionarios: 1, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_MISSIONARIO)).toBe(false);
    })

    it('não pode executar não existe missionário', () => {
        const margem = new Margem({ 
            canibais: 2 , 
            missionarios: 0, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_MISSIONARIO)).toBe(false);
    })
})

describe('Pode executar ação: UM_CANIBAL_UM_MISSIONARIO', () => {
    it('pode executar quando o total de missionário igual ao total de canibal', () => { 
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 2, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(true);
    })

    it('pode executar quando o total de missionário maior do que canibal', () => { 
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 3, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(true);
    })

    it('não pode executar quando o total de missionário menor do que canibal', () => { 
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 1, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(false);
    })

    it('não pode executar quando não tiver missionário', () => { 
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 0, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(false);
    })

    it('não pode executar quando não tiver canibal', () => { 
        const margem = new Margem({ 
            canibais: 0, 
            missionarios: 2, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO)).toBe(false);
    })
})

describe('Pode executar ação: NAO_EXISTE', () => {
    it('não deve poder executar ação que não existe', () => {
        const margem = new Margem({ 
            canibais: 1, 
            missionarios: 2, 
            canoa: new Canoa() 
        });

        expect(margem.pode_executar_acao('NAO_EXISTE')).toBe(false);
    })
})

describe('Está vazia', () => {
    it ('deve estar vazia se não houver canibal e missionario', () => {
        const margem = new Margem({ 
            canibais: 0, 
            missionarios: 0,
            canoa: new Canoa() 
        });

        expect(margem.esta_vazia()).toBe(true);
    })

    it ('não estar vazia se não houver pelo menos 1 canibal', () => {
        const margem = new Margem({ 
            canibais: 1, 
            missionarios: 0, 
            canoa: new Canoa() 
        });

        expect(margem.esta_vazia()).toBe(false);
    })

    it ('não estar vazia se não houver pelo menos 1 missionarios', () => {
        const margem = new Margem({ 
            canibais: 0, 
            missionarios: 1, 
            canoa: new Canoa() 
        });

        expect(margem.esta_vazia()).toBe(false);
    })
})

describe('Executar ação', () => {
    it ('deve remover missionarios se a margem tiver com a canoa do seu lado', () => {
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 2, 
            canoa: new Canoa()
        });

        margem.executar_acao(acoes.DOIS_CANIBAIS);

        expect(margem.canibais).toBe(0)
    })

    it ('deve salvar a ação executada', () => {
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 2, 
            canoa: new Canoa()
        });

        expect(margem.acao_executada).toBeNull();

        margem.executar_acao(acoes.UM_CANIBAL);

        expect(margem.acao_executada).toBe(acoes.UM_CANIBAL);
    })

    it ('deve adicionar os atores da ação na canoa', () => {
        const margem = new Margem({ 
            canibais: 2, 
            missionarios: 2, 
            canoa: new Canoa()
        });

        margem.executar_acao(acoes.UM_CANIBAL_UM_MISSIONARIO);

        expect(margem.canoa.passageiros)
            .toStrictEqual(acoes.UM_CANIBAL_UM_MISSIONARIO.atores);
    })
})


describe('Clone', () => {
    it('deve retornar uma nova margem com os mesmos atributos preenchidos', () => {
        const original = new Margem({ 
            canibais: 2, 
            missionarios: 3, 
            canoa: new Canoa()
        });
        original.executar_acao(acoes.UM_CANIBAL);

        const clone = original.clone();

        expect(clone.canibais).toBe(original.canibais);
        expect(clone.missionarios).toBe(original.missionarios);
        expect(clone.acao_executada).toBe(acoes.UM_CANIBAL);
    })

    it('deve poder executar acoes sem afetar a margem original', () => {
        const original = new Margem({ 
            canibais: 2, 
            missionarios: 3, 
            canoa: new Canoa()
        });

        const clone = original.clone();
        clone.executar_acao(acoes.UM_CANIBAL);

        expect(clone.acao_executada).toBe(acoes.UM_CANIBAL);
        expect(original.acao_executada).toBeNull();
        expect(clone.canibais != original.canibais).toBe(true);
        expect(clone.missionarios).toBe(original.missionarios);
    })

    it('deve criar um clone da cona', () => {
        const original = new Margem({ 
            canibais: 2, 
            missionarios: 3, 
            canoa: new Canoa()
        });

        const clone = original.clone();

        expect(clone.canoa !== original.canoa).toBe(true);
    })

    it('deve continuar sem canoa, se a original não tiver', () => {
        const original = new Margem({ 
            canibais: 2, 
            missionarios: 3, 
            canoa: null
        });

        const clone = original.clone();

        expect(clone.canoa).toBeNull();
    })
})
