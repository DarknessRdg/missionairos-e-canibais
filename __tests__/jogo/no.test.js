import acoes from "../../src/constants/acoes";
import Canoa from "../../src/jogo/Canoa";
import No from "../../src/jogo/No";
import Margem from "../../src/jogo/Margem";

describe('Com canoa', () => {
    it('deve retorna a margem que possui canoa', () => {
        const com_canoa = new Margem({ 
            canibais: 3, 
            missionarios: 3, 
            canoa: new Canoa()
        });

        const sem_canoa = new Margem({ 
            canibais: 0, 
            missionarios: 0
        });

        const no = new No({ 
            acao: acoes.DOIS_CANIBAIS, 
            margem_a: sem_canoa, 
            margem_b: com_canoa 
        });

        const margem_com_canoa_retornada = no.com_canoa();

        expect(margem_com_canoa_retornada.canoa !== null).toBe(true);
        expect(margem_com_canoa_retornada.canibais).toBe(com_canoa.canibais);
        expect(margem_com_canoa_retornada.missionarios).toBe(com_canoa.missionarios);
    })
})

describe('Margem de inicio', () => {
    it('deve retorna a margem que possui o status `de_inicio` verdadeiro', () => {
        const com_canoa = new Margem({ 
            canibais: 3, 
            missionarios: 3, 
            canoa: new Canoa(),
            de_inicio: true
        });

        const sem_canoa = new Margem({ 
            canibais: 0, 
            missionarios: 0
        });

        const no = new No({ 
            acao: acoes.DOIS_CANIBAIS, 
            margem_a: sem_canoa, 
            margem_b: com_canoa 
        });

        const marge_de_inicio = no.margem_de_inicio();

        expect(marge_de_inicio.de_inicio).toBe(true);
        expect(marge_de_inicio.canibais).toBe(marge_de_inicio.canibais);
        expect(marge_de_inicio.missionarios).toBe(marge_de_inicio.missionarios);
        expect(marge_de_inicio.canoa !== null).toBe(true);
    })
})



describe('Próximas possievis ações do nó', () => {
    it('deve retornar uma lista de nós com as possíveis ações', () => {
        const com_canoa = new Margem({ 
            canibais: 3, 
            missionarios: 3, 
            canoa: new Canoa()
        });

        const sem_canoa = new Margem({ 
            canibais: 0, 
            missionarios: 0
        });

        const no = new No({
            acao: acoes.DOIS_CANIBAIS, 
            margem_a: sem_canoa, 
            margem_b: com_canoa 
        });
    
        const acoes_possiveis = no.possiveis_acoes();

        expect(acoes_possiveis).toContain(acoes.DOIS_CANIBAIS);
        expect(acoes_possiveis).toContain(acoes.UM_CANIBAL);
        expect(acoes_possiveis).toContain(acoes.UM_CANIBAL_UM_MISSIONARIO);
    })

    it('deve remover as acoes não suportadas pela margem sem canoa', () => {
        const com_canoa = new Margem({ 
            canibais: 1, 
            missionarios: 1, 
            canoa: new Canoa()
        });

        const sem_canoa = new Margem({ 
            canibais: 2, 
            missionarios: 2
        });

        const no = new No({ 
            acao: acoes.DOIS_CANIBAIS, 
            margem_a: sem_canoa, 
            margem_b: com_canoa 
        });
    
        const acoes_possiveis = no.possiveis_acoes();

        expect(acoes_possiveis).not.toContain(acoes.UM_CANIBAL);
    })
})
