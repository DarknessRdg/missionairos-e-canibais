import { useState } from 'react';
import Simulador from '../../simulador';
import Jogo from '../Jogo';
import './home.css';


function Home() {
    const [passos_executados, set_passo_executados] = useState([]);
    const [tem_passos, set_tem_passos] = useState(false);

    function simular_jogo() {
        const simulador = new Simulador();
        const passos = simulador.encontrar_passos();

        let id = 1
        passos.forEach(p => {
            p.id = id;
            id += 10; 
        })
        
        
        set_passo_executados([...passos]);
        set_tem_passos(true);
        console.log(passos);
    }

    return (
        <>{
            tem_passos ? 
            <Jogo passos_executados={passos_executados} /> :
            <div className="home">
                <button onClick={simular_jogo}>Começar</button> 
            </div>
        }</>    
    )
};


export default Home;