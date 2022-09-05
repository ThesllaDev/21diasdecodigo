const getRandomLetter = () => {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};

const getRandomNumber = () => {
  let charset = "0123456789";
  let randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};

const getRandomSymbol = () => {
  let charset = "[]{}?!|-_*#^/()&%$£";
  let randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};

const generatePassword = (hasNumber = false, hasSymbol = false, len = 8) => {
  let functionSet = [getRandomLetter];

  functionSet = hasNumber ? [...functionSet, getRandomNumber] : functionSet;
  functionSet = hasSymbol ? [...functionSet, getRandomSymbol] : functionSet;

  let password = [];
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * functionSet.length);
    let character = functionSet[randomIndex]();
    password.push(character);
  }

  return password.join("");
};

export { generatePassword };
