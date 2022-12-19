import React, { useState } from 'react';
import ButtonCount from './ButtonCount';

export default function Contador(){
    const [counter, setCounter] = useState(0);
    let sinais = ['+','-']

    function incrementaCounter(counter){
      setCounter(counter + 1)
    }

    function decrementaCounter(counter){
      setCounter(counter - 1)
    }    

    let modificaCounter = [incrementaCounter,decrementaCounter]

    return (
        
        <div className='contador'>
          <h1>Contador</h1>
          <div>                       

              <ButtonCount  modifica={decrementaCounter} valor={counter} sinal={sinais[1]}></ButtonCount>
              <ButtonCount  modifica={incrementaCounter} valor={counter} sinal={sinais[0]}></ButtonCount>
              
          </div>
          <div className='counter'>Counter: {counter}</div>
        </div>
      );
     
}