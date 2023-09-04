/* eslint-disable import/no-anonymous-default-export */
import Repository from "./Repository";
const CREAT_COMMUNITY = "/communities/create";
const GET_ALL_COMMUNITIES = "/communities/getAll";
const UPDATE_COMMUNITY = "/communities/update/"

const token = sessionStorage.getItem("token");

export default {
  createCommunity(payload) {
    const headers = {
      Authorization: "Bearer "+token,
    };
    return Repository.post(`${CREAT_COMMUNITY}`, payload, { headers });
  },
  getAllCommunities(payload) {
    const headers = {
      Authorization: "Bearer "+token,
    };
    if (payload) {
      return Repository.get(`${GET_ALL_COMMUNITIES+'?offset='+payload.offset+'&limit='+payload.limit}`, { headers })
    } else {
      return Repository.get(`${GET_ALL_COMMUNITIES}`, { headers })
    }
  },
  updateCommunity(payload) {
    console.log(payload)
    const headers = {
      Authorization: "Bearer "+token,
    };
    return Repository.put(`${UPDATE_COMMUNITY}`+payload.id, {likes: payload.likes}, { headers });
  },
};
