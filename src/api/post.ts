import axios from 'axios';

const getPosts = async () => {
  try {
    const response = await axios.get('/post');
    return response.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};
