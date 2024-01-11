import serverapi from './serverapi';

export const getProfile = async (id: number) => {
  const accessToken = sessionStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('토큰이 없어요!');
  }
  try {
    const response = await serverapi.get(`/api/users/${id}`, {
      headers: {
        'X-BBEUDDE-TOKEN': accessToken
      }
    });
    return response.data;
  } catch (err) {
    console.error('Error: ', err);
    throw new Error(`Error: ${err}`);
  }
};
