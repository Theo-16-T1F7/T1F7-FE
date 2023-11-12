import severapi from './serverapi';
// import api from './api';

const requestBody = {
  hashList: [] // hashList로 분류
};

// 위의 객체를 JSON 문자열로 변환
const requestBodyJSON = JSON.stringify(requestBody);

// export const getNeedSolution = async () => {
//   fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/api/post`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: requestBodyJSON
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// };
export const getNeedSolution = async () => {
  try {
    const response = await severapi.get('/api/post', {
      params: {
        search: '',
        mbti: '',
        hashList: ''
      }
    });
    // console.log('res', response);
    return response.data;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
