// Auxilia a renderização do status.
const parseStatus = (status) => {
  switch (status) {
    case '1':
      return { label: 'Ativo', color: 'green' }; // label: texto que representa o valor do status
    case '2':
      return { label: 'Inativo', color: 'darkred' }; // color: cor do ícone que representa o status
    case '3':
      return { label: 'Aguardando ativação', color: 'orange' };
    case '4':
      return { label: 'Desativado', color: 'grey' };
  }
};

export default parseStatus;
