import axios from 'axios';
const baseURL = "";

export const fetch = axios.create({
    baseURL: 'baseURL',
    headers: {'X-Custom-Header': 'foobar'}
  });

  //API

  export const LOGIN_API = "";
