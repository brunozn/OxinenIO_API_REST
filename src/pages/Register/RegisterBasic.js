import React, { useState} from 'react';
import api from '../../services/api';

import './style.css';

export default function RegisterBasic({ history }) {
  const [FullName, setFullName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [TypeUser, setTypeUser] = useState('');
  

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('FullName', FullName);
    data.append('email', email);
    data.append('password', password);
    data.append('TypeUser', TypeUser);


    await api.post('/spots', data);

    history.push('/dashboard');
  }

  return (
      <div className="content-register">
        <form onSubmit={handleSubmit}>


          <label htmlFor="FullName">Nome Completo</label>
          <input
            id="FullName"
            placeholder="Digite seu nome completo "
            value={FullName}
            onChange={event => setFullName(event.target.value)}
          />

          <label htmlFor="email">E-mail*</label>
          <input
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={event => setemail(event.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

        <label htmlFor="Telefone">Tipo de Usuário</label>
          <input
            id="TypeUser"
            placeholder="Contratante ou prestador?"
            value={TypeUser}
            onChange={event => setTypeUser(event.target.value)}
          />
          { /* <button type="submit" className="btn">Cadastrar</button>  */} 
         
        </form>
      </div>
  )
}