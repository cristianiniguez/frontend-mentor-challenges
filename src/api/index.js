import Axios from 'axios';

const API_URL = 'https://restcountries.com/v2';

export const getAllCountries = async () => {
  const { data } = await Axios(`${API_URL}/all`);
  return data;
};
