import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import api from '../../services/api';

import logo from '../../assets/logo.png';
//import Menu from '../../components/Menu';

import './style.css';

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        
        const response = await api.post('/login', { email, password });
        
        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
      
            <div className="container">
      <img src={logo} alt="logo" />
      <div className="content">

            <p>
            Anuncie <strong>serviços</strong> e encontre <strong>profissionais</strong> perto de você.
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                type="email" 
                id="email" 
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

<label htmlFor="passaword">SENHA</label>
            <input 
                type="password" 
                id="password" 
                autocomplete="on"
                placeholder="Senha"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />

            <button className="btn" type="submit">Entrar</button>
            </form>

            <p className="pp">Não tem cadastro? </p>
            <Link className="link" to="/register">Cadastre-se Aqui</Link>
</div>
</div>
        </>
    );
}