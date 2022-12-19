import { useState, useEffect } from "react";
import React from 'react';
// import '../styles/semana11.css';
import './JogoDaVelha.css'

export default function JogoDaVelha() {

    const boardVazio = Array(9).fill("")
    const [board, setBoard] =  useState(boardVazio)
    const [jogador, setJogador] = useState("O")
    const [vencedor, setVencedor] = useState('')

    const clicaCelula = (index) => {
        if ( vencedor ){
            console.log("Game Finalizado!!")
            return null;
        }

        if (board[index] !== "" ){
            console.log("Celula ocupada")
            return null;
        }
        setBoard(board.map(
             (item,indexItem) => 
                indexItem === index ? jogador : item)
        )
        setJogador(jogador === "X" ? "O" : "X")
    }

    const verificaGanhador = () => {
        const possibilidades = [
            [ board[0], board[1], board[2] ],
            [ board[3], board[4], board[5] ],
            [ board[6], board[7], board[8] ],
            [ board[0], board[3], board[6] ],
            [ board[1], board[4], board[7] ],
            [ board[2], board[5], board[8] ],
            [ board[0], board[4], board[8] ],
            [ board[2], board[4], board[6] ],
        ]

        possibilidades.forEach( celula =>  {
            if (celula.every( celula => celula === "O")) 
                console.log("Jogador O Venceu!!");

            if (celula.every( celula => celula === "X")) 
                console.log("Jogador X venceu!!");
        })
    }

    useEffect(verificaGanhador, [board])



    return (
        <div className="jogoDaVelha"> 
            <h1 className="title">Jogo da Velha</h1>
            <div className={`board ${vencedor ? "finalDoJogo" : ""}`}>
                {board.map( (elemento,index) => (
                    <div 
                        key={index}
                        className={`cell ${elemento}`}
                        onClick={ () => clicaCelula(index) }
                    >
                        {elemento}                            
                    </div>
                ))}
                {/* <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div>
                <div className="cell">.</div> */}
            </div>
            

        </div>
    )    

}