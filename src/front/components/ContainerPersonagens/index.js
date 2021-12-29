/**
 * Author: Luan da Silva Rodrigues
 *         Leonardo Coelho de Sousa Pinheiro
 * 
 * Matéria: Inteligência Artifial
 * Professora: Lianna Duarte
 */

import './style.css';


function ContainerPersonagem({ personagens }) {
    return <div className="container-personagens">
        {personagens.map(it => it)}
    </div>
};


export default ContainerPersonagem;
