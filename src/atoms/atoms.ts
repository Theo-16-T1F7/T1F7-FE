import { atom } from 'recoil';

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: sessionStorage.getItem('accessToken') || null
});

export const userState = atom({
  key: 'userState',
  default: false
});
