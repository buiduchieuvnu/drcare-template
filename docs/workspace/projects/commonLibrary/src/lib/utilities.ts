// code cũ của Trang
// export class Utilities {
//   static assetUrl(url: string): string {
//     // @ts-ignore
//     const publicPath = __webpack_public_path__;
//     const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
//     const urlPrefix = url.startsWith('/') ? '' : '/';

//     return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
//   }
// }

//code sửa lỗi đường dẫn của Tuấn
export class Utilities {
  static assetUrl(url: string): string {
    // @ts-ignore
    const publicPath: string = __webpack_public_path__;
    const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
    const urlPrefix = url.startsWith('/') ? '' : '/';
    let appName: string = '';

    if (publicPath.includes('apps')) {
      const publicPathSplit = publicPath.split('/');
      appName = publicPathSplit[publicPathSplit.length - 1];
      if (appName.length == 0) {
        appName = publicPathSplit[publicPathSplit.length - 2];
      }
    }

    if (appName.length > 0) {
      return `https://storage-emr.vnpt.vn/onehealth.ui.public/core/${appName}/assets${urlPrefix}${url}`;
    }
    return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
  }
}

//đường dẫn khi chạy trên local: http://localhost:4213/assets/icons/icons8-person-48.png
//đường dẫn hiện tại đang lấy sau khi đẩy lên MinIO: /apps/navigation/quickmenu/assets/icons/icons8-person-48.png
//đường dẫn khi đẩy lên MinIO: https://storage-emr.vnpt.vn/onehealth.ui.public/core/quickmenu/assets/icons/icons8-person-48.png
