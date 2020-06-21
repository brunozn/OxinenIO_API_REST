import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import './style.css';

import camera from '../../assets/camera.svg';

export default function New({ history }) {
  const [file, setFile] = useState(null);
  const [serviceAddress, setServiceAddress] = useState('');
  const [service, setService] = useState('');
  const [neededdService, setNeededdService] = useState('');
  const [money, setMoney] = useState('');
  const [briefDescription, setBriefDescription] = useState('');
  
  const preview = useMemo(() => {
    return file ? URL.createObjectURL(file) : null;
  }, [file])

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const id = localStorage.getItem('user');
    

    data.append('file', file);
    data.append('serviceAddress', serviceAddress);
    data.append('service', service);
    data.append('neededService', neededdService);
    data.append('money',money);
    data.append('briefDescription',briefDescription);
    try{
      const response = await api.post(`/advert/${id}`,data);
      console.log(response);
      if(response){
        history.push('/dashboard');
      }
    }catch(error){
      console.log(error);
    }

    
  }

  return (
    <div className="container tudo">
      <div className="content">

        <form onSubmit={handleSubmit}>
        <h2 className="service"> CADASTRANDO SERVIÇO</h2>
          <br></br>
          <div className="back-color">
          <label className="label1">Clique na camera para adicionar foto do serviço</label>
          <label
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={file ? 'has-thumbnail' : ''}
          >
            <input type="file" onChange={event => setFile(event.target.files[0])} />
            <img src={camera} alt="Select img" />
          </label>
          </div>
          <br></br>
          <label htmlFor="address" className="label1">Endereço </label>
          <input
            id="address"
            className="input-new"
            placeholder="Digite o endereço do serviço "
            value={serviceAddress}
            onChange={event => setServiceAddress(event.target.value)}
          />
          <br></br>
          <label htmlFor="company" className="label1">Serviço </label>
          <input
            id="company"
            className="input-new"
            placeholder="Qual o serviço? Descreva "
            value={service}
            onChange={event => setService(event.target.value)}
          />
          <br></br>
          <label htmlFor="techs" className="label1">Precisa-se de: <span>(separadas por vírgula)</span></label>
          <input
            id="techs"
            className="input-new"
            placeholder="Quais profissionais necessita?"
            value={neededdService}
            onChange={event => setNeededdService(event.target.value)}
          />
          <br></br>
          <div className="flex">
          <label htmlFor="price" className="label1">Valor <span>(em branco para combinar)</span></label>
          <label id="notif">valor em branco equivale á combinar</label>
          </div>
          <input
            id="price"
            className="input-new"
            placeholder="Valor pago por dia"
            value={money}
            onChange={event => setMoney(event.target.value)}
          />
          <br></br>
<label htmlFor="price" className="label1">Descrição </label>
          <textarea
            id="description"
            rows="5"
            placeholder="Descreva o serviço"
            value={briefDescription}
            onChange={event => setBriefDescription(event.target.value)}
          />
          <br></br>
          <button type="submit" className="btn" id="btn-cad">CADASTRAR</button>
        </form>
      </div>
    </div>
  )
}