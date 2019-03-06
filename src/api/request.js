import axios from "axios";
import axiosRetry from "axios-retry";
import AuthService from "@/shared/services";
import {
  NetworkErrorAlert,
  InternalErrorAlert
} from "@/shared/components";

import app from "../main";

const Request = axios.create();

axiosRetry(Request, {
  retries: 3
});




/**
 * Request interceptor
 */
Request.interceptors.request.use(config => {
  app.$store.commit("core/addPendingRequest");
  const token = AuthService.getAccessToken();
  if (token) {
    if (config.method !== "OPTIONS") {
      // eslint-disable-next-line
      config.headers.Authorization = token;
      //config.headers.common['Authorization'] = token
    }

  }
  return config;
});

/**
 * Response interceptor
 */
Request.interceptors.response.use(
  response => {
    app.$store.commit("core/removePendingRequest");
    return response.data;
  },
  err => {
    app.$store.commit("core/removePendingRequest");
    // connection problem
    if (err.message === "Network Error") {
      app.$notify({
        type: "danger",
        component: NetworkErrorAlert,
        horizontalAlign: "center",
        verticalAlign: "top"
      });
      throw err;
    }
    if (!err || !err.response) {
      throw err;
    }
    const {
      status
    } = err.response;
    const url = err.request.responseURL.split("/");
    const path = url[url.length - 1];

    // 401 - UNAUTHORIZED
    if (status === 401) {
      if (path !== "login" && path !== "logout-user") {
        app.$notify({
          title: "Unauthorized",
          type: "danger",
          message: "Unauthorized Access."
        });
      }
      throw err.response.data.error;
    }

    // 500 - Internal Error
    if (status >= 500) {
      app.$notify({
        type: "danger",
        horizontalAlign: "center",
        verticalAlign: "top",
        component: InternalErrorAlert
      });
      throw err.response.data.error;
    }

    // OTHER
    throw err.response.data.error;
  }
);

export default Request;