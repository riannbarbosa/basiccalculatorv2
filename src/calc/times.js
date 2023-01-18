/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios from 'axios';

const times = async (x, y) => {
  const encoded = `https://api.mathjs.org/v4/?expr=${x}*${y}`;
  try {
    const response = await axios.get(encoded);

    if (response.status === 400) throw new Error('Erro na API (400) ');
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err.response.data);
    console.error(err.response.headers);

    if (err.request) console.error(`GET request error ${err.request}`);
    throw err;
  }
};
export default times;
