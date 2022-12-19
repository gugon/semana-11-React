import React from 'react';

export default function About(){
    let habilidades = ['HTML', 'JavaScript', 'CSS', 'ReactJS', 'Java/Spring']

    return (
        <>
            <h1>Gustavo Wagner Gonçalves</h1>
            <p> Me chamo gustavo, procuro alguma vaga na área que envolve programação  </p>
            <p> Pelo menos uma chance para mostrar meu potencial e que posso aprender muito ainda</p>

            <h2>Minhas Habilidades</h2>
            <ul>
                {habilidades.map( (e) => <li>{e}</li>)}
            </ul>        
        </>               
    );
}
