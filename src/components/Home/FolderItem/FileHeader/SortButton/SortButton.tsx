import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import css from "./SortButton.module.scss";

interface ISortButton {
  isActive: boolean;
  isAsc: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const SortButton: FC<ISortButton> = ({
  isActive,
  isAsc,
  onClick,
  children,
}) => {
  return (
    <button className={css.sortButton} onClick={onClick}>
      <span className={css.text}>{children}</span>

      <span className="fa-layers fa-xs">
        <FontAwesomeIcon
          icon={faSortUp}
          className={isActive && isAsc ? css.sortIconActive : css.sortIcon}
        />
        <FontAwesomeIcon
          icon={faSortDown}
          className={isActive && !isAsc ? css.sortIconActive : css.sortIcon}
        />
      </span>
    </button>
  );
};
