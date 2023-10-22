import api from './api';

export const getNotice = async () => {
  try {
    const response = await api.get('/notice');
    return response.data.data.noticeList;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
