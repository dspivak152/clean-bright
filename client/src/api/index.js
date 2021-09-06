import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.1.200:5000' });

API.interceptors.request.use(req => {
   if (localStorage.getItem('profile')) {
      const profile = JSON.parse(localStorage.getItem('profile'));
      req.headers.token = profile.token;
   }
   return req;
})

// admin
export const login = formData => API.post('/user/login', formData);
// client
export const createClient = clientData => API.post('/client/create', clientData);
export const getClients = () => API.get('/client/getall');