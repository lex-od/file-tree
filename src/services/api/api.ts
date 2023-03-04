import axios from "axios";

import { endpoints } from "services/endpoints";
import { IApi } from "./types";

// Правильно хранить в .env
axios.defaults.baseURL = "https://prof.world/api";
const token = "6a06cc0050374e32be51125978904bd8";

export const api: IApi = {
  getFileTree: () => axios.get(endpoints.getFileTree, { params: { token } }),
};
