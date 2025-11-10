export interface SubMenuModel {
    title: string;
    icon?: string;
    iconfont?: boolean;
    disabled?: boolean;
    href?: string;
    routerLink?: string;
    ohRouterLink?: string;
    childs?: SubMenuModel[];
}
export interface SubMenuListModel {
    [key: string]: SubMenuModel[];
}
//# sourceMappingURL=menu.model.d.ts.map