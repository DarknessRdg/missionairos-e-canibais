import './style.css';


function ContainerPersonagem({ personagens }) {
    return <div className="container-personagens">
        {personagens.map(it => it)}
    </div>
};


export default ContainerPersonagem;
