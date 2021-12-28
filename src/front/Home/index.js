import { useState } from 'react';
import Simulador from '../../simulador';
import Jogo from '../Jogo';
import './home.css';
import EstadoDoJogo from './EstadoDoJogo';


/**
 * Converte os passos executado do jogo para estados do jogo
 * que serão utilizados em cada momento da animação
 * 
 * @param {Array<PassoExecutado>} passos 
 * @returns {Array<EstadoDoJogo>}
 */
function parse(passos) {
    const estados_do_jogo = [
        EstadoDoJogo.pre_acao(passos[0])
    ];

    passos.forEach(it => {
        estados_do_jogo.push(EstadoDoJogo.durante_acao(it));
        estados_do_jogo.push(EstadoDoJogo.pos_acao(it));
    });

    return estados_do_jogo;
}

function Home() {
    const [estados_do_jogo, set_passo_executados] = useState([]);
    const [tem_passos, set_tem_passos] = useState(false);

    function simular_jogo() {
        const simulador = new Simulador();
        const passos = simulador.encontrar_passos();
        set_passo_executados(parse(passos));

        set_tem_passos(true);
    }

    return (
        <>{
            tem_passos ? 
            <Jogo estados_do_jogo={estados_do_jogo} /> :
            <div className="home">
                <button onClick={simular_jogo}>Começar</button> 
            </div>
        }</>    
    )
};


export default Home;