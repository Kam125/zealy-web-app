/* eslint-disable import/no-anonymous-default-export */
import Repository from "./Repository";
const CREAT_COMMUNITY = "/communities/create";
const GET_ALL_COMMUNITIES = "/communities/getAll"

export default {
  createCommunity(payload) {
    console.log(payload)
    const headers = {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWRhNjU0ZWY1ODBlMmI1ODgxOTRhNCIsImlhdCI6MTY5MzQ1ODQ4MSwiZXhwIjoxNjkzNzE3NjgxfQ.Kob8rILdNeYGgq3SjDzGypwj6igkkD3LTsi4sC-F-Pg",
    };
    return Repository.post(`${CREAT_COMMUNITY}`, payload, { headers });
  },
  getAllCommunities() {
    const headers = {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWRhNjU0ZWY1ODBlMmI1ODgxOTRhNCIsImlhdCI6MTY5MzQ1ODQ4MSwiZXhwIjoxNjkzNzE3NjgxfQ.Kob8rILdNeYGgq3SjDzGypwj6igkkD3LTsi4sC-F-Pg",
    };
    return Repository.get(`${GET_ALL_COMMUNITIES}`, { headers });
  },
};
