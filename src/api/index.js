import AuthAPI from './auth.api';
import RoleAPI from './role.api';
import UserAccountAPI from './user-account.api';
import PermissionAPI from './permission.api'

//const API_ROOT = process.env.VUE_APP_API_ROOT;
// const API_ROOT = 'http://159.65.127.83:8000/api/v1'
const API_ROOT = 'http://localhost:3000/api'

export {
  API_ROOT,
  AuthAPI,
  RoleAPI,
  UserAccountAPI,
  PermissionAPI,

};