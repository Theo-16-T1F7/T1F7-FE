import serverapi from './serverapi';

export const getNotice = async () => {
  try {
    const response = await serverapi.get('/api/notice');
    return response.data.data.noticeList;
  } catch (err) {
    console.error('데이터를 가져오는 중 오류 발생: ', err);
    throw new Error(`Error: ${err}`);
  }
};

export const getNoticeDetail = async (id: string | number) => {
  try {
    const response = await serverapi.get(`/notice/${id}`);
    return response.data.data.noticeList;
  } catch (err) {
    console.error('데이터를 가져오는 중 오류 발생: ', err);
    throw err;
  }
};