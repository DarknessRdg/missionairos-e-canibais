import canibal from "../../../assets/canibal.jpg";
import missionario from "../../../assets/missionario.jpg";
import Atores from "../../../constants/atores";
import "./style.css";


function Peronagem({ tipo }) {
    const img_src = get_src(tipo);

    return <img
        className="personagem"
        src={img_src}
        alt={tipo}
    ></img>
};

function get_src(tipo) {
    if (tipo === Atores.CANIBAL)
        return canibal;
    return missionario;
}


export default Peronagem;
