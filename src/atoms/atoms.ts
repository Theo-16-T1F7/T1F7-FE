import { atom } from 'recoil';

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: sessionStorage.getItem('accessToken') || null
});

export const userState = atom({
  key: 'userState',
  default: false
});

export const userIdState = atom({
  key: 'userIdState',
  default: sessionStorage.getItem('userNickname') || null
});

export const userNicknameState = atom({
  key: 'userNicknameState',
  default: sessionStorage.getItem('userNickname') || null
});
