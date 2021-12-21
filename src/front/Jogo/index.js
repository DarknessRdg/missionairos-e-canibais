import { useState } from "react";
import posicao from "../../constants/posicao";
import Canoa from "../components/Canoa";
import FINALIZADOR from "../components/finalizador";
import MargemDireita from "../components/MargemDireita";
import MargemEsquerda from "../components/MargemEsquerda";
import "./style.css";


function Jogo({ passos_executados }) {
    let passo_id = 0;

    const [passo, set_passo] = useState(passos_executados[passo_id]);
    const [executando_animacao, set_executando_animaca] = useState(FINALIZADOR.MARGEM_DIREITA);

    function ao_finalizar_animacao() {
        if (executando_animacao === FINALIZADOR.MARGEM_DIREITA) {
            set_executando_animaca(FINALIZADOR.CANOA);
        } else if (executando_animacao === FINALIZADOR.CANOA) {
            set_executando_animaca(FINALIZADOR.MARGEM_ESQUERDA);
        }
            // margem esquerda
            // se esquerda  
            //     mudar lado da canoa
            //     mudar quem esta executando animacao
        
    }

    function proximo_passo() {
        passo_id++;
        return passos_executados[passo_id];
    }

    return <div className="jogo">
        <div className="wrapper">
            <MargemEsquerda 
                acao={passo.acao_executada}
                ao_finalizar={ao_finalizar_animacao} 
                em_execucao={executando_animacao}
                estado_atual={passo.estado_da_margem_destino} />

            <Canoa 
                acao={passo.acao_executada} 
                em_execucao={executando_animacao}
                ao_finalizar={ao_finalizar_animacao}
                esta_voltando={passo.canoa_esta_voltando} />

            <MargemDireita 
                acao={passo.acao_executada}
                ao_finalizar={ao_finalizar_animacao} 
                em_execucao={executando_animacao}
                estado_atual={passo.estado_da_margem_inicial} />
        </div>
    </div>
};

export default Jogo;
