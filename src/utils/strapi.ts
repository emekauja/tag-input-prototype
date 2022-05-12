import axios from 'axios';

import { IData } from '@/types';

const BASE_URL = 'http://stapi.co/api/v1';
const base = axios.create({
  baseURL: `${BASE_URL}/rest`,
});

/**
 * Get a List of Current Data's by type e.g spacecraft, animal
 * @param  {string} type
 * @param  {string} query
 * @param  {number} page
 * @returns {Promise}
 */
export const fetchDataByType = (
  type: string,
  query: string,
  page: number
): Promise<IData> => {
  const formdata = new URLSearchParams();
  formdata.append('title', query);
  formdata.append('name', query);
  return base
    .post(`/${type}/search?pageNumber=${page}`, formdata, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => response.data);
};
