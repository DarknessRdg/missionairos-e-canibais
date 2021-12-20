import { useState } from "react";
import Canoa from "../components/Canoa";
import MargemDireita from "../components/MargemDireita";
import MargemEsquerda from "../components/MargemEsquerda";
import "./style.css";

const LADO = {
    DIREITA: 1,
    ESQUERDA: 2
};


function Jogo({ passos_executados }) {
    let passo_id = 0;

    const [passo, set_passo] = useState(passos_executados[passo_id]);
    const [lado, set_lado] = useState(LADO.DIREITA);

    return <div className="jogo">
        <div className="wrapper">
            <MargemEsquerda />
            <Canoa />
            <MargemDireita />
        </div>
    </div>
};

export default Jogo;
