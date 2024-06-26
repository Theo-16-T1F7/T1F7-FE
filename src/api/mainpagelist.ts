import severapi from './serverapi';
// import api from './api';

const requestBody = {
  hashList: [] // hashList로 분류
};

// 위의 객체를 JSON 문자열로 변환
const requestBodyJSON = JSON.stringify(requestBody);

export const getNeedSolution = async (page = 0, pageSize = 20) => {
  try {
    const response = await severapi.get('/api/posts', {
      params: {
        search: '',
        mbti: 'T',
        hashList: '',
        page: page,
        pageSize: pageSize
      }
    });
    return response.data;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

export const getNeedEmpathy = async (page = 0, pageSize = 20) => {
  try {
    const response = await severapi.get('/api/posts', {
      params: {
        search: '',
        mbti: 'F',
        hashList: '',
        page: page,
        pageSize: pageSize
      }
    });
    // console.info(response.data);
    return response.data;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

export const getEmotionStory = async (newHashList: number[]) => {
  // console.info('new', newHashList);
  try {
    const response = await severapi.get('/api/posts', {
      params: {
        search: '',
        mbti: '',
        hashList: newHashList.join(',')
      }
    });

    return response.data;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
