import css from "./FileHeader.module.scss";
import { SortButton } from "./SortButton/SortButton";

export const FileHeader = () => {
  return (
    <li className={css.fileHeader}>
      <div className={css.firstCell}>
        <SortButton isActive={true} isAsc={true}>
          Name
        </SortButton>
      </div>

      <div className={css.cell}>
        <SortButton isActive={false} isAsc={true}>
          Size
        </SortButton>
      </div>

      <div className={css.cell}>
        <SortButton isActive={false} isAsc={true}>
          Created
        </SortButton>
      </div>

      <div className={css.cell}>
        <SortButton isActive={false} isAsc={true}>
          Updated
        </SortButton>
      </div>
    </li>
  );
};
