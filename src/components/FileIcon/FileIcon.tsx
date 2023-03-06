import { FC } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFileWord,
  faFilePdf,
  faFileImage,
  faFile,
} from "@fortawesome/free-regular-svg-icons";

// Не нашел инструментов в браузере для получения системных (локальных) файловых иконок.
// Так понял, что на сегодняшний день, в Chrome и Firefox таких средств нет.
// Поэтому добавил иконки в приложение. Хотя это сомнительное решение для рабочего проекта,
// т. к. негативно влияет на bundle size.

interface IFileIconOwn {
  fileExt?: string;
}
export type TFileIcon = IFileIconOwn & Omit<FontAwesomeIconProps, "icon">;

export const FileIcon: FC<TFileIcon> = ({ fileExt, ...restProps }) => {
  const getIcon = () => {
    switch (fileExt) {
      case "png":
      case "jpg":
      case "jpeg":
        return faFileImage;
      case "xls":
      case "xlsx":
        return faFileExcel;
      case "doc":
      case "docx":
        return faFileWord;
      case "pdf":
        return faFilePdf;
      default:
        return faFile;
    }
  };

  return <FontAwesomeIcon icon={getIcon()} {...restProps} />;
};
