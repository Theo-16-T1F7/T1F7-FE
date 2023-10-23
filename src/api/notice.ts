import severapi from './serverapi';

export const getNotice = async () => {
  try {
    const response = await severapi.get('/api/notice');
    return response.data.data.noticeList;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
