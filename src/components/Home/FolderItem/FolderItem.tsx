import { FC } from "react";

import { IGetFileTreeFile } from "services/api/types";
import css from "./FolderItem.module.scss";
import { FileHeader } from "./FileHeader/FileHeader";
import { FileItem } from "./FileItem/FileItem";

interface IFolderItems {
  folderName: string;
  files: IGetFileTreeFile[];
}

export const FolderItem: FC<IFolderItems> = ({ folderName, files }) => {
  return (
    <li>
      <b className={css.folderName}>{folderName}</b>

      <ul>
        {!files.length && <li className={css.noItems}>Folder is empty</li>}

        {!!files.length && <FileHeader />}

        {files.map((file) => (
          <FileItem key={file.name} file={file} />
        ))}
      </ul>
    </li>
  );
};
