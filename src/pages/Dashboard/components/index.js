import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../../../services/api';

import './style.css';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);


  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('aqui vai a rota que lista os anuncios ', {
        headers: { user_id }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, [])
  return (
    <>
      <div className="container-dash">
        <div className="content">
          <h2>VEJA SEUS ANUNCIOS:</h2>
          <br></br>
          <ul className="spot-list">
            {spots.map(spot => (
              <li key={spot._id}>
                <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                <strong>{spot.company}</strong>
                <strong>{spot.address}</strong>
                <span> {spot.techs} </span>
                <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
              </li>
            ))}
          </ul>

          <Link to="/new">
            <button className="btn">Cadastrar novo serviço</button>
          </Link>

        </div>
      </div>
    </>
  );
}