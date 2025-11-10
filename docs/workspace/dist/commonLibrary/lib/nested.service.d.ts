import * as i0 from "@angular/core";
export declare class NestedService {
    updatePropertydById(arr: any[], keyproperty: any, idToChange: any, property: any, newValue: any): any;
    updateAllChildrenPropertyd(item: any, changeProperty: any, newValue: any): void;
    collapse(array: any[], data: any, $event: boolean, keyProperty?: string): void;
    convertTreeToList(root: any, defaultExpand?: boolean, keyProperty?: string): any[];
    visitNode(node: any, hashMap: any, array: any[], keyProperty?: string): void;
    addIsLeafToNestedObject(node: any): any;
    flattenArray(menuItems: any[], parentProperty: string, childrenProperty: string, distinctProperty: string): any[];
    buildNested(arr: any[], compareProperty?: string, parentProperty?: string, compareValue?: any): any[];
    findDfs(array: any[], key: any, targetId: any, childrenProperty: any): any;
    stringToObject: (result: any, inputString: any, value: any) => any;
    getProperty: (inputStr: string, obj: any) => any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NestedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NestedService>;
}
//# sourceMappingURL=nested.service.d.ts.map