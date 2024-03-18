import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import ClientContext from './ClientContext';
import api from '../service/requests';

function Provider({ children }) {
  // ================ useStates ================ //

  const [formsInfo, setFormsInfo] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    status: '',
  });

  const [clients, setClients] = useState([]);

  // ================ useEffect ================ //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { message } = await api.get('/'); // Recupera todos os clientes presentes no DB.
        setClients(message); // Popula o estado global "clients".
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, []);

  const contextValue = useMemo(
    () => ({ formsInfo, clients, setFormsInfo,  }),
    [formsInfo, clients]
  );

  return <ClientContext.Provider value={contextValue}>{children}</ClientContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
