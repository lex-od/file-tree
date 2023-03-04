import { FC } from "react";

import { IGetFileTreeFile } from "services/api/types";
import { toTimezone } from "utils";
import css from "./FileItem.module.scss";

interface IFileItem {
  file: IGetFileTreeFile;
}

export const FileItem: FC<IFileItem> = ({ file }) => {
  return (
    <li className={css.fileItem}>
      <div className={css.firstCell}>
        <p>{file.name}</p>
      </div>

      <div className={css.cell}>
        <p>{Math.ceil(file.size / 1024)} KB</p>
      </div>

      <div className={css.cell}>
        <p>{toTimezone(file.mtime * 1000)}</p>
      </div>

      <div className={css.cell}>
        <p>{toTimezone(file.atime * 1000)}</p>
      </div>
    </li>
  );
};
