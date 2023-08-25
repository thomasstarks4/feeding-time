import axios from "axios";
import { onGlobalError, onGlobalSuccess } from "./serviceHelper";
const endpoint = {
  url: "http://localhost:50001/api/users",
};

const addUser = (payload) => {
  const config = {
    method: "POST",
    url: endpoint.url,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export default addUser;
