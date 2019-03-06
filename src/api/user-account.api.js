import {
  API_ROOT
} from '.';
import Request from './request';

const PATH = '/userAccounts';

const UserAccountAPI = {
  get(id, filter) {

    const q = filter ? `?filter=${JSON.stringify(filter)}` : '';
    return Request.get(`${API_ROOT}${PATH}/${id}${q}`);
  },
  all(filter) {
    const q = filter ? `?filter=${JSON.stringify(filter)}` : '';
    return Request.get(`${API_ROOT}${PATH}${q}`);
  },
  create(data) {
    return Request.post(`${API_ROOT}${PATH}`, data);
  },
  update(data) {
    return Request.put(`${API_ROOT}${PATH}/${data.id}`, data);
  },
  remove(id) {
    return Request.delete(`${API_ROOT}${PATH}/${id}`);
  },
};

export default UserAccountAPI;