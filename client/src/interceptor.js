import axios from 'axios'

//URL shared by each endpoint 
axios.defaults.baseURL = 'https://URL-HERE-/api/'; 

axios.interceptors.request.use(config => {
   //ADDS A TOKEN TO EVERY OUTGOING REQUEST 
   const token = localStorage.getItem('token');
   config.headers.authorization = token;
   return config;
})

axios.interceptos.response.use(res => {
   //strips away the token of any incoming response (if exists) 
   //and adds it to the storage 
   if(res.data.token) {
      localStorage.setItem('token, res.data.token);')
   }
   return res;
})