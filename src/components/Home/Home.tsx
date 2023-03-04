import { useEffect, useState } from "react";

import { api } from "services";
import { TGetFileTreeFolderList } from "services/api/types";
import { showError } from "utils";
import css from "./Home.module.scss";
import { FolderItem } from "./FolderItem/FolderItem";

interface IFolderParam {
  name: string;
  isExpanded: boolean;
  sortField: "name" | "size" | "mtime" | "atime";
  sortIsAsc: boolean;
}

export const Home = () => {
  const [folders, setFolders] = useState<TGetFileTreeFolderList | null>(null);
  const [folderParams, setFolderParams] = useState<IFolderParam[]>([]);
  const [loading, setLoading] = useState(true);

  const foldersEntries = folders && Object.entries(folders);

  useEffect(() => {
    api
      .getFileTree()
      .then(({ data }) => {
        setFolders(data.data.files);
      })
      .catch((error) => {
        showError(error);
        setFolders(null);
        setFolderParams([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
              <FolderItem folderName={folderName} files={files} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};
