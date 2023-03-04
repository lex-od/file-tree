import css from "./FileHeader.module.scss";

export const FileHeader = () => {
  return (
    <li className={css.fileHeader}>
      <div className={css.firstCell}>
        <p>Name</p>
      </div>

      <div className={css.cell}>
        <p>Size</p>
      </div>

      <div className={css.cell}>
        <p>Created</p>
      </div>

      <div className={css.cell}>
        <p>Updated</p>
      </div>
    </li>
  );
};
