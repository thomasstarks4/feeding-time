import axios from "axios";
import {
  API_HOST_PREFIX,
  onGlobalError,
  onGlobalSuccess,
} from "./serviceHelpers";
const endpoint = {
  signUpUrl: `${API_HOST_PREFIX}/api/signup`,
};

const signUp = (payload) => {
  const config = {
    method: "POST",
    url: endpoint.signUpUrl,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export default signUp;
