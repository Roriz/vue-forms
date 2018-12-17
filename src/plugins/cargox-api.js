import Axios from 'axios';

const API_ENDPOINT = 'http://private-anon-b0b60a164f-cargox.apiary-mock.com';
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
    update(id, form) {
      throw new Error('501 - Update has not been implemented yet');
      // TODO: server don't have update route
      // return requester('patch', `${API_ENDPOINT}/forms/${id}`, form);
    },
    destroy(id) { return requester('delete', `${API_ENDPOINT}/forms/${id}`); },
  },
};

export default API;
