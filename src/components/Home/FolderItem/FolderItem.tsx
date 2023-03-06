import { FC, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { IGetFileTreeFile } from "services/api/types";
import css from "./FolderItem.module.scss";
import {
  defaultFolderParams,
  IFolderParams,
  TSetFolderParams,
  TSortField,
} from "../Home";
import { FileHeader } from "./FileHeader/FileHeader";
import { FileItem } from "./FileItem/FileItem";

interface IFolderItems {
  folderName: string;
  files: IGetFileTreeFile[];
  folderParams?: IFolderParams;
  setFolderParams: TSetFolderParams;
}

export type THandleSortClick = (field: TSortField) => void;

export const FolderItem: FC<IFolderItems> = ({
  folderName,
  files,
  folderParams,
  setFolderParams,
}) => {
  const sortField = folderParams?.sortField || defaultFolderParams.sortField;
  const sortIsAsc = folderParams?.sortIsAsc ?? defaultFolderParams.sortIsAsc;
  const isExpanded = folderParams?.isExpanded ?? defaultFolderParams.isExpanded;

  const sortedFiles = useMemo(() => {
    const compareFn = (file1: IGetFileTreeFile, file2: IGetFileTreeFile) => {
      if (file1[sortField] > file2[sortField]) {
        return sortIsAsc ? 1 : -1;
      }
      if (file1[sortField] < file2[sortField]) {
        return sortIsAsc ? -1 : 1;
      }
      return 0;
    };
    return [...files].sort(compareFn);
  }, [sortField, sortIsAsc, files]);

  const toggleIsExpanded = () => {
    setFolderParams({
      ...defaultFolderParams,
      ...(folderParams || {}),
      name: folderName,
      isExpanded: !isExpanded,
    });
  };

  const handleSortClick: THandleSortClick = (field) => {
    const isAsc = field === sortField ? !sortIsAsc : true;

    setFolderParams({
      ...defaultFolderParams,
      ...(folderParams || {}),
      name: folderName,
      sortField: field,
      sortIsAsc: isAsc,
    });
  };

  return (
    <li>
      <div className={css.folderHeader}>
        <button className={css.folderNameBtn} onClick={toggleIsExpanded}>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="sm"
            rotation={isExpanded ? 90 : undefined}
          />
          <span>{folderName}</span>
        </button>
      </div>

      {isExpanded && (
        <ul>
          {!files.length && <li className={css.noItems}>Folder is empty</li>}

          {!!files.length && (
            <FileHeader
              sortField={sortField}
              sortIsAsc={sortIsAsc}
              onSortClick={handleSortClick}
            />
          )}
          {sortedFiles.map((file) => (
            <FileItem key={file.name} file={file} />
          ))}
        </ul>
      )}
    </li>
  );
};
