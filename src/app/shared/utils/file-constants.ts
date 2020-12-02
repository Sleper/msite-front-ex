// @ts-ignore
import {FileUploadTypes} from '@iplab/ngx-file-upload';

export class FileConstants {

  public static SIZE_SHORT_NAME = ['B', 'KB', 'MB', 'GB'];
  public static ACCEPT_FILE_TYPE = '.txt';

  public static FILE_TYPE_TXT = 'txt';

  public static getPermitAllFileTypes(): any {
    return [
      FileConstants.FILE_TYPE_TXT
    ];
  }

  public static getFileType(file) {
    return Object.keys(FileUploadTypes).find(((key) => FileUploadTypes[key] === file.type));
  }

  public static calculateSize(size, sizeIndex = 0) {
    if (isNaN(size)) {
      size = 0;
    }
    if (size < 1024) {
      return `${Math.round(size * 100) / 100} ${this.SIZE_SHORT_NAME[sizeIndex]}`;
    }
    return this.calculateSize(size / 1024, sizeIndex + 1);
  }
}
