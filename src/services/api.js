import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get(
    'https://63bd3f63d6600623889ee036.mockapi.io/users'
  );

  return response.data;
};
