import severapi from './serverapi';
// import api from './api';

export const getNotice = async () => {
  try {
    const response = await severapi.get('/api/notice');
    return response.data.data.noticeList;
    // const response = await api.get('/notice');
    // return response.data;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
