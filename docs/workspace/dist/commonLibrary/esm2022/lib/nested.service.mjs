import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NestedService {
    updatePropertydById(arr, keyproperty, idToChange, property, newValue) {
        return arr.map((item) => {
            if (item[keyproperty] === idToChange) {
                item[property] = newValue;
                this.updateAllChildrenPropertyd(item, property, newValue);
            }
            if (item.children) {
                item.children = this.updatePropertydById(item.children, keyproperty, idToChange, property, newValue);
            }
            return item;
        });
    }
    updateAllChildrenPropertyd(item, changeProperty, newValue) {
        if (item.children) {
            item.children.forEach((child) => {
                child[changeProperty] = newValue;
                this.updateAllChildrenPropertyd(child, changeProperty, newValue);
            });
        }
    }
    collapse(array, data, $event, keyProperty = 'key') {
        if (!$event) {
            if (data.children) {
                data.children.forEach((d) => {
                    const target = array.find((a) => a[keyProperty] === d[keyProperty]);
                    target.expand = false;
                    this.collapse(array, target, false);
                });
            }
            else {
                return;
            }
        }
    }
    convertTreeToList(root, defaultExpand = true, keyProperty = 'key') {
        const stack = [];
        const array = [];
        const hashMap = {};
        stack.push({ ...root, level: 0, expand: defaultExpand });
        while (stack.length !== 0) {
            const node = stack.pop();
            this.visitNode(node, hashMap, array, keyProperty);
            if (node.children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push({
                        ...node.children[i],
                        level: node.level + 1,
                        expand: defaultExpand,
                        parent: node,
                    });
                }
            }
        }
        return array;
    }
    visitNode(node, hashMap, array, keyProperty = 'key') {
        if (!hashMap[node[keyProperty]]) {
            hashMap[node[keyProperty]] = true;
            array.push(node);
        }
    }
    addIsLeafToNestedObject(node) {
        if (!node.children || node.children.length === 0) {
            node.isLeaf = true;
        }
        else {
            for (const child of node.children) {
                this.addIsLeafToNestedObject(child);
            }
        }
        return node;
    }
    // làm phẳng dữ liệu: nếu dữ liệu là kiểu lồng nhau thì cho nó phẳng
    // input:
    //    - menuItem: danh sách cần làm phẳng
    //    - parentProperty: thuộc tính cha (chỉ là object)
    //    - childrenProperty: thuộc tính con (chỉ là array)
    //    - distinctProperty: thuộc tính dùng để phân biệt (thường id hoặc code)
    flattenArray(menuItems, parentProperty, childrenProperty, distinctProperty) {
        let seen = new Set();
        const flattenedItems = [];
        for (const menuItem of menuItems) {
            const flattenedItem = { ...menuItem };
            flattenedItems.push(flattenedItem);
            if (menuItem[childrenProperty]) {
                if (Array.isArray(menuItem[childrenProperty])) {
                    const nestedItems = this.flattenArray(menuItem[childrenProperty], parentProperty, childrenProperty, distinctProperty);
                    flattenedItems.push(...nestedItems);
                }
                else {
                    const nestedItems = this.flattenArray([menuItem[childrenProperty]], parentProperty, childrenProperty, distinctProperty);
                    flattenedItems.push(...nestedItems);
                }
            }
            if (menuItem[parentProperty]) {
                if (!Array.isArray(menuItem[parentProperty]) &&
                    menuItem[parentProperty][distinctProperty]) {
                    const nestedItems = this.flattenArray([menuItem[parentProperty]], parentProperty, childrenProperty, distinctProperty);
                    flattenedItems.push(...nestedItems);
                }
                else if (Array.isArray(menuItem[parentProperty])) {
                    const nestedItems = this.flattenArray(menuItem[parentProperty], parentProperty, childrenProperty, distinctProperty);
                    flattenedItems.push(...nestedItems);
                }
            }
        }
        let uniqueArray = flattenedItems.filter((item) => {
            let duplicate = seen.has(item[distinctProperty]);
            seen.add(item[distinctProperty]);
            return !duplicate;
        });
        return uniqueArray;
    }
    // dựng dữ liệu kiểu nested: dữ liệu lồng nhau
    // input:
    //    - arr: danh sách
    //    - compareProperty: thuộc tính dùng để phân biệt (mặc định là id)
    //    - parentProperty: thuộc tính cha (mặc định là parent)
    //    - compareValue: giá trị so sánh
    // quy trình
    //    - tìm danh sach các object có giá trị bằng compareValue
    //    - dùng vòng lặp để tìm các con của object trong danh sách trên (lúc này giá trị so sánh sẽ là giá trị compareProperty )
    //    - gán giá trị children là danh sách con tìm được
    buildNested(arr, compareProperty = 'id', parentProperty = 'parent', compareValue = undefined) {
        if (arr && arr.length > 0) {
            let result = [];
            const list = compareValue != undefined
                ? arr.filter((x) => (x[parentProperty]
                    ? x[parentProperty][compareProperty]
                    : undefined) === compareValue)
                : arr.filter((x) => !x[parentProperty]);
            if (list.length > 0) {
                for (let item of list) {
                    let children = this.buildNested(arr, compareProperty, parentProperty, item[compareProperty]);
                    if (children.length) {
                        item.children = children;
                    }
                    delete item[parentProperty];
                    result.push({ ...item });
                }
            }
            return result;
        }
        return [];
    }
    findDfs(array, key, targetId, childrenProperty) {
        let result = null;
        array.forEach((obj) => {
            if (obj[key] === targetId) {
                result = obj;
            }
            if (obj[childrenProperty]) {
                const check = this.findDfs(obj[childrenProperty], key, targetId, childrenProperty);
                if (check) {
                    result = check;
                    return;
                }
            }
        });
        return result;
    }
    stringToObject = (result, inputString, value) => {
        if (!value || !inputString) {
            return;
        }
        const key = inputString.trim();
        const keys = key.split('.');
        const finalKey = keys.pop();
        let nestedObj = result;
        for (const nestedKey of keys) {
            nestedObj[nestedKey] = {};
            nestedObj = nestedObj[nestedKey];
        }
        if (nestedObj[finalKey]) {
            if (Array.isArray(nestedObj[finalKey])) {
                nestedObj[finalKey] = [...nestedObj[finalKey]];
            }
            else {
                nestedObj[finalKey] = [nestedObj[finalKey]];
            }
            nestedObj[finalKey].push(value);
        }
        else {
            nestedObj[finalKey] = value;
        }
        return result;
    };
    getProperty = (inputStr, obj) => {
        if (inputStr) {
            const properties = inputStr.split('.');
            let currentObj = obj;
            for (const prop of properties) {
                if (currentObj.hasOwnProperty(prop)) {
                    currentObj = currentObj[prop];
                }
                else {
                    return null;
                }
            }
            return currentObj;
        }
        return obj;
    };
    static ɵfac = function NestedService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NestedService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NestedService, factory: NestedService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NestedService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvbmVzdGVkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJM0MsTUFBTSxPQUFPLGFBQWE7SUFDakIsbUJBQW1CLENBQ3hCLEdBQVUsRUFDVixXQUFnQixFQUNoQixVQUFlLEVBQ2YsUUFBYSxFQUNiLFFBQWE7UUFFYixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxVQUFVLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FDdEMsSUFBSSxDQUFDLFFBQVEsRUFDYixXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLENBQ1QsQ0FBQztZQUNKLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDBCQUEwQixDQUFDLElBQVMsRUFBRSxjQUFtQixFQUFFLFFBQWE7UUFDdEUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDbkMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztnQkFDakMsSUFBSSxD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QUksQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO3FCQUFNLENBQUM7b0JBQ04sT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztZQUNILENBQUM7WUFDRCxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUM7dUdBeFJTLGFBQWE7Z0VBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTs7aUZBRVAsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXN0ZWRTZXJ2aWNlIHtcclxuICBwdWJsaWMgdXBkYXRlUHJvcGVydHlkQnlJZChcclxuICAgIGFycjogYW55W10sXHJcbiAgICBrZXlwcm9wZXJ0eTogYW55LFxyXG4gICAgaWRUb0NoYW5nZTogYW55LFxyXG4gICAgcHJvcGVydHk6IGFueSxcclxuICAgIG5ld1ZhbHVlOiBhbnlcclxuICApOiBhbnkge1xyXG4gICAgcmV0dXJuIGFyci5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW1ba2V5cHJvcGVydHldID09PSBpZFRvQ2hhbmdlKSB7XHJcbiAgICAgICAgaXRlbVtwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFsbENoaWxkcmVuUHJvcGVydHlkKGl0ZW0sIHByb3BlcnR5LCBuZXdWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICBpdGVtLmNoaWxkcmVuID0gdGhpcy51cGRhdGVQcm9wZXJ0eWRCeUlkKFxyXG4gICAgICAgICAgaXRlbS5jaGlsZHJlbixcclxuICAgICAgICAgIGtleXByb3BlcnR5LFxyXG4gICAgICAgICAgaWRUb0NoYW5nZSxcclxuICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgbmV3VmFsdWVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHVwZGF0ZUFsbENoaWxkcmVuUHJvcGVydHlkKGl0ZW06IGFueSwgY2hhbmdlUHJvcGVydHk6IGFueSwgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgaXRlbS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogYW55KSA9PiB7XHJcbiAgICAgICAgY2hpbGRbY2hhbmdlUHJvcGVydHldID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGxDaGlsZHJlblByb3BlcnR5ZChjaGlsZCwgY2hhbmdlUHJvcGVydHksIG5ld1ZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbGxhcHNlKFxyXG4gICAgYXJyYXk6IGFueVtdLFxyXG4gICAgZGF0YTogYW55LFxyXG4gICAgJGV2ZW50OiBib29sZWFuLFxyXG4gICAga2V5UHJvcGVydHkgPSAna2V5J1xyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKCEkZXZlbnQpIHtcclxuICAgICAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICBkYXRhLmNoaWxkcmVuLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGFycmF5LmZpbmQoKGEpID0+IGFba2V5UHJvcGVydHldID09PSBkW2tleVByb3BlcnR5XSkhO1xyXG4gICAgICAgICAgdGFyZ2V0LmV4cGFuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jb2xsYXBzZShhcnJheSwgdGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VHJlZVRvTGlzdChcclxuICAgIHJvb3Q6IGFueSxcclxuICAgIGRlZmF1bHRFeHBhbmQgPSB0cnVlLFxyXG4gICAga2V5UHJvcGVydHkgPSAna2V5J1xyXG4gICk6IGFueVtdIHtcclxuICAgIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgYXJyYXk6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHsgLi4ucm9vdCwgbGV2ZWw6IDAsIGV4cGFuZDogZGVmYXVsdEV4cGFuZCB9KTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5wb3AoKSE7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUsIGhhc2hNYXAsIGFycmF5LCBrZXlQcm9wZXJ0eSk7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goe1xyXG4gICAgICAgICAgICAuLi5ub2RlLmNoaWxkcmVuW2ldLFxyXG4gICAgICAgICAgICBsZXZlbDogbm9kZS5sZXZlbCEgKyAxLFxyXG4gICAgICAgICAgICBleHBhbmQ6IGRlZmF1bHRFeHBhbmQsXHJcbiAgICAgICAgICAgIHBhcmVudDogbm9kZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcbiAgdmlzaXROb2RlKG5vZGU6IGFueSwgaGFzaE1hcDogYW55LCBhcnJheTogYW55W10sIGtleVByb3BlcnR5ID0gJ2tleScpOiB2b2lkIHtcclxuICAgIGlmICghaGFzaE1hcFtub2RlW2tleVByb3BlcnR5XV0pIHtcclxuICAgICAgaGFzaE1hcFtub2RlW2tleVByb3BlcnR5XV0gPSB0cnVlO1xyXG4gICAgICBhcnJheS5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhZGRJc0xlYWZUb05lc3RlZE9iamVjdChub2RlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFub2RlLmNoaWxkcmVuIHx8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIG5vZGUuaXNMZWFmID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIHRoaXMuYWRkSXNMZWFmVG9OZXN0ZWRPYmplY3QoY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZTtcclxuICB9XHJcblxyXG4gIC8vIGzDoG0gcGjhurNuZyBk4buvIGxp4buHdTogbuG6v3UgZOG7ryBsaeG7h3UgbMOgIGtp4buDdSBs4buTbmcgbmhhdSB0aMOsIGNobyBuw7MgcGjhurNuZ1xyXG4gIC8vIGlucHV0OlxyXG4gIC8vICAgIC0gbWVudUl0ZW06IGRhbmggc8OhY2ggY+G6p24gbMOgbSBwaOG6s25nXHJcbiAgLy8gICAgLSBwYXJlbnRQcm9wZXJ0eTogdGh14buZYyB0w61uaCBjaGEgKGNo4buJIGzDoCBvYmplY3QpXHJcbiAgLy8gICAgLSBjaGlsZHJlblByb3BlcnR5OiB0aHXhu5ljIHTDrW5oIGNvbiAoY2jhu4kgbMOgIGFycmF5KVxyXG4gIC8vICAgIC0gZGlzdGluY3RQcm9wZXJ0eTogdGh14buZYyB0w61uaCBkw7luZyDEkeG7gyBwaMOibiBiaeG7h3QgKHRoxrDhu51uZyBpZCBob+G6t2MgY29kZSlcclxuXHJcbiAgZmxhdHRlbkFycmF5KFxyXG4gICAgbWVudUl0ZW1zOiBhbnlbXSxcclxuICAgIHBhcmVudFByb3BlcnR5OiBzdHJpbmcsXHJcbiAgICBjaGlsZHJlblByb3BlcnR5OiBzdHJpbmcsXHJcbiAgICBkaXN0aW5jdFByb3BlcnR5OiBzdHJpbmdcclxuICApOiBhbnlbXSB7XHJcbiAgICBsZXQgc2VlbiA9IG5ldyBTZXQoKTtcclxuICAgIGNvbnN0IGZsYXR0ZW5lZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBtZW51SXRlbSBvZiBtZW51SXRlbXMpIHtcclxuICAgICAgY29uc3QgZmxhdHRlbmVkSXRlbSA9IHsgLi4ubWVudUl0ZW0gfTtcclxuICAgICAgZmxhdHRlbmVkSXRlbXMucHVzaChmbGF0dGVuZWRJdGVtKTtcclxuICAgICAgaWYgKG1lbnVJdGVtW2NoaWxkcmVuUHJvcGVydHldKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudUl0ZW1bY2hpbGRyZW5Qcm9wZXJ0eV0pKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXN0ZWRJdGVtcyA9IHRoaXMuZmxhdHRlbkFycmF5KFxyXG4gICAgICAgICAgICBtZW51SXRlbVtjaGlsZHJlblByb3BlcnR5XSxcclxuICAgICAgICAgICAgcGFyZW50UHJvcGVydHksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuUHJvcGVydHksXHJcbiAgICAgICAgICAgIGRpc3RpbmN0UHJvcGVydHlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBmbGF0dGVuZWRJdGVtcy5wdXNoKC4uLm5lc3RlZEl0ZW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbmVzdGVkSXRlbXMgPSB0aGlzLmZsYXR0ZW5BcnJheShcclxuICAgICAgICAgICAgW21lbnVJdGVtW2NoaWxkcmVuUHJvcGVydHldXSxcclxuICAgICAgICAgICAgcGFyZW50UHJvcGVydHksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuUHJvcGVydHksXHJcbiAgICAgICAgICAgIGRpc3RpbmN0UHJvcGVydHlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBmbGF0dGVuZWRJdGVtcy5wdXNoKC4uLm5lc3RlZEl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lbnVJdGVtW3BhcmVudFByb3BlcnR5XSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICFBcnJheS5pc0FycmF5KG1lbnVJdGVtW3BhcmVudFByb3BlcnR5XSkgJiZcclxuICAgICAgICAgIG1lbnVJdGVtW3BhcmVudFByb3BlcnR5XVtkaXN0aW5jdFByb3BlcnR5XVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY29uc3QgbmVzdGVkSXRlbXMgPSB0aGlzLmZsYXR0ZW5BcnJheShcclxuICAgICAgICAgICAgW21lbnVJdGVtW3BhcmVudFByb3BlcnR5XV0sXHJcbiAgICAgICAgICAgIHBhcmVudFByb3BlcnR5LFxyXG4gICAgICAgICAgICBjaGlsZHJlblByb3BlcnR5LFxyXG4gICAgICAgICAgICBkaXN0aW5jdFByb3BlcnR5XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZmxhdHRlbmVkSXRlbXMucHVzaCguLi5uZXN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1lbnVJdGVtW3BhcmVudFByb3BlcnR5XSkpIHtcclxuICAgICAgICAgIGNvbnN0IG5lc3RlZEl0ZW1zID0gdGhpcy5mbGF0dGVuQXJyYXkoXHJcbiAgICAgICAgICAgIG1lbnVJdGVtW3BhcmVudFByb3BlcnR5XSxcclxuICAgICAgICAgICAgcGFyZW50UHJvcGVydHksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuUHJvcGVydHksXHJcbiAgICAgICAgICAgIGRpc3RpbmN0UHJvcGVydHlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBmbGF0dGVuZWRJdGVtcy5wdXNoKC4uLm5lc3RlZEl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCB1bmlxdWVBcnJheSA9IGZsYXR0ZW5lZEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICBsZXQgZHVwbGljYXRlID0gc2Vlbi5oYXMoaXRlbVtkaXN0aW5jdFByb3BlcnR5XSk7XHJcbiAgICAgIHNlZW4uYWRkKGl0ZW1bZGlzdGluY3RQcm9wZXJ0eV0pO1xyXG4gICAgICByZXR1cm4gIWR1cGxpY2F0ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHVuaXF1ZUFycmF5O1xyXG4gIH1cclxuXHJcbiAgLy8gZOG7sW5nIGThu68gbGnhu4d1IGtp4buDdSBuZXN0ZWQ6IGThu68gbGnhu4d1IGzhu5NuZyBuaGF1XHJcbiAgLy8gaW5wdXQ6XHJcbiAgLy8gICAgLSBhcnI6IGRhbmggc8OhY2hcclxuICAvLyAgICAtIGNvbXBhcmVQcm9wZXJ0eTogdGh14buZYyB0w61uaCBkw7luZyDEkeG7gyBwaMOibiBiaeG7h3QgKG3hurdjIMSR4buLbmggbMOgIGlkKVxyXG4gIC8vICAgIC0gcGFyZW50UHJvcGVydHk6IHRodeG7mWMgdMOtbmggY2hhICht4bq3YyDEkeG7i25oIGzDoCBwYXJlbnQpXHJcbiAgLy8gICAgLSBjb21wYXJlVmFsdWU6IGdpw6EgdHLhu4sgc28gc8OhbmhcclxuXHJcbiAgLy8gcXV5IHRyw6xuaFxyXG4gIC8vICAgIC0gdMOsbSBkYW5oIHNhY2ggY8OhYyBvYmplY3QgY8OzIGdpw6EgdHLhu4sgYuG6sW5nIGNvbXBhcmVWYWx1ZVxyXG4gIC8vICAgIC0gZMO5bmcgdsOybmcgbOG6t3AgxJHhu4MgdMOsbSBjw6FjIGNvbiBj4bunYSBvYmplY3QgdHJvbmcgZGFuaCBzw6FjaCB0csOqbiAobMO6YyBuw6B5IGdpw6EgdHLhu4sgc28gc8Ohbmggc+G6vSBsw6AgZ2nDoSB0cuG7iyBjb21wYXJlUHJvcGVydHkgKVxyXG4gIC8vICAgIC0gZ8OhbiBnacOhIHRy4buLIGNoaWxkcmVuIGzDoCBkYW5oIHPDoWNoIGNvbiB0w6xtIMSRxrDhu6NjXHJcbiAgYnVpbGROZXN0ZWQoXHJcbiAgICBhcnI6IGFueVtdLFxyXG4gICAgY29tcGFyZVByb3BlcnR5ID0gJ2lkJyxcclxuICAgIHBhcmVudFByb3BlcnR5ID0gJ3BhcmVudCcsXHJcbiAgICBjb21wYXJlVmFsdWU6IGFueSA9IHVuZGVmaW5lZFxyXG4gICk6IGFueVtdIHtcclxuICAgIGlmIChhcnIgJiYgYXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICBjb25zdCBsaXN0ID1cclxuICAgICAgICBjb21wYXJlVmFsdWUgIT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IGFyci5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKHgpID0+XHJcbiAgICAgICAgICAgICAgICAoeFtwYXJlbnRQcm9wZXJ0eV1cclxuICAgICAgICAgICAgICAgICAgPyB4W3BhcmVudFByb3BlcnR5XVtjb21wYXJlUHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKSA9PT0gY29tcGFyZVZhbHVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIDogYXJyLmZpbHRlcigoeCkgPT4gIXhbcGFyZW50UHJvcGVydHldKTtcclxuXHJcbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3QpIHtcclxuICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuYnVpbGROZXN0ZWQoXHJcbiAgICAgICAgICAgIGFycixcclxuICAgICAgICAgICAgY29tcGFyZVByb3BlcnR5LFxyXG4gICAgICAgICAgICBwYXJlbnRQcm9wZXJ0eSxcclxuICAgICAgICAgICAgaXRlbVtjb21wYXJlUHJvcGVydHldXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWxldGUgaXRlbVtwYXJlbnRQcm9wZXJ0eV07XHJcbiAgICAgICAgICByZXN1bHQucHVzaCh7IC4uLml0ZW0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZERmcyhcclxuICAgIGFycmF5OiBhbnlbXSxcclxuICAgIGtleTogYW55LFxyXG4gICAgdGFyZ2V0SWQ6IGFueSxcclxuICAgIGNoaWxkcmVuUHJvcGVydHk6IGFueVxyXG4gICk6IGFueSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgIGFycmF5LmZvckVhY2goKG9iajogYW55KSA9PiB7XHJcbiAgICAgIGlmIChvYmpba2V5XSA9PT0gdGFyZ2V0SWQpIHtcclxuICAgICAgICByZXN1bHQgPSBvYmo7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9ialtjaGlsZHJlblByb3BlcnR5XSkge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrOiBhbnkgPSB0aGlzLmZpbmREZnMoXHJcbiAgICAgICAgICBvYmpbY2hpbGRyZW5Qcm9wZXJ0eV0sXHJcbiAgICAgICAgICBrZXksXHJcbiAgICAgICAgICB0YXJnZXRJZCxcclxuICAgICAgICAgIGNoaWxkcmVuUHJvcGVydHlcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChjaGVjaykge1xyXG4gICAgICAgICAgcmVzdWx0ID0gY2hlY2s7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIHN0cmluZ1RvT2JqZWN0ID0gKHJlc3VsdDogYW55LCBpbnB1dFN0cmluZzogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlIHx8ICFpbnB1dFN0cmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXkgPSBpbnB1dFN0cmluZy50cmltKCk7XHJcblxyXG4gICAgY29uc3Qga2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG5cclxuICAgIGNvbnN0IGZpbmFsS2V5ID0ga2V5cy5wb3AoKTtcclxuXHJcbiAgICBsZXQgbmVzdGVkT2JqID0gcmVzdWx0O1xyXG4gICAgZm9yIChjb25zdCBuZXN0ZWRLZXkgb2Yga2V5cykge1xyXG4gICAgICBuZXN0ZWRPYmpbbmVzdGVkS2V5XSA9IHt9O1xyXG4gICAgICBuZXN0ZWRPYmogPSBuZXN0ZWRPYmpbbmVzdGVkS2V5XTtcclxuICAgIH1cclxuICAgIGlmIChuZXN0ZWRPYmpbZmluYWxLZXldKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5lc3RlZE9ialtmaW5hbEtleV0pKSB7XHJcbiAgICAgICAgbmVzdGVkT2JqW2ZpbmFsS2V5XSA9IFsuLi5uZXN0ZWRPYmpbZmluYWxLZXldXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXN0ZWRPYmpbZmluYWxLZXldID0gW25lc3RlZE9ialtmaW5hbEtleV1dO1xyXG4gICAgICB9XHJcbiAgICAgIG5lc3RlZE9ialtmaW5hbEtleV0ucHVzaCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXN0ZWRPYmpbZmluYWxLZXldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbiAgZ2V0UHJvcGVydHkgPSAoaW5wdXRTdHI6IHN0cmluZywgb2JqOiBhbnkpID0+IHtcclxuICAgIGlmIChpbnB1dFN0cikge1xyXG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gaW5wdXRTdHIuc3BsaXQoJy4nKTtcclxuICAgICAgbGV0IGN1cnJlbnRPYmogPSBvYmo7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICAgIGN1cnJlbnRPYmogPSBjdXJyZW50T2JqW3Byb3BdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGN1cnJlbnRPYmo7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH07XHJcbn1cclxuIl19