import { useState } from "react";
import posicao from "../../constants/posicao";
import Canoa from "../components/Canoa";
import MargemDireita from "../components/MargemDireita";
import MargemEsquerda from "../components/MargemEsquerda";
import "./style.css";


function Jogo({ passos_executados }) {
    let passo_id = 0;

    const [passo, set_passo] = useState(passos_executados[passo_id]);
    const [lado, set_lado] = useState(posicao.DIREITA);
    const [mover_canoa, set_mover_canoa] = useState(false);

    function mudar_de_lado() {
        if (lado === posicao.ESQUERDA) {
            set_passo(proximo_passo());
        }

        set_lado(novo_lado());
    }

    function novo_lado() {
        if (lado === posicao.DIREITA) {
            return posicao.ESQUERDA;
        }
        return posicao.DIREITA;
    }

    function proximo_passo() {
        passo_id++;
        return passos_executados[passo_id];
    }

    return <div className="jogo">
        <div className="wrapper">
            <MargemEsquerda 
                acao={passo.acao_executada}
                ao_finalizar={mudar_de_lado} 
                lado_atual={lado} />

            <Canoa 
                acao={passo.acao_executada} 
                posicao_ataual={lado} 
                ao_finalizar={mudar_de_lado} />

            <MargemDireita 
                acao={passo.acao_executada}
                ao_finalizar={mudar_de_lado} 
                lado_atual={lado} 
                mover_canoa={mover_canoa}
                estado_atual={passo.estado_da_margem_inicial} />
        </div>
    </div>
};

export default Jogo;
