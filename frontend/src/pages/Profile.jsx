import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Profile() {
  const navigate = useNavigate();
  const { auth, logoutAuth, refreshAccessToken } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getEmployees = async () => {
    setIsLoading(true);
    let count = 0;
    let res = null;
    while (count < 2 && !res) { // try to refresh accessToken
      try {
        res = await axios.get('http://localhost:3500/employees', {
          headers:{
            'Authorization': `Bearer ${auth.getAccessToken()}`
          }
        })
      } catch (err) {
        res = null;
        console.error(err);
        if (err.response?.status === 401) {
          //attemp to update jwt
          await refreshAccessToken();
        }
        count++;
      }
    };
    if (res) {
      setEmployees(res.data);
      setIsLoading(false);
    } else {
      navigate('/login');
    }
  };

  if (auth) {
    return (
      <>
        <h1>{`${auth.getUsername()}'s Profile Page`}</h1>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={logoutAuth}>Logout</button>
        <button onClick={getEmployees}>Get Employees</button>
        <ul>
          {isLoading
            ?<li>...</li>
            :employees.map(employee => <li key={employee.id}>{`${employee.firstname} ${employee.lastname}`}</li>)
          }
        </ul>
      </>
    )
  } else {
    return <Navigate to='/login' state={{from: '/profile'}}/>;
  }
}


