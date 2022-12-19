import React, { useState, useEffect } from 'react';

export default function Conversor() {

  const [cep, setCep] = useState('');
  const [form, setForm] = useState({
    cidade: '',
    rua: '',
    estado: ''
  });

  useEffect(() => {
    if (cep.length > 7)
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
      .then((response) => response.json())
      .then((response) => setForm({
        cidade: response.city,
        rua: response.street,
        estado: response.state
      }))
      .catch((error) => console.log(`Não foi possível obter o endereço do CEP informado! Erro:${error}`));

  }, [cep]);

  function searchingData(e) {
    setCep(e.target.value);
  }
  
  function fillingForm({ target }) {
    const {id, value} = target;
    setForm({...form, [id]: value})
  }

  return (
    <div>
      <h1>CEP</h1>
      
      <div className="search-address">
        <label htmlFor="cep">Informe o seu CEP    </label>
        <input
          type="number"
          id="cep"
          placeholder="CEP"
          value={cep}
          onChange={searchingData}
        />
      </div>

      <div className="input-form">
        <div className='labelTitle'>
          <p><label htmlFor="cidade">Cidade</label></p>
          <p><label htmlFor="rua">Rua</label></p>
          <p><label htmlFor="estado">Estado</label></p>           
        </div>

        <div>
          <p><label onChange={fillingForm}>: {form.cidade}</label></p>
          <p><label onChange={fillingForm}>: {form.rua}</label></p>
          <p><label onChange={fillingForm}>: {form.estado}</label></p>           
        </div>
      </div>   
    </div>  
  );

}