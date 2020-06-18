import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import camera from '../../assets/camera.svg';
import './style.css';

export default function RegisterBasic({ history }) {
  const [profilePicture, setprofilePicture] = useState(null);
  const [FullName, setFullName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [TypeUser, setTypeUser] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [EmailProfessional, setEmailProfessional] = useState('');
  const [AddressBusiness, setAddressBusiness] = useState('');
  const [Telephone, setTelephone] = useState('');


  const preview = useMemo(() => {
    return profilePicture ? URL.createObjectURL(profilePicture) : null;
  }, [profilePicture])

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('FullName', FullName);
    data.append('email', email);
    data.append('password', password);
    data.append('TypeUser', TypeUser);

    var values = {
      profilePicture,
      FullName,
      email,
      password,
      TypeUser,
      CNPJ,
      EmailProfessional,
      AddressBusiness,
      Telephone,
    }

    console.log("chamando o axios")

    await api.post('/users', values);

    console.log("chamando o axios", values)

    //history.push('/dashboard');
  }

  return (
    <div className="container-register" >
      <div className="content-register">
        <form onSubmit={handleSubmit}>

        <label>Clique na camera para adicionar foto *</label>
          <label
            id="profilePicture"
            style={{ backgroundImage: `url(${preview})` }}
            className={profilePicture ? 'has-profilePicture' : ''}
          >
            <input type="file" onChange={event => setprofilePicture(event.target.files[0])} />
            <img src={camera} alt="Select img" />
          </label>


          <label htmlFor="FullName">Nome Completo</label>
          <input
            id="FullName"
            placeholder="Digite seu nome completo "
            value={FullName}
            onChange={event => setFullName(event.target.value)}
          />
<div className="group">
          <label className="label-empresa" htmlFor="email">E-mail*</label>
          <input
            id="email"
            className="input-big"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={event => setemail(event.target.value)}
          />

          <label className="label-empresa" htmlFor="password">Senha</label>
          <input
            id="password"
            className="input-big"
            placeholder="Digite sua senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
</div>
          <label htmlFor="Telefone">Tipo de Usuário</label>
          <select
            id="TypeUser"
            value={TypeUser}
            onChange={event => setTypeUser(event.target.value)}
          >
            <option value='' disabled >Selecione uma opção</option>
            <option value='Contratante'>Contratante</option>select
          <option value='Prestador'>Prestador</option>
          </select>
          <h4 className="title-empresa">Empresa</h4>

          <div className="group">
          <label className="label-empresa" htmlFor="CNPJ">CNPJ</label>
            <input
              id="CNPJ"
              placeholder="Digite CPNJ, caso tenha "
              value={CNPJ}
              onChange={event => setCNPJ(event.target.value)}
            />



            <label className="label-empresa" htmlFor="AddressBusiness">Endereço da Empresa</label>
            <input
              id="AddressBusiness"
              placeholder="Digite Endereço da empresa"
              value={AddressBusiness}
              onChange={event => setAddressBusiness(event.target.value)}
            />
          </div>

          <div className="group">
            <label className="label-empresa" htmlFor="Telefone">Telefone</label>
            <input
              id="Telefone"
              placeholder="Digite um telefone para contato"
              value={Telephone}
              onChange={event => setTelephone(event.target.value)}
            />

            <label className="label-empresa" htmlFor="EmailProfessional">E-mail da empresa</label>
            <input
              id="EmailProfessional"
              placeholder="Digite e-mail de contato da empresa"
              value={EmailProfessional}
              onChange={event => setEmailProfessional(event.target.value)}
            />
          </div>

          { /* <button type="submit" className="btn">Cadastrar</button>  */}
          <button type="submit" className="btn">Cadastrar</button>

        </form>
      </div>
    </div>
  )
}