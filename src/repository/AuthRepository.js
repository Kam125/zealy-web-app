/* eslint-disable import/no-anonymous-default-export */
import Repository from "./Repository";
const SIGNUP = "/auth/signup";
const LOGIN = "/auth/login";

export default {
  signup(payload) {
    return Repository.post(SIGNUP, payload);
  },
  login(payload) {
    return Repository.post(LOGIN, payload);
  },
};