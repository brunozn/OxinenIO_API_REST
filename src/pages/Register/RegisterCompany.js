import React, { useState } from 'react';
//import api from '../../services/api';

import './style.css';


export default function RegisterCompany({ history }) {
  const [CNPJ, setCNPJ] = useState('');
  const [EmailProfessional, setEmailProfessional] = useState('');
  const [AddressBusiness, setAddressBusiness] = useState('');
  const [Telephone, setTelephone] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('CNPJ', CNPJ);
    data.append('EmailProfessional', EmailProfessional);
    data.append('AddressBusiness', AddressBusiness);
    data.append('Telephone', Telephone);


    //await api.post('/spots', data);
    // Aqui será chamado o axios? não, pois os dados vão para a outra parte

    history.push('/dashboard');
  }

  return (
      <div className="content-register">
        <form onSubmit={handleSubmit}>
          <label htmlFor="CNPJ">CNPJ</label>
          <input
            id="CNPJ"
            placeholder="Digite CPNJ, caso tenha "
            value={CNPJ}
            onChange={event => setCNPJ(event.target.value)}
          />

          <label htmlFor="EmailProfessional">E-mail da empresa</label>
          <input
            id="EmailProfessional"
            placeholder="Digite e-mail de contato da empresa"
            value={EmailProfessional}
            onChange={event => setEmailProfessional(event.target.value)}
          />

          <label htmlFor="AddressBusiness">Endereço</label>
          <input
            id="AddressBusiness"
            placeholder="Digite Endereço da empresa"
            value={AddressBusiness}
            onChange={event => setAddressBusiness(event.target.value)}
          />

        <label htmlFor="Telefone">Telefone</label>
          <input
            id="Telefone"
            placeholder="Digite um telefone para contato"
            value={Telephone}
            onChange={event => setTelephone(event.target.value)}
          />

        </form>
      </div>
  )
}