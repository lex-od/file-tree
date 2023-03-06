import { FC } from "react";

import css from "./FileHeader.module.scss";
import { TSortField } from "components/Home/Home";
import { SortButton } from "./SortButton/SortButton";
import { THandleSortClick } from "../FolderItem";

interface IFileHeader {
  sortField: TSortField;
  sortIsAsc: boolean;
  onSortClick: THandleSortClick;
}

export const FileHeader: FC<IFileHeader> = ({
  sortField,
  sortIsAsc,
  onSortClick,
}) => {
  return (
    <li className={css.fileHeader}>
      <div className={css.firstCell}>
        <SortButton
          isActive={sortField === "name"}
          isAsc={sortIsAsc}
          onClick={() => onSortClick("name")}
        >
          Name
        </SortButton>
      </div>

      <div className={css.cell}>
        <SortButton
          isActive={sortField === "size"}
          isAsc={sortIsAsc}
          onClick={() => onSortClick("size")}
        >
          Size
        </SortButton>
      </div>

      <div className={css.cell}>
        <SortButton
          isActive={sortField === "mtime"}
          isAsc={sortIsAsc}
          onClick={() => onSortClick("mtime")}
        >
          Created
        </SortButton>
      </div>

      <div className={css.cell}>
        <SortButton
          isActive={sortField === "atime"}
          isAsc={sortIsAsc}
          onClick={() => onSortClick("atime")}
        >
          Updated
        </SortButton>
      </div>
    </li>
  );
};
