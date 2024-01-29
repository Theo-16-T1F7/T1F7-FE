import serverapi from './serverapi';

export const getUserId = async () => {
  const accessToken = sessionStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('토큰이 없어요!');
  }
  try {
    const response = await serverapi.get('/api/users/info', {
      headers: {
        'X-BBEUDDE-TOKEN': accessToken
      }
    });
    const userId = response.data.data.id;
    sessionStorage.setItem('userId', userId);
    return userId;
  } catch (err) {
    console.error('Error: ', err);
    throw new Error(`Error: ${err}`);
  }
};

export const getUserInfo = async () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const userId = sessionStorage.getItem('userId');
  try {
    const response = await serverapi.get(`/api/users/${userId}`, {
      headers: {
        'X-BBEUDDE-TOKEN': accessToken
      }
    });
    const userNickname = response.data.data.nickname;
    sessionStorage.setItem('userNickname', userNickname);
    return userNickname;
  } catch (err) {
    console.error('Error: ', err);
    throw new Error(`Error: ${err}`);
  }
};
