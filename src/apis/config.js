import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = setupCache(Axios);

const Api = axios.create({
  baseURL: "https://rphuae.ae/APIs/public/v1/api",
  timeout: 60000,
});
export default Api;
