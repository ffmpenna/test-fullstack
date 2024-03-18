// Formata números de telefone
const formatNumber = (number) =>{
  const cleaned = ('' + number).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{4}|\d{5})(\d{4})$/);
  if (match) {
      return ['(', match[1], ')',' ', match[2], '-', match[3]].join('') // "(xx) xxxxx-xxxx" ou "(xx) xxxx-xxxx"
  }
  return '';
}

export default formatNumber;