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
  // id: number;
  title: string;
  content: string;
  // nickname: string;
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

export interface CommentPost {
  // id: number;
  postId: number;
  parentId: null;
  content: string;
  // nickname: string | null;
  mbti: string;
  // createdAt: string;
}

export interface CommentGet {
  id: number;
  // postId: number;
  // parentId: number;
  content: string;
  nickName: string | null;
  mbti: string;
  createdAt: string;
}

export interface HotBoardGet {
  postId: number;
  title: string;
  content: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
}
export interface Choice {
  choiceContent: string;
  choicePercent: number;
  isChoice: boolean;
  choiceImageUrl: string | null;
}
export interface BalanceGameGet {
  questionId: number;
  title: string;
  startDate: string;
  endDate: string;
  mbti: string;
  totalVote: number;
  choiceA: Choice;
  choiceB: Choice;
}

export interface BalanceGameResGet {
  questionId: number | null;
  title: string;
  choiceAContent: string;
  choiceBContent: string;
  mbti: string;
  totalVote: number;
  choiceAPercent: number | null;
  choiceBPercent: number;
}

export interface BalanceGameVotePost {
  questionId: number | null;
  isChoiceA: boolean;
  isChoiceB: boolean;
}
