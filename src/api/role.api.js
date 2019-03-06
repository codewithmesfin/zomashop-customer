 import {
   API_ROOT
 } from '.';
 import Request from './request';
 const PATH = '/userRoles';
 const RoleAPI = {
   get(id) {
     return Request.get(`${API_ROOT}${PATH}/${id}`);
   },
   all(filter) {
     const q = filter ? `?filter=${JSON.stringify(filter)}` : '';
     return Request.get(`${API_ROOT}${PATH}${q}`);
   },
   create(data) {
     return Request.post(`${API_ROOT}${PATH}`, data);
   },
   update(data) {
     return Request.patch(`${API_ROOT}${PATH}/${data.id}`, data);
   },
   remove(id) {
     return Request.delete(`${API_ROOT}${PATH}/${id}`);
   },
 };
 export default RoleAPI;