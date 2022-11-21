import { useContext } from 'react';
import { PersistContext } from '../Context/PersistProvider';

function usePersist() {
  let {persist, setPersist} = useContext(PersistContext);
  return {persist, setPersist};
}

export default usePersist;