/* eslint-disable no-console */
/* eslint-disable consistent-return */
import axios from 'axios';

const plus = async (x, y) => {
  const encoded = `https://api.mathjs.org/v4/?expr=${x}%2B${y}`;
  try {
    const response = await axios.get(encoded);

    if (response.status === 400) throw new Error('Erro na API ');
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err.response.data);
    console.error(err.response.headers);

    if (err.request) console.error(`GET request error ${err.request}`);
    throw err;
  }
};
export default plus;
