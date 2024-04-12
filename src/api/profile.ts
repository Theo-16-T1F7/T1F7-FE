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
export const getUserMbti = async () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const userId = sessionStorage.getItem('userId');
  try {
    const response = await serverapi.get(`/api/users/${userId}`, {
      headers: {
        'X-BBEUDDE-TOKEN': accessToken
      }
    });
    const userMbti = response.data.data.mbti;
    sessionStorage.setItem('userMbti', userMbti);
    return userMbti;
  } catch (err) {
    console.error('Error: ', err);
    throw new Error(`Error: ${err}`);
  }
};

export const updateUserNickname = async (newNickname: string, newMbti: string) => {
  const accessToken = sessionStorage.getItem('accessToken');
  const userId = sessionStorage.getItem('userId');
  try {
    const response = await serverapi.patch(
      `/api/users/${userId}`,
      {
        nickname: newNickname,
        mbti: newMbti
      },
      {
        headers: {
          'X-BBEUDDE-TOKEN': accessToken
        }
      }
    );
    // const updatedNickname = response.data.data.nickname;
    // sessionStorage.setItem('userNickname', updatedNickname);
    // return updatedNickname;
    return response.data;
  } catch (err) {
    console.error('Error: ', err);
    throw new Error(`Error: ${err}`);
  }
};

export const getMyPost = async () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const userId = sessionStorage.getItem('userId');
  try {
    const response = await serverapi.get(`/api/users/${userId}/posts`, {
      headers: {
        'X-BBEUDDE-TOKEN': accessToken
      }
    });
    return response.data.data.content;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

export const getMyAnswer = async () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const userId = sessionStorage.getItem('userId');
  try {
    const response = await serverapi.get(`/api/users/${userId}/comments`, {
      headers: {
        'X-BBEUDDE-TOKEN': accessToken
      }
    });
    return response.data.data.content;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
