/** Retorna um array que será usado para renderizar inputs controlados e com validação de valores.
 *
 * Retorno: [
 *    {name: string, label: string, validator: function, onChange: function},
 *    ...
 * ]
 */

const createTextInputArray = (inputData, formValid) => {
  const textInputs = [];

  inputData.forEach((input) => {
    const { name, label, validator } = input;

    // Faz a validação enquanto o input é preenchido.
    const onChange = (isValid) => {
      formValid.current[name] = isValid;
    };

    textInputs.push({ name, label, validator, onChange });
  });

  return textInputs;
};

export default createTextInputArray;
