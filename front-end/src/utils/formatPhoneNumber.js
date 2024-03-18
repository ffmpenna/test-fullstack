// Formata números de telefone
const formatNumber = (number) => {
  const formatedNumber = number.replace(/\D/g, '').substring(2);

  // Formata o número conforme (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
  return (
    '(' +
    formatedNumber.substring(0, 2) +
    ') ' +
    formatedNumber.substring(2, 6) +
    '-' +
    formatedNumber.substring(6)
  );
};

export default formatNumber;
