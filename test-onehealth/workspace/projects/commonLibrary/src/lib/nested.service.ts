import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class NestedService {
  public updatePropertydById(
    arr: any[],
    keyproperty: any,
    idToChange: any,
    property: any,
    newValue: any
  ): any {
    return arr.map((item) => {
      if (item[keyproperty] === idToChange) {
        item[property] = newValue;
        this.updateAllChildrenPropertyd(item, property, newValue);
      }
      if (item.children) {
        item.children = this.updatePropertydById(
          item.children,
          keyproperty,
          idToChange,
          property,
          newValue
        );
      }
      return item;
    });
  }
  updateAllChildrenPropertyd(item: any, changeProperty: any, newValue: any) {
    if (item.children) {
      item.children.forEach((child: any) => {
        child[changeProperty] = newValue;
        this.updateAllChildrenPropertyd(child, changeProperty, newValue);
      });
    }
  }
  collapse(
    array: any[],
    data: any,
    $event: boolean,
    keyProperty = 'key'
  ): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach((d) => {
          const target = array.find((a) => a[keyProperty] === d[keyProperty])!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(
    root: any,
    defaultExpand = true,
    keyProperty = 'key'
  ): any[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: defaultExpand });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array, keyProperty);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({
            ...node.children[i],
            level: node.level! + 1,
            expand: defaultExpand,
            parent: node,
          });
        }
      }
    }

    return array;
  }
  visitNode(node: any, hashMap: any, array: any[], keyProperty = 'key'): void {
    if (!hashMap[node[keyProperty]]) {
      hashMap[node[keyProperty]] = true;
      array.push(node);
    }
  }
  addIsLeafToNestedObject(node: any): any {
    if (!node.children || node.children.length === 0) {
      node.isLeaf = true;
    } else {
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

  flattenArray(
    menuItems: any[],
    parentProperty: string,
    childrenProperty: string,
    distinctProperty: string
  ): any[] {
    let seen = new Set();
    const flattenedItems: any[] = [];
    for (const menuItem of menuItems) {
      const flattenedItem = { ...menuItem };
      flattenedItems.push(flattenedItem);
      if (menuItem[childrenProperty]) {
        if (Array.isArray(menuItem[childrenProperty])) {
          const nestedItems = this.flattenArray(
            menuItem[childrenProperty],
            parentProperty,
            childrenProperty,
            distinctProperty
          );
          flattenedItems.push(...nestedItems);
        } else {
          const nestedItems = this.flattenArray(
            [menuItem[childrenProperty]],
            parentProperty,
            childrenProperty,
            distinctProperty
          );
          flattenedItems.push(...nestedItems);
        }
      }
      if (menuItem[parentProperty]) {
        if (
          !Array.isArray(menuItem[parentProperty]) &&
          menuItem[parentProperty][distinctProperty]
        ) {
          const nestedItems = this.flattenArray(
            [menuItem[parentProperty]],
            parentProperty,
            childrenProperty,
            distinctProperty
          );
          flattenedItems.push(...nestedItems);
        } else if (Array.isArray(menuItem[parentProperty])) {
          const nestedItems = this.flattenArray(
            menuItem[parentProperty],
            parentProperty,
            childrenProperty,
            distinctProperty
          );
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
  buildNested(
    arr: any[],
    compareProperty = 'id',
    parentProperty = 'parent',
    compareValue: any = undefined
  ): any[] {
    if (arr && arr.length > 0) {
      let result = [];
      const list =
        compareValue != undefined
          ? arr.filter(
              (x) =>
                (x[parentProperty]
                  ? x[parentProperty][compareProperty]
                  : undefined) === compareValue
            )
          : arr.filter((x) => !x[parentProperty]);

      if (list.length > 0) {
        for (let item of list) {
          let children = this.buildNested(
            arr,
            compareProperty,
            parentProperty,
            item[compareProperty]
          );
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

  public findDfs(
    array: any[],
    key: any,
    targetId: any,
    childrenProperty: any
  ): any {
    let result = null;
    array.forEach((obj: any) => {
      if (obj[key] === targetId) {
        result = obj;
      }
      if (obj[childrenProperty]) {
        const check: any = this.findDfs(
          obj[childrenProperty],
          key,
          targetId,
          childrenProperty
        );
        if (check) {
          result = check;
          return;
        }
      }
    });
    return result;
  }
  stringToObject = (result: any, inputString: any, value: any) => {
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
      } else {
        nestedObj[finalKey] = [nestedObj[finalKey]];
      }
      nestedObj[finalKey].push(value);
    } else {
      nestedObj[finalKey] = value;
    }
    return result;
  };
  getProperty = (inputStr: string, obj: any) => {
    if (inputStr) {
      const properties = inputStr.split('.');
      let currentObj = obj;
      for (const prop of properties) {
        if (currentObj.hasOwnProperty(prop)) {
          currentObj = currentObj[prop];
        } else {
          return null;
        }
      }
      return currentObj;
    }
    return obj;
  };
}
