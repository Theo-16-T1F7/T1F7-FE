import serverapi from './serverapi';
import { BalanceGameVotePost } from '../types/type';

// export const getBalanceGame = async (mbti: string) => {
//   try {
//     const response = await serverapi.get(`api/questions/${mbti}`);
//     return response.data.data;
//   } catch (error) {
//     console.error('데이터를 가져오는 중 오류 발생: ', error);
//     throw error;
//   }
// };
// export const getBalanceGameRes = async (mbti: string) => {
//   try {
//     const response = await serverapi.get(`api/questions/${mbti}/result`);
//     return response.data.data;
//   } catch (error) {
//     console.error('데이터를 가져오는 중 오류 발생: ', error);
//     throw error;
//   }
// };

export const getBalanceGame = async (mbti: string) => {
  try {
    const response = await serverapi.get(`api/questions/${mbti}/test`);
    return response.data.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};

export const postSubmitVote = async (voteRes: BalanceGameVotePost, token: string | null): Promise<void> => {
  const accessToken = sessionStorage.getItem('accessToken');
  try {
    const response = await serverapi.post('/api/vote', voteRes, {
      headers: { 'X-BBEUDDE-TOKEN': accessToken }
    });
    return response.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};
