import React from 'react';
import './style.css';
import homeImage from '../../assets/logo.png';

export default function Home() {
  
  return (
    <>
    <div className="container my-5">

      <div className="row align-items-center my-5">


      <div className="col-lg-5 imge">
          <img src={homeImage} alt="home" />  
          <h4> Mão na Massa</h4>
        </div>

        <div className="col-lg-7">
          <h2 className="home-h2">Tem um serviço e gostaria de encontrar alguém ? </h2>
          <h4 className="font-weight-light">Anuncie sua procura aqui e encontre trabalhadores proximos de você</h4>
          <button className="btn but2" to ="/register">Cadastra-se</button>
        </div>


      </div>

      <div className="card text-white bg-secondary my-10 py-5 text-center">
        <div className="card-body">
          <p className="text-white m-0">Ajudamos as pessoas </p>
        </div>
      </div>
    </div>
  </>
  );
}