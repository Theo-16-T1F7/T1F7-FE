import severapi from './serverapi';

export const getHotboard = async () => {
  try {
    const response = await severapi.get('/api/posts/hot');
    return response.data.data;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
