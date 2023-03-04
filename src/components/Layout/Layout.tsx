import { FC, ReactNode } from "react";

import css from "./Layout.module.scss";

export interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return <div className={css.layout}>{children}</div>;
};
