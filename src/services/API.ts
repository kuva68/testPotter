import axios, {AxiosResponse} from 'axios';

import {ICharacter} from '../types/interfaces';

const instance = axios.create({
  baseURL: 'https://hp-api.onrender.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'no-cors',
  },
});
export const apiService = {
  getCharacters: async (): Promise<AxiosResponse<ICharacter[], any>> =>
    await instance.get(`/characters`),
};
