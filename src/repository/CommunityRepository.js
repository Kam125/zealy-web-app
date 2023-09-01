/* eslint-disable import/no-anonymous-default-export */
import Repository from "./Repository";
const CREAT_COMMUNITY = "/communities/create";
const GET_ALL_COMMUNITIES = "/communities/getAll";

const token = sessionStorage.getItem("token");

export default {
  createCommunity(payload) {
    console.log(payload)
    const headers = {
      Authorization: "Bearer "+token,
    };
    return Repository.post(`${CREAT_COMMUNITY}`, payload, { headers });
  },
  getAllCommunities() {
    const headers = {
      Authorization: "Bearer "+token,
    };
    return Repository.get(`${GET_ALL_COMMUNITIES}`, { headers });
  },
};
