import { FC } from "react";

import css from "./FileHeader.module.scss";
import {
  defaultFolderParams,
  IFolderParams,
  TSetFolderParams,
  TSortField,
} from "components/Home/Home";
import { SortButton } from "./SortButton/SortButton";

interface IFileHeader {
  folderName: string;
  folderParams?: IFolderParams;
  setFolderParams: TSetFolderParams;
}

export const FileHeader: FC<IFileHeader> = ({
  folderName,
  folderParams,
  setFolderParams,
}) => {
  const sortField = folderParams?.sortField || defaultFolderParams.sortField;
  const sortIsAsc = folderParams?.sortIsAsc ?? defaultFolderParams.sortIsAsc;

  const handleSortClick = (field: TSortField) => {
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
    <li className={css.fileHeader}>
      <div className={css.firstCell}>
        <SortButton
          isActive={sortField === "name"}
          isAsc={sortIsAsc}
          onClick={() => handleSortClick("name")}
        >
          Name
        </SortButton>
      </div>

      <div className={css.cell}>
        <SortButton
          isActive={sortField === "size"}
          isAsc={sortIsAsc}
          onClick={() => handleSortClick("size")}
        >
          Size
        </SortButton>
      </div>

      <div className={css.cell}>
        <SortButton
          isActive={sortField === "mtime"}
          isAsc={sortIsAsc}
          onClick={() => handleSortClick("mtime")}
        >
          Created
        </SortButton>
      </div>

      <div className={css.cell}>
        <SortButton
          isActive={sortField === "atime"}
          isAsc={sortIsAsc}
          onClick={() => handleSortClick("atime")}
        >
          Updated
        </SortButton>
      </div>
    </li>
  );
};
