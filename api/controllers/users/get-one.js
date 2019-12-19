/** @format */

module.exports = req => {
  const {
    query: { name, email },
  } = req;

  return `El nombre es: ${name} y el correo: ${email}`;
};
