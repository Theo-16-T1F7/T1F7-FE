import severapi from './serverapi';

let currentPage = 0;
export const getNeedEmpathys = async () => {
  try {
    currentPage++;
    const response = await severapi.get(`/api/posts?page=${currentPage}`, {
      params: {
        search: '',
        mbti: 'F',
        hashList: ''
      }
    });
    // consologinStatee.info(response.data);
    return response.data;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
