import React, { useState} from 'react';
//import api from '../../services/api';
import axios from 'axios';

import './style.css';
const api_url="https://oxigenioapi.herokuapp.com";

export default function RegisterBasic({ history }) {
  
  const [FullName, setFullName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [TypeUser, setTypeUser] = useState('');
  

  async function handleSubmit(event) {
    event.preventDefault();

    var data = new FormData();

    data.append('FullName', FullName);
    data.append('email', email);
    data.append('password', password);
    data.append('TypeUser', TypeUser);

    console.log("chamando o axios",data);
    var values ={
      FullName,
        email,
        TypeUser,
        password
  
    }
    console.log(values);
   
    try{
      const user = await axios.post(`${api_url}/users`,values);
      console.log("novo user",user);
    }catch(erro){
      console.log(erro);

    }
  

    history.push('/users');
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
          <button type="submit" className="btn">Cadastrar</button>
         
        </form>
      </div>
  )
}