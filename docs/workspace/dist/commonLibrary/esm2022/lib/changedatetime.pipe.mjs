import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ChangeDateTimePipe {
    transform(value) {
        let reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
        let dateArray = reggie.exec(value);
        let dataObject = new Date(+dateArray[1], +dateArray[2] - 1, +dateArray[3], +dateArray[4], +dateArray[5], +dateArray[6]);
        let timenow = new Date();
        let date;
        let month;
        let hour;
        let minute;
        let second;
        if (dataObject.getFullYear() < timenow.getFullYear()) {
            return dataObject.toLocaleDateString();
        }
        else if (dataObject.getFullYear() == timenow.getFullYear()) {
            if (dataObject.getMonth() < timenow.getMonth()) {
                month = timenow.getMonth() - dataObject.getMonth();
                return month + ' ' + 'tháng trước';
            }
            else if (dataObject.getMonth() == timenow.getMonth()) {
                if (dataObject.getDate() < timenow.getDate()) {
                    date = timenow.getDate() - dataObject.getDate();
                    return date + ' ' + 'ngày trước';
                }
                else if (dataObject.getDate() == timenow.getDate()) {
                    if (dataObject.getHours() < timenow.getHours()) {
                        hour = timenow.getHours() - dataObject.getHours();
                        return hour + ' ' + 'giờ trước';
                    }
                    else if (dataObject.getHours() == timenow.getHours()) {
                        if (dataObject.getMinutes() < timenow.getMinutes()) {
                            minute = timenow.getMinutes() - dataObject.getMinutes();
                            return minute + ' ' + 'phút trước';
                        }
                        else if (dataObject.getMinutes() == timenow.getMinutes()) {
                            if (dataObject.getSeconds() < timenow.getSeconds()) {
                                second = timenow.getSeconds() - dataObject.getSeconds();
                                return second + ' ' + 'giây trước';
                            }
                            else if (dataObject.getSeconds() == timenow.getSeconds()) {
                                return 'less than a minute';
                            }
                        }
                    }
                }
            }
        }
    }
    static ɵfac = function ChangeDateTimePipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChangeDateTimePipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "changeDateTime", type: ChangeDateTimePipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangeDateTimePipe, [{
        type: Pipe,
        args: [{ name: 'changeDateTime' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlZGF0ZXRpbWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9jaGFuZ2VkYXRldGltZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksTUFBTSxHQUFHLGlEQUFpRCxDQUFDO1FBQy9ELElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQ3ZCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDakIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ2QsQ0FBQztRQUNGLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1lBQ3JELE9BQU8sVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekMsQ0FBQzthQUFNLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1lBQzdELElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO2dCQUMvQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbkQsT0FBTyxLQUFLLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQztZQUNyQyxDQUFDO2lCQUFNLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO2dCQUN2RCxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztvQkFDN0MsSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2hELE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7Z0JBQ25DLENBQUM7cUJBQU0sSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7b0JBQ3JELElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO3dCQUMvQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDbEQsT0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQztvQkFDbEMsQ0FBQzt5QkFBTSxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQzt3QkFDdkQsSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7NEJBQ25ELE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDOzRCQUN4RCxPQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO3dCQUNyQyxDQUFDOzZCQUFNLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDOzRCQUMzRCxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztnQ0FDbkQsTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7Z0NBQ3hELE9BQU8sTUFBTSxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7NEJBQ3JDLENBQUM7aUNBQU0sSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7Z0NBQzNELE9BQU8sb0JBQW9CLENBQUM7NEJBQzlCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7NEdBaERVLGtCQUFrQjtpRkFBbEIsa0JBQWtCOztpRkFBbEIsa0JBQWtCO2NBRDlCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQFBpcGUoeyBuYW1lOiAnY2hhbmdlRGF0ZVRpbWUnIH0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VEYXRlVGltZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVnZ2llID0gLyhcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pIChcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0pLztcclxuICAgIGxldCBkYXRlQXJyYXkgPSByZWdnaWUuZXhlYyh2YWx1ZSk7XHJcbiAgICBsZXQgZGF0YU9iamVjdCA9IG5ldyBEYXRlKFxyXG4gICAgICArZGF0ZUFycmF5WzFdLFxyXG4gICAgICArZGF0ZUFycmF5WzJdIC0gMSxcclxuICAgICAgK2RhdGVBcnJheVszXSxcclxuICAgICAgK2RhdGVBcnJheVs0XSxcclxuICAgICAgK2RhdGVBcnJheVs1XSxcclxuICAgICAgK2RhdGVBcnJheVs2XVxyXG4gICAgKTtcclxuICAgIGxldCB0aW1lbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXRlO1xyXG4gICAgbGV0IG1vbnRoO1xyXG4gICAgbGV0IGhvdXI7XHJcbiAgICBsZXQgbWludXRlO1xyXG4gICAgbGV0IHNlY29uZDtcclxuICAgIGlmIChkYXRhT2JqZWN0LmdldEZ1bGxZZWFyKCkgPCB0aW1lbm93LmdldEZ1bGxZZWFyKCkpIHtcclxuICAgICAgcmV0dXJuIGRhdGFPYmplY3QudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGFPYmplY3QuZ2V0RnVsbFllYXIoKSA9PSB0aW1lbm93LmdldEZ1bGxZZWFyKCkpIHtcclxuICAgICAgaWYgKGRhdGFPYmplY3QuZ2V0TW9udGgoKSA8IHRpbWVub3cuZ2V0TW9udGgoKSkge1xyXG4gICAgICAgIG1vbnRoID0gdGltZW5vdy5nZXRNb250aCgpIC0gZGF0YU9iamVjdC5nZXRNb250aCgpO1xyXG4gICAgICAgIHJldHVybiBtb250aCArICcgJyArICd0aMOhbmcgdHLGsOG7m2MnO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFPYmplY3QuZ2V0TW9udGgoKSA9PSB0aW1lbm93LmdldE1vbnRoKCkpIHtcclxuICAgICAgICBpZiAoZGF0YU9iamVjdC5nZXREYXRlKCkgPCB0aW1lbm93LmdldERhdGUoKSkge1xyXG4gICAgICAgICAgZGF0ZSA9IHRpbWVub3cuZ2V0RGF0ZSgpIC0gZGF0YU9iamVjdC5nZXREYXRlKCk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0ZSArICcgJyArICduZ8OgeSB0csaw4bubYyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhT2JqZWN0LmdldERhdGUoKSA9PSB0aW1lbm93LmdldERhdGUoKSkge1xyXG4gICAgICAgICAgaWYgKGRhdGFPYmplY3QuZ2V0SG91cnMoKSA8IHRpbWVub3cuZ2V0SG91cnMoKSkge1xyXG4gICAgICAgICAgICBob3VyID0gdGltZW5vdy5nZXRIb3VycygpIC0gZGF0YU9iamVjdC5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICByZXR1cm4gaG91ciArICcgJyArICdnaeG7nSB0csaw4bubYyc7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFPYmplY3QuZ2V0SG91cnMoKSA9PSB0aW1lbm93LmdldEhvdXJzKCkpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFPYmplY3QuZ2V0TWludXRlcygpIDwgdGltZW5vdy5nZXRNaW51dGVzKCkpIHtcclxuICAgICAgICAgICAgICBtaW51dGUgPSB0aW1lbm93LmdldE1pbnV0ZXMoKSAtIGRhdGFPYmplY3QuZ2V0TWludXRlcygpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBtaW51dGUgKyAnICcgKyAncGjDunQgdHLGsOG7m2MnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFPYmplY3QuZ2V0TWludXRlcygpID09IHRpbWVub3cuZ2V0TWludXRlcygpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGFPYmplY3QuZ2V0U2Vjb25kcygpIDwgdGltZW5vdy5nZXRTZWNvbmRzKCkpIHtcclxuICAgICAgICAgICAgICAgIHNlY29uZCA9IHRpbWVub3cuZ2V0U2Vjb25kcygpIC0gZGF0YU9iamVjdC5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vjb25kICsgJyAnICsgJ2dpw6J5IHRyxrDhu5tjJztcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFPYmplY3QuZ2V0U2Vjb25kcygpID09IHRpbWVub3cuZ2V0U2Vjb25kcygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xlc3MgdGhhbiBhIG1pbnV0ZSc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==