import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import './style.css';

import camera from '../../assets/camera.svg';

export default function RegisterPhoto({ history }) {
  const [profilePicture, setprofilePicture] = useState(null);

  

  const preview = useMemo(() => {
    return profilePicture ? URL.createObjectURL(profilePicture) : null;
  }, [profilePicture])

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append('profilePicture', profilePicture);


    await api.post('/spots', data);

    history.push('/dashboard');
  }

  return (
      <div className="content">
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
         
        </form>
      </div>
  )
}