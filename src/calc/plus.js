import axios from 'axios';

const plus = async (x, y) => {
  const encoded = `https://api.mathjs.org/v4/?expr=${x}%2B${y}`;
  try {
    const response = await axios.get(encoded);
    console.log(response.data);
  } catch (err) {
    if (err.response) {
      console.error(err.response.data);
      console.error(err.response.status);
      console.error(err.response.headers);
    }
    if (err.request) console.log('GET request error', err.message);
    console.error(err.config);
  }
};
export default plus;
