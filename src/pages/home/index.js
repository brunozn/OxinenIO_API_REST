import React from 'react';
import './style.css';
//import homeImage from '../../assets/logo.png';

export default function Home() {
  
  return (
    <>
    <div className="container my-5 fora">

      <div className="row align-items-center my-5">


      <div className="col-lg imge">
          <p className="logo one">Seja bem vindo ao<br></br><span id="SPAN1">Mão na Massa</span>!</p>
          <p className="logo two">A nossa motivação é te <span>atender bem!</span>
          </p>
        </div>

        <div className="col-lg-7">
          <h2 className="home-h2">Tem um serviço e gostaria de encontrar alguém ? </h2>
          <h4 className="font-weight-light">Anuncie sua procura aqui e encontre trabalhadores proximos de você</h4>
          <button className="btn but2" to ="/register">Cadastre-se</button>
        </div>


      </div>
      <hr></hr>
      <div class="col s12 m7">
              <p id="oxigenio">OxigenIO</p>
              <p id="arr">Todos os direitos reservados</p>
      </div>
      
    </div>
  </>
  );
}