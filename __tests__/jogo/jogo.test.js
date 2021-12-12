import Jogo from "../../src/jogo"

it ('Entry point jogo', () => {
    const jogo = new Jogo();

    console.log(jogo.encontrar_acoes());
})
