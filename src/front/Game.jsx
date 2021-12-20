import React, { Component } from "react";
import Simulador from "../simulador/index";
import "./Game.css";

import lugares from "./Lugares";
import canibal from "../assets/canibal.jpg";
import missionario from "../assets/missionario.jpg";
import canoa from "../assets/canoa.jpg";
import rio from '../assets/river.jpg'

export default class Game extends Component {
  state = {
    comecarJogo: false,
    canoaNoInicio: true,
    lado: 0,
    lugar: 0,
    sendoLevados: [],
    movendo: false,
    lugares,
  };

  comecarJogo() {
    this.setState({ comecarJogo: true });
    this.carregarMovimentos();
  }

  carregarElementos() {
    return (
      <div>
        <img className="river" src={rio} alt="rio"></img>
        <img className="raft" src={canoa} alt="canoa"></img>
        <img
          id="1"
          class="character canibal canibal-direita-1"
          lado="direita"
          src={canibal}
          alt="canibal"
        ></img>
        <img
          id="2"
          class="character canibal canibal-direita-2"
          lado="direita"
          src={canibal}
          alt="canibal"
        ></img>
        <img
          id="3"
          class="character canibal canibal-direita-3"
          lado="direita"
          src={canibal}
          alt="canibal"
        ></img>
        <img
          id="4"
          class="character missionario missionario-direita-1"
          lado="direita"
          src={missionario}
          alt="missionario"
        ></img>
        <img
          id="5"
          class="character missionario missionario-direita-2"
          lado="direita"
          src={missionario}
          alt="missionario"
        ></img>
        <img
          id="6"
          class="character missionario missionario-direita-3"
          lado="direita"
          src={missionario}
          alt="missionario"
        ></img>
      </div>
    );
  }

  carregarMovimentos() {
    let simulador = new Simulador();
    let movimentos = simulador.encontrar_passos();
    console.log(movimentos);

    movimentos.forEach((movimento) => {
      this.moverElementos(
        movimento.acao_executada.qnt_canibal,
        movimento.acao_executada.qnt_missioanario
      );
    });
  }

  trocarLugar(personagem) {
    if(this.state.lado === 0) {
      console.log(personagem.alt)
      console.log(personagem.id)
    } else {
      console.log(personagem.alt)
      console.log(personagem.id)
    }
  }

  moverCanoa(ids) {
    const canoa = document.querySelector(".raft");

    if (this.state.lado === 0) {
      canoa.style.right = `${parseFloat(window.getComputedStyle(canoa).right) + 1}px`;
      ids.map((id) => {
        const elemento = document.getElementById(`${id}`);
        elemento.style.right = `${parseFloat(elemento.style.right) + 1}px`;
      });

      if (
        parseFloat(window.getComputedStyle(canoa).right) ===
        this.state.lugares.canoaEsquerda[1]
      ) {
        this.state.movendo = false;
      }
    } else {
      canoa.style.right = `${parseFloat(window.getComputedStyle(canoa).right) - 1}px`;
      ids.map((id) => {
        const elemento = document.getElementById(`${id}`);
        elemento.style.right = `${parseFloat(elemento.style.right) - 1}px`;
      });

      if (
        parseFloat(window.getComputedStyle(canoa).right) ===
        this.state.lugares.canoaDireita[1]
      ) {
        this.state.movendo = false;
      }
    }
  }

  moverElementos(qnt_canibal, qnt_missionario) {
    let lado;
    let saida;
    let destino;

    if (this.state.lado === 0) {
      lado = "direita";
      saida = this.state.lugares.lugaresPersonagensADireita;
      destino = this.state.lugares.lugaresPersonagensAEsquerda;
    } else {
      lado = "esquerda";
      saida = this.state.lugares.lugaresPersonagensAEsquerda;
      destino = this.state.lugares.lugaresPersonagensADireita;
    }

    for (let i = 0; i < qnt_canibal; i++) {
      // const canibal = document.querySelector(`[lado="${lado}"].canibal`);
      // canibal.setAttribute("lado", this.state.lado === 0 ? "esquerda" : "direita");
      // this.state.sendoLevados.push(canibal.id)
      // this.trocarLugar(canibal, saida);
      // console.log(canibal)

      // if (this.state.lado === 0) {
      //   canibal.style.bottom = `${
      //     this.state.lugares.lugarNaCanoaDireita[this.state.lugar][0]
      //   }rem`;
      //   canibal.style.right = `${
      //     this.state.lugares.lugarNaCanoaDireita[this.state.lugar][1]
      //   }rem`;
      // } else {
      //   canibal.style.bottom = `${
      //     this.state.lugares.lugarNaCanoaEsquerda[this.state.lugar][0]
      //   }rem`;
      //   canibal.style.right = `${
      //     this.state.lugares.lugarNaCanoaEsquerda[this.state.lugar][1]
      //   }rem`;
      // }
      // this.state.lugar = 1;
    }

    for (let i = 0; i < qnt_missionario; i++) {
      const missionario = document.querySelector(`[lado="${lado}"]`);
      missionario.setAttribute("lado", this.state.lado === 0 ? "esquerda" : "direita");
      this.state.sendoLevados.push(missionario.id)
      this.trocarLugar(missionario, saida);
      console.log(missionario)

      if (this.state.lado === 0) {
        missionario.style.bottom = `${
          this.state.lugares.lugarNaCanoaDireita[this.state.lugar][0]
        }rem`;
        missionario.style.right = `${
          this.state.lugares.lugarNaCanoaDireita[this.state.lugar][1]
        }rem`;
      } else {
        missionario.style.bottom = `${
          this.state.lugares.lugarNaCanoaEsquerda[this.state.lugar][0]
        }rem`;
        missionario.style.right = `${
          this.state.lugares.lugarNaCanoaEsquerda[this.state.lugar][1]
        }rem`;
      }
      this.state.lugar = 1;
    }

    this.state.movendo = true;
    while(this.state.movendo === true){
      setTimeout(
        this.moverCanoa(this.state.sendoLevados), 1000);
    }

    console.log(this.state.lado)
    this.state.lado = this.state.lado === 0 ? 1 : 0;
    console.log(this.state.lado)
    this.state.lugar = 0;
    
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")

    this.state.sendoLevados.map(elementoId => {
      const elemento = document.getElementById(`${elementoId}`)
      console.log(elemento)
      this.trocarLugar(elemento)
    })

    this.state.sendoLevados.pop()
    this.state.sendoLevados.pop()
    this.state.canoaNoInicio = !this.state.canoaNoInicio
    console.log("PASSOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU")
  }

  render() {
    return (
      <div>
        <div
          className="initialPage"
          style={{ display: this.state.comecarJogo ? "none" : "flex" }}
        >
          <button className="button" onClick={() => this.comecarJogo()}>
            Começar
          </button>
        </div>
        <div
          className="content"
          style={{ display: this.state.comecarJogo ? "flex" : "none" }}
        >
          {this.carregarElementos()}
        </div>
      </div>
    );
  }
}
