import {
  API_ROOT
} from '.';
import Request from './request';

const PATH = '/permissions';

const PermissionAPI = {
  get(filter) {
    const q = filter ? `?filter=${JSON.stringify(filter)}` : '';
    return Request.get(`${API_ROOT}${PATH}${q}`);
  },
  all(filter) {
    const q = filter ? `?filter=${JSON.stringify(filter)}` : '';
    return Request.get(`${API_ROOT}${PATH}${q}`);
  },
  create(data) {
    const LOCAL_PATH = '/permissions/create-permission';
    return Request.post(`${API_ROOT}${LOCAL_PATH}`, data);
  },
  update(data) {
    return Request.patch(`${API_ROOT}${PATH}/${data.id}`, data);
  },
  remove(id) {
    return Request.delete(`${API_ROOT}${PATH}/${id}`);
  },
};

export default PermissionAPI;