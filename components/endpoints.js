import axios from 'axios';
export const instance = axios.create({
    baseURL: 'https://covid-19-data.p.rapidapi.com/report/country/name',
    timeout: 10000,
    headers: {
        'x-rapidapi-key': '2487f4eb87mshd79b147e163550bp1540eajsncf04b2a66fce',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      }
  });