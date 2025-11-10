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
    static assetUrl(url) {
        // @ts-ignore
        const publicPath = __webpack_public_path__;
        const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
        const urlPrefix = url.startsWith('/') ? '' : '/';
        let appName = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uTGlicmFyeS9zcmMvbGliL3V0aWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsMkJBQTJCO0FBQzNCLDJDQUEyQztBQUMzQyxvQkFBb0I7QUFDcEIsa0RBQWtEO0FBQ2xELG9FQUFvRTtBQUNwRSx3REFBd0Q7QUFFeEQseUVBQXlFO0FBQ3pFLE1BQU07QUFDTixJQUFJO0FBRUosaUNBQWlDO0FBQ2pDLE1BQU0sT0FBTyxTQUFTO0lBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBVztRQUN6QixhQUFhO1FBQ2IsTUFBTSxVQUFVLEdBQVcsdUJBQXVCLENBQUM7UUFDbkQsTUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3RCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNqRCxJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUM7UUFFekIsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDaEMsTUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QyxPQUFPLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN4QixPQUFPLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdkIsT0FBTyx3REFBd0QsT0FBTyxVQUFVLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNwRyxDQUFDO1FBQ0QsT0FBTyxHQUFHLFVBQVUsR0FBRyxnQkFBZ0IsU0FBUyxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDcEUsQ0FBQztDQUNGO0FBRUQsd0ZBQXdGO0FBQ3hGLGlIQUFpSDtBQUNqSCwrSEFBK0giLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb2RlIGPFqSBj4bunYSBUcmFuZ1xyXG4vLyBleHBvcnQgY2xhc3MgVXRpbGl0aWVzIHtcclxuLy8gICBzdGF0aWMgYXNzZXRVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4vLyAgICAgLy8gQHRzLWlnbm9yZVxyXG4vLyAgICAgY29uc3QgcHVibGljUGF0aCA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fO1xyXG4vLyAgICAgY29uc3QgcHVibGljUGF0aFN1ZmZpeCA9IHB1YmxpY1BhdGguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nO1xyXG4vLyAgICAgY29uc3QgdXJsUHJlZml4ID0gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/ICcnIDogJy8nO1xyXG5cclxuLy8gICAgIHJldHVybiBgJHtwdWJsaWNQYXRofSR7cHVibGljUGF0aFN1ZmZpeH1hc3NldHMke3VybFByZWZpeH0ke3VybH1gO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy9jb2RlIHPhu61hIGzhu5dpIMSRxrDhu51uZyBk4bqrbiBj4bunYSBUdeG6pW5cclxuZXhwb3J0IGNsYXNzIFV0aWxpdGllcyB7XHJcbiAgc3RhdGljIGFzc2V0VXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHB1YmxpY1BhdGg6IHN0cmluZyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fO1xyXG4gICAgY29uc3QgcHVibGljUGF0aFN1ZmZpeCA9IHB1YmxpY1BhdGguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nO1xyXG4gICAgY29uc3QgdXJsUHJlZml4ID0gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/ICcnIDogJy8nO1xyXG4gICAgbGV0IGFwcE5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlmIChwdWJsaWNQYXRoLmluY2x1ZGVzKCdhcHBzJykpIHtcclxuICAgICAgY29uc3QgcHVibGljUGF0aFNwbGl0ID0gcHVibGljUGF0aC5zcGxpdCgnLycpO1xyXG4gICAgICBhcHBOYW1lID0gcHVibGljUGF0aFNwbGl0W3B1YmxpY1BhdGhTcGxpdC5sZW5ndGggLSAxXTtcclxuICAgICAgaWYgKGFwcE5hbWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICBhcHBOYW1lID0gcHVibGljUGF0aFNwbGl0W3B1YmxpY1BhdGhTcGxpdC5sZW5ndGggLSAyXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcHBOYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGBodHRwczovL3N0b3JhZ2UtZW1yLnZucHQudm4vb25laGVhbHRoLnVpLnB1YmxpYy9jb3JlLyR7YXBwTmFtZX0vYXNzZXRzJHt1cmxQcmVmaXh9JHt1cmx9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBgJHtwdWJsaWNQYXRofSR7cHVibGljUGF0aFN1ZmZpeH1hc3NldHMke3VybFByZWZpeH0ke3VybH1gO1xyXG4gIH1cclxufVxyXG5cclxuLy/Ekcaw4budbmcgZOG6q24ga2hpIGNo4bqheSB0csOqbiBsb2NhbDogaHR0cDovL2xvY2FsaG9zdDo0MjEzL2Fzc2V0cy9pY29ucy9pY29uczgtcGVyc29uLTQ4LnBuZ1xyXG4vL8SRxrDhu51uZyBk4bqrbiBoaeG7h24gdOG6oWkgxJFhbmcgbOG6pXkgc2F1IGtoaSDEkeG6qXkgbMOqbiBNaW5JTzogL2FwcHMvbmF2aWdhdGlvbi9xdWlja21lbnUvYXNzZXRzL2ljb25zL2ljb25zOC1wZXJzb24tNDgucG5nXHJcbi8vxJHGsOG7nW5nIGThuqtuIGtoaSDEkeG6qXkgbMOqbiBNaW5JTzogaHR0cHM6Ly9zdG9yYWdlLWVtci52bnB0LnZuL29uZWhlYWx0aC51aS5wdWJsaWMvY29yZS9xdWlja21lbnUvYXNzZXRzL2ljb25zL2ljb25zOC1wZXJzb24tNDgucG5nXHJcbiJdfQ==