import React, { useState, useMemo } from 'react';
//import api from '../../services/api';

import './style.css';

import camera from '../../assets/camera.svg';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    //const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);
/*
    await api.post('/spots', data, {
      headers: { user_id }
    });
*/
    history.push('/dashboard');
  }

  return (
    <div className="container">
      <h2 className="service"> Cadastrando Serviço</h2>
      <div className="content">

        <form onSubmit={handleSubmit}>
          <label>Clique na camera para adicionar foto do serviço *</label>
          <label
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : ''}
          >
            <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
            <img src={camera} alt="Select img" />
          </label>

          <label htmlFor="address">Endereço *</label>
          <input
            id="address"
            placeholder="Digite o endereço do serviço "
            value={address}
            onChange={event => setAddress(event.target.value)}
          />

          <label htmlFor="company">Serviço *</label>
          <input
            id="company"
            placeholder="Qual o serviço? Descreva "
            value={company}
            onChange={event => setCompany(event.target.value)}
          />

          <label htmlFor="techs">Precisa-se de: * <span>(separadas por vírgula)</span></label>
          <input
            id="techs"
            placeholder="Quais profissionais necessita?"
            value={techs}
            onChange={event => setTechs(event.target.value)}
          />

          <label htmlFor="price">VALOR * <span>(em branco para combinar)</span></label>
          <input
            id="price"
            placeholder="Valor pago por dia"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />

          <button type="submit" className="btn">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}