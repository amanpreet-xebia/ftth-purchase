import axios from 'axios';
const token =
  typeof window !== 'undefined' ? localStorage.getItem('token') : '';
const storedLang =
  typeof window !== 'undefined'
    ? localStorage.getItem('selectedLanguage')
    : 'en';

export default axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'content-type': 'application/json',
    accept: 'application/json',
    prefer: '200',
    Authorization: token ? `Bearer ${token}` : '',
    'Accept-language': storedLang,
  },
});
