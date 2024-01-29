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

export interface RequestPost {
  // nickname: string;
  title: string;
  content: string;
  mbti: string;
  // password: string;
  hashList: number[];
}

export interface MainPost {
  id: number;
  title: string;
  content: string;
  nickname: string;
  mbti: string;
  createdAt: string;
}

export interface UserDataType {
  id: string;
  username: string;
}
