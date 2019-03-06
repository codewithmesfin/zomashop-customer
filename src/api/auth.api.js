import Request from "./request";

import {
  API_ROOT
} from "./";
const path = "/userAccounts";
const AuthAPI = {
  login(email, password) {
    return Request.post(`${API_ROOT}${path}/login`, {
      email,
      password,
    });
  },

  forgot(username) {
    return Request.post(`${API_ROOT}${path}/request-password-change`, {
      username
    });
  },
  logout() {
    return Request.post(`${API_ROOT}${path}/logout-user`);
  }
};

export default AuthAPI;