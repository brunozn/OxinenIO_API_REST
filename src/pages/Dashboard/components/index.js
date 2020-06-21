import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../../../services/api';

import './style.css';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);


  useEffect(() => {
    async function loadSpots() {
          const id = localStorage.getItem('user');
            try{
              const response = await api.get(`/advert/${id}`)
              console.log(response.data);
              setSpots(response.data);
            }catch(error){
              console.log("busca anuncios",error);
            }
    }

    loadSpots();
  }, [])
  return (
    <>
      <div className="container-dash">
        <div className="content">
          <h2>VEJA SEUS ANUNCIOS:</h2>
          <br></br><br></br>
          <ul className="spot-list">
            {spots.map(spot => (
              <li key={spot._id}>
                <header style={{ backgroundImage: `url(${spot.photoAdvert})` }} />
                <strong>{spot.serviceAddress}</strong>
                <strong>{spot.service}</strong>
                <strong>{spot.needService}</strong>
                <span> {spot.briefDescription} </span>
                <span>{spot.money ? `R$${spot.money}/dia` : 'GRATUITO'}</span>
              </li>
            ))}
          </ul>

          <Link to="/new">
            <button className="btn">NOVO SERVIÇO</button>
          </Link>

        </div>
      </div>
    </>
  );
}