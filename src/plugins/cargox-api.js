import Axios from 'axios';

const API_ENDPOINT = 'http://private-anon-b0b60a164f-cargox.apiary-mock.com/';
const requester = async (method, url, params = {}) => {
  const response = await Axios({
    method,
    url,
    params,
  });

  return response.data;
};

const API = {
  forms: {
    list() { return requester('get', `${API_ENDPOINT}/forms`); },
    get(id) { return requester('get', `${API_ENDPOINT}/forms/${id}`); },
    create(form) { return requester('post', `${API_ENDPOINT}/forms`, form); },
    update(form) { return requester('patch', `${API_ENDPOINT}/forms`, form); },
  },
};

export default API;
