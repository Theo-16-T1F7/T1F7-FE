import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
}); // 새로운 인스턴스

export default instance;
