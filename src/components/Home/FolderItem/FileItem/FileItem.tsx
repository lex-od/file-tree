import { FC } from "react";

import { IGetFileTreeFile } from "services/api/types";
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
        <p>{file.size}</p>
      </div>

      <div className={css.cell}>
        <p>{file.mtime}</p>
      </div>

      <div className={css.cell}>
        <p>{file.atime}</p>
      </div>
    </li>
  );
};
