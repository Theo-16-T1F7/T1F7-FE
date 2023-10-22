import api from './api';

export const getHotboard = async () => {
  try {
    const response = await api.get('/HotBoard');
    return response.data;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
