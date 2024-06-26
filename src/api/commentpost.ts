import { CommentPost } from '../types/type';
import serverapi from './serverapi';
import { QueryFunctionContext } from '@tanstack/react-query';

export const getComment = async ({ queryKey }: QueryFunctionContext) => {
  // queryKey 배열의 두 번째 요소를 postId로 사용
  const postId = queryKey[1];
  try {
    const response = await serverapi.get(`api/posts/${postId}/comments`);
    return response.data.data.comments; // response의 구조에 따라 접근 경로를 확인해주세요.
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};

export const createComment = async (newComment: CommentPost, token: string | null, postId: number): Promise<void> => {
  try {
    const headers: Record<string, string> = {};
    // 토큰이 존재하면 헤더에 추가
    if (token) {
      headers['X-BBEUDDE-TOKEN'] = token;
    } else {
      throw new Error('Access token is null.');
    }
    const response = await serverapi.post(`api/posts/${postId}/comments`, newComment, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};
