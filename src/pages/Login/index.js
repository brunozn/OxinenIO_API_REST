import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({history}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
    console.log(email);
    console.log(senha);
    const response = await api.post('/sessions', {email, senha} )
    console.log(response)
    /*
    const { _id } = response.data;
    localStorage.setItem('user', _id);
    */
   history.push('/dashboard');
  }

  return (
    <>
      <p> Ofereça <strong>vagas de empregos</strong> para pessoas que estão em busca de uma oportunidade</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label>
        <input type="email"
          id="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <label htmlFor="email">Senha </label>
        <input type="password"
          id="email"
          placeholder="Sua Senha"
          value={senha}
          onChange={event => setSenha(event.target.value)}
        />
        <button className="btn" type="submitW">Entrar</button>
      </form>
    </>
  )
}