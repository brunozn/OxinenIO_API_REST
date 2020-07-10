import React from 'react';
//import './style.css';
//import homeImage from '../../assets/logo.png';

import { HomeSection, TitleHome, ButtonRegister, SubtitleHome } from './styles';

export default function Home() {
  
  return (
    <>
    <HomeSection>

      <div className="row align-items-center my-5">


      <div className="col-lg-5">
          <TitleHome>Seja bem vindo ao Mão na Massa! </TitleHome>
         
          <SubtitleHome>A nossa motivação é te <span>atender bem!</span>
          </SubtitleHome>
        </div>

        <div className="col-lg-7">
          <TitleHome>Tem um serviço e gostaria de encontrar alguém ? </TitleHome>
          <SubtitleHome>Anuncie sua procura aqui e encontre trabalhadores proximos de você</SubtitleHome>
          <ButtonRegister to ="/register">Cadastre-se</ButtonRegister>
        </div>


      </div>
      
    </HomeSection>
  </>
  );
}