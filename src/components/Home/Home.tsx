// Учитывая формат данных бэка (первый уровень дерева - объект с папками, второй уровень - массив с файлами),
// в такой структуре вряд-ли возможно хранить более двух уровней. Т. к. названия папок хранятся в ключах объекта,
// а в массиве - этого сделать нельзя. Т. е. логически: папок на втором уровне быть не может.
// Поэтому, при разработке исходил из того, что структура файлового дерева фиксированная, нерасширяемая.

// По отображению иконок для типов файлов. Предполагал, что есть средства браузера для получения системных (локальных) иконок,
// из операционной системы. Однако в процессе поиска так понял, что на сегодняшний день таких средств нет. Поэтому добавил
// иконки в приложение. Хотя это сомнительное решение для рабочего проекта, т. к. их может быть много, что увеличивает bundle size.

import { useEffect, useState } from "react";

import { api } from "services";
import { TGetFileTreeFolderList } from "services/api/types";
import { getCookie, setCookie, showError } from "utils";
import css from "./Home.module.scss";
import { FolderItem } from "./FolderItem/FolderItem";

export type TSortField = "name" | "size" | "mtime" | "atime";

export interface IFolderParams {
  name: string;
  isExpanded: boolean;
  sortField: TSortField;
  sortIsAsc: boolean;
}

export type TSetFolderParams = (folderParams: IFolderParams) => void;

export const defaultFolderParams = {
  isExpanded: true,
  sortField: "name" as TSortField,
  sortIsAsc: true,
};

export const Home = () => {
  const [folders, setFolders] = useState<TGetFileTreeFolderList | null>(null);
  const [loading, setLoading] = useState(true);
  const [foldersParams, setFoldersParams] = useState<IFolderParams[]>([]);
  const [isRehydrated, setIsRehydrated] = useState(false);

  const foldersEntries = folders && Object.entries(folders);

  useEffect(() => {
    api
      .getFileTree()
      .then(({ data }) => {
        setFolders(data.data.files);
      })
      .catch((error) => {
        showError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isRehydrated) {
      const paramsValue = getCookie("foldersParams");
      try {
        if (paramsValue) {
          setFoldersParams(JSON.parse(paramsValue));
        }
      } finally {
        setIsRehydrated(true);
        return;
      }
    }
    setCookie("foldersParams", JSON.stringify(foldersParams));
  }, [foldersParams, isRehydrated]);

  const getFolderParams = (folderName: string) => {
    return foldersParams.find(({ name }) => name === folderName);
  };

  const setFolderParams: TSetFolderParams = (folderParams) => {
    setFoldersParams((params) => {
      const newParams = params.filter(({ name }) => {
        return name !== folderParams.name;
      });
      newParams.push(folderParams);
      return newParams;
    });
  };

  return (
    <div className={css.home}>
      <h1 className={css.title}>File tree</h1>

      <ul>
        {loading && <li className={css.loader}>Loading...</li>}

        {!loading && (
          <>
            {!foldersEntries?.length && (
              <li className={css.noItems}>No folders found</li>
            )}

            {foldersEntries?.map(([folderName, files]) => (
              <FolderItem
                key={folderName}
                folderName={folderName}
                files={files}
                folderParams={getFolderParams(folderName)}
                setFolderParams={setFolderParams}
              />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
