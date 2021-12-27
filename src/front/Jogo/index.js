import { useState } from "react";
import posicao from "../../constants/posicao";
import Canoa from "../components/Canoa";
import FINALIZADOR from "../components/finalizador";
import MargemDireita from "../components/MargemDireita";
import MargemEsquerda from "../components/MargemEsquerda";
import "./style.css";


function Jogo({ passos_executados }) {
    const [passo_id, set_passo_id] = useState(0);

    const [executando_animacao, set_executando_animacao] = useState(FINALIZADOR.MARGEM_DIREITA);

    function ao_finalizar_animacao() {
        if (executando_animacao === FINALIZADOR.MARGEM_DIREITA) {
            set_executando_animacao(FINALIZADOR.CANOA);
        } else if (executando_animacao === FINALIZADOR.CANOA) {
            if (get_passo_atual().esta_voltando) {
                set_executando_animacao(FINALIZADOR.MARGEM_DIREITA);
            } else {
                set_executando_animacao(FINALIZADOR.MARGEM_ESQUERDA);
            }
        } else {
            set_executando_animacao(FINALIZADOR.CANOA);
            set_passo_id(passo_id + 1);
            console.log('proximo passo', passo_id)
        }
    }

    function get_estado_anterior() {
        if (passo_id === 0) {
            return passos_executados[0];
        }

        return passos_executados[passo_id-1];
    }

    function get_passo_atual() {
        return passos_executados[passo_id];
    }

    return <div className="jogo">
        <div className="wrapper">
            <MargemEsquerda
                acao={get_passo_atual().acao_executada}
                ao_finalizar={ao_finalizar_animacao} 
                em_execucao={executando_animacao}
                estado_atual={get_passo_atual().estado_da_margem_destino}
                estado_anterior={get_estado_anterior().estado_da_margem_destino} />

            <Canoa
                acao={get_passo_atual().acao_executada} 
                em_execucao={executando_animacao}
                ao_finalizar={ao_finalizar_animacao}
                esta_voltando={get_passo_atual().canoa_esta_voltando} />

            <MargemDireita
                acao={get_passo_atual().acao_executada}
                ao_finalizar={ao_finalizar_animacao} 
                em_execucao={executando_animacao}
                estado_atual={get_passo_atual().estado_da_margem_inicial}
                estado_anterior={get_estado_anterior().estado_da_margem_inicial} />
        </div>
    </div>
};

export default Jogo;
