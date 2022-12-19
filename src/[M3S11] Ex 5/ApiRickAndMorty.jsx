import { useState, useEffect } from "react";
import React from 'react';

export default function ApiRaM() {


    const [url, setUrl] = useState('');
    const [totalPage, setTotalPage] = useState('');
    const [atualPage, setAtualPage] = useState(totalPage - totalPage)
    let [fetchedData, updateFetchedData] = useState([]);
    const [vivos, setVivos] = useState('');
  
    let { info, results } = fetchedData;


    useEffect(() => {
        (async function () {
            let data = await fetch(url).then((res) => res.json());
            setVivos(data.results.filter((e) => (e.status === "Alive")))
            updateFetchedData(data)
            filtraAlive()

        })();
    }, [url]);
   

    function pesquisa() {        
        setUrl("https://rickandmortyapi.com/api/character/?page=2")        
    }

    function filtraAlive(){        
        setVivos(results.filter((e) => (e.status === "Alive")))
        setTotalPage(info.pages)
    }

    // function verifica() {
    //     console.log(info)
    //     console.log(atualPage)        
    // }

    function nextPage() {
        if (info.next == null) {
            alert("Esta é a útima página!")
        } else {
            setAtualPage(atualPage + 1)
            setUrl(info.next)
        }
    }

    function prevPage() {
        if (info.prev == null) {
            alert("Esta é a primeira página!")
        } else {
            setAtualPage(atualPage - 1)
            setUrl(info.prev)
        }
    }


    return (
        <div>

            <h2>Pesquisar por personagens vivos:</h2>
            <div>
                {/* <button onClick={verifica} >Teste</button> */}
                <button onClick={pesquisa} >Pesquisar</button>
            </div>
            <button onClick={() => prevPage()} >Prev</button>
            <button onClick={() => nextPage()} >Next</button>

            <div>
                {vivos && vivos.map((e) => <li>{e.name} : {e.status}</li>)}
                
                {<p>Página: {atualPage}</p>}
            </div>
           
        </div>
    )

}
