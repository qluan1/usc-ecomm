import { useState, createContext } from 'react';

const authContext = createContext(null);
function getAuth(u, a, r) {
  let username = u;
  let accessToken = a;
  let roles = r;
  return {
    getUsername: () => username,
    getAccessToken: () => accessToken,
    getRoles: () => roles,
    setAccessToken: (newToken) => accessToken = newToken
  }
};
const initialAuth = (function () {
  try {
    let init = localStorage.getItem('auth');
    if (init) {
      init = JSON.parse(init);
      return getAuth(init.username, init.accessToken, init.roles);
    }
  } catch (err) {
    console.log(err);
  }
  return null;
})();

export { authContext, getAuth };


export default function AuthProvider({children}) {
  const [auth, setAuth] = useState(initialAuth);
  
  return (
    <authContext.Provider value={{auth, setAuth}}>
      {children}
    </authContext.Provider>
  );
}
