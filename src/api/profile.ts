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
  } catch (err) {
    console.error('Error: ', err);
    throw new Error(`Error: ${err}`);
  }
};

export const getUserInfo = async (id: string | number) => {
  const accessToken = sessionStorage.getItem('accessToken');
  const userId = sessionStorage.getItem('userId');
  try {
    const response = await serverapi.get(`/api/users/${id}`, {
      headers: {
        'X-BBEUDDE-TOKEN': accessToken
      }
    });

  } catch (err) {
    console.error('Error: ', err);
    throw new Error(`Error: ${err}`);
  }
};
