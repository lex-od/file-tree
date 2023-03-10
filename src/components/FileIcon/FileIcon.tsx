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
