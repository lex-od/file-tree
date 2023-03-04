import { AxiosResponse } from "axios";

export interface IApi {
  getFileTree: () => Promise<AxiosResponse<IGetFileTreeResponse>>;
}

// 📌 getFileTree

export interface IGetFileTreeResponse {}
