import { PostDetail, RequestPost } from '../types/type';
import api from './api';

export const getPosts = async () => {
  try {
    const response = await api.get('/post');
    return response.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};

export const getPostDetail = async (id: string | number) => {
  try {
    const response = await api.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};

export const createPost = async (newPost: RequestPost): Promise<void> => {
  try {
    const response = await api.post(`/post`, newPost);
    return response.data;
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생: ', error);
    throw error;
  }
};
