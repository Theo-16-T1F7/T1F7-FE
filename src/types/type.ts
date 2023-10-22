export interface ExTypes {}

export interface PostDetail {
  id: number | string;
  title: string;
  category: string;
  content: string;
  mbti: string;
  memberSeq: number | string;
  nickname: string;
  postImageSeq: number | string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
