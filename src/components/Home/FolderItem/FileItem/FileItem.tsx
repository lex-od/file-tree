import { FC } from "react";

import { IGetFileTreeFile } from "services/api/types";
import { getFileExt, toTimezone } from "utils";
import css from "./FileItem.module.scss";
import { FileIcon } from "components/FileIcon/FileIcon";

interface IFileItem {
  file: IGetFileTreeFile;
}

export const FileItem: FC<IFileItem> = ({ file }) => {
  return (
    <li className={css.fileItem}>
      <div className={css.nameCell}>
        <FileIcon fileExt={getFileExt(file.name)} size="lg" />
        <p className={css.nameText}>{file.name}</p>
      </div>

      <div className={css.cell}>
        <p className={css.infoText}>{Math.ceil(file.size / 1024)} KB</p>
      </div>

      <div className={css.cell}>
        <p className={css.infoText}>
          <span className={css.mobileLabel}>Created: </span>
          {toTimezone(file.mtime * 1000)}
        </p>
      </div>

      <div className={css.cell}>
        <p className={css.infoText}>
          <span className={css.mobileLabel}>Updated: </span>
          {toTimezone(file.atime * 1000)}
        </p>
      </div>
    </li>
  );
};
