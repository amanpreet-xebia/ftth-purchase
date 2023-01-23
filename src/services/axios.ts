import axios from 'axios';
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
const storedLang = typeof window !== 'undefined' ? localStorage.getItem('selectedLanguage') : 'en'

export default axios.create({
   //baseURL: `${process.env.API_BASE_LOCAL_URL}`,
   baseURL: 'http://165.227.158.208/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'content-type': 'application/json',
    accept: 'application/json',
    prefer: '200',
    Authorization: token ? `Bearer ${token}` : '',
    'Accept-language': storedLang
  }
});
