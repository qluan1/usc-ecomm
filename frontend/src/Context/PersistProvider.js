import { useState, createContext } from 'react';

const PersistContext = createContext(null);

export { PersistContext };

const initialPersist = (function () {
  try {
    let init = localStorage.getItem('persist');
    if (init) {
      return JSON.parse(init);
    }
  } catch (err) {
    console.log(err);
  }
  return false;
})();

function PersistProvider({ children }) {
  const [persist, setPersist] = useState(initialPersist);
  return (
    <PersistContext.Provider value={{persist, setPersist}}>
      {children}
    </PersistContext.Provider>
  )
};

export default PersistProvider;