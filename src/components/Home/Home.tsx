import axios from "axios";
import { useEffect, useState } from "react";

import { api } from "services";
import { TGetFileTreeFolderList } from "services/api/types";
import { showError } from "utils";
import css from "./Home.module.scss";

export const Home = () => {
  const [folders, setFolders] = useState<TGetFileTreeFolderList | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getFileTree()
      .then(({ data }) => {
        setFolders(data.data);
      })
      .catch((error) => {
        showError(error);
        setFolders(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <div>Home</div>;
};
