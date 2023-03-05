import { FC } from "react";

import { IGetFileTreeFile } from "services/api/types";
import css from "./FolderItem.module.scss";
import { IFolderParams, TSetFolderParams } from "../Home";
import { FileHeader } from "./FileHeader/FileHeader";
import { FileItem } from "./FileItem/FileItem";

interface IFolderItems {
  folderName: string;
  files: IGetFileTreeFile[];
  folderParams?: IFolderParams;
  setFolderParams: TSetFolderParams;
}

export const FolderItem: FC<IFolderItems> = ({
  folderName,
  files,
  folderParams,
  setFolderParams,
}) => {
  return (
    <li>
      <b className={css.folderName}>{folderName}</b>

      <ul>
        {!files.length && <li className={css.noItems}>Folder is empty</li>}

        {!!files.length && (
          <FileHeader
            folderName={folderName}
            folderParams={folderParams}
            setFolderParams={setFolderParams}
          />
        )}
        {files.map((file) => (
          <FileItem key={file.name} file={file} />
        ))}
      </ul>
    </li>
  );
};
