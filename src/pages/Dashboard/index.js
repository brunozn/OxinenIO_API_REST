import React, { useEffect } from 'react';
import api from '../../services/api';

function Dashboard(){
    useEffect(() => {
        async function loadVacancies(){
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id}
            });
            console.log(response.data);
        }
        loadVacancies();
    }, []);
    return <div>
        <h4> Dashboard</h4>
    </div>
}
export default Dashboard;