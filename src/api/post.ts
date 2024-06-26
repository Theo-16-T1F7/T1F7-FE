import { PostDetail, RequestPost } from '../types/type';
import serverapi from './serverapi';

export const getPosts = async () => {
  try {
    const response = await serverapi.get('api/posts');
    return response.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};

export const getPostDetail = async (id: string | number) => {
  try {
    const response = await serverapi.get(`api/posts/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};

export const createPost = async (newComment: RequestPost, token: string | null): Promise<void> => {
  try {
    const headers: Record<string, string> = {};
    // 토큰이 존재하면 헤더에 추가
    if (token) {
      headers['X-BBEUDDE-TOKEN'] = token;
    } else {
      throw new Error('Access token is null.');
    }
    const response = await serverapi.post(`api/posts`, newComment, { headers });
    return response.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};
