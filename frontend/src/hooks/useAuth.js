import { useContext } from 'react';
import { authContext, getAuth } from '../Context/AuthProvider';
import { login } from '../apis/login';
import logout from '../apis/logout';
import refreshToken from '../apis/refreshToken';
import usePersist from './usePersist';



export default function useAuth() {
  const { persist } = usePersist();
  const { auth, setAuth } = useContext(authContext);
  const getNewAuth = async (u, p) => {
    try {
      let res = await login(u, p);
      if (persist) {
        localStorage
          .setItem('auth', JSON.stringify({
            username: u,
            accessToken: '', 
            roles: res.data.roles?res.data.roles:null
          }));
        localStorage
          .setItem('persist', JSON.stringify(true));
      } else {
        localStorage.setItem('auth', '');
        localStorage.setItem('persist', '');
      }
      setAuth(getAuth(u, res.data.access_token, res.data.roles));
      return true;
    } catch (err) {
      console.error(err.message);
      setAuth(null);
      throw err;
    }
  }
  const logoutAuth = async () => {
    try {
      let res = await logout();
    } catch (err) {
      console.log(err);
    }
    localStorage.setItem('auth', '');
    setAuth(null);
  }
  const refreshAccessToken = async () => {
    try {
      let res = await refreshToken();
      return res.data.access_token;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  const apiCallWithRefresh = async (callback, args) => {
    args = args || []; // handle no arg
    let res = null;
    let count = 0;
    let token = auth.getAccessToken();
    let callError;
    while (!res && count < 2) {
      try{
        res = await callback(...args, token);
      } catch (err) {
        callError = err;
        //console.error(err);
        res = null;
        if (err.response?.status === 401) {
          //attemp to update jwt
          token = await refreshAccessToken();
        }
      }
      count++;
    }
    if (res) {
      setAuth(getAuth(auth.getUsername(), token, auth.getRoles()));
      return res;
    } else {
      // could not verify user, remove authentication
      setAuth(null);
      throw callError;
    }
  }
  return { auth, getNewAuth, logoutAuth, refreshAccessToken, apiCallWithRefresh };
}