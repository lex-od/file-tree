import { AxiosResponse } from "axios";

export interface IApi {
  getFileTree: () => Promise<AxiosResponse<IGetFileTreeResponse>>;
}

// 📌 getFileTree

export interface IGetFileTreeFile {
  atime: number;
  mtime: number;
  name: string;
  size: number;
  type: string;
}

export type TGetFileTreeFolderList = Record<string, IGetFileTreeFile[]>;

export interface IGetFileTreeResponse {
  data: {
    files: TGetFileTreeFolderList;
  };
}
