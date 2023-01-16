import axios from 'axios';

const times = async (x, y) => {
  const encoded = `https://api.mathjs.org/v4/?expr=${x}*${y}`;
  try {
    const response = await axios.get(encoded);
    console.log(response.data);
  } catch (err) {
    if (err.response) {
      console.error(err.response.data);
      console.error(err.response.status);
      console.error(err.response.headers);
    }
    if (err.request) console.error('GET request error', err.message);
    console.error(err.config);
  }
};
export default times;
