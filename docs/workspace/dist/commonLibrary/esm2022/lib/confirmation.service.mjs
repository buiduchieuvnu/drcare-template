import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@onehealth/ui/modal";
export class ConfirmationService {
    modal;
    constructor(modal) {
        this.modal = modal;
    }
    async create(title, content, onOk, onCancel, btnOkText = 'Đồng ý', btnCancelText = 'Hủy') {
        const modal = this.modal.create({
            ohTitle: title,
            ohContent: content,
            ohCentered: true,
            ohFooter: [
                {
                    label: btnCancelText,
                    async onClick() {
                        this.loading = true;
                        await onCancel();
                        this.loading = false;
                        modal.destroy();
                    },
                },
                {
                    label: btnOkText,
                    type: 'primary',
                    loading: false,
                    async onClick() {
                        this.loading = true;
                        const result = await onOk();
                        this.loading = false;
                        if (result) {
                            modal.destroy();
                        }
                    },
                },
            ],
        });
        modal.afterClose.subscribe(async () => {
            await onCancel();
        });
        return modal;
    }
    static ɵfac = function ConfirmationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConfirmationService)(i0.ɵɵinject(i1.OHModalService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfirmationService, factory: ConfirmationService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.OHModalService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29uZmlybWF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTyxtQkFBbUI7SUFDVjtJQUFwQixZQUFvQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFHLENBQUM7SUFDdEMsS0FBSyxDQUFDLE1BQU0sQ0FDakIsS0FBYSxFQUNiLE9BQVksRUFDWixJQUFjLEVBQ2QsUUFBa0IsRUFDbEIsWUFBb0IsUUFBUSxFQUM1QixnQkFBd0IsS0FBSztRQUU3QixNQUFNLEtBQUssR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMxQyxPQUFPLEVBQUUsS0FBSztZQUNkLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRTtnQkFDUjtvQkFDRSxLQUFLLEVBQUUsYUFBYTtvQkFDcEIsS0FBSyxDQUFDLE9BQU87d0JBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0JBQ3BCLE1BQU0sUUFBUSxFQUFFLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUNyQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2xCLENBQUM7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxLQUFLO29CQUNkLEtBQUssQ0FBQyxPQUFPO3dCQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNwQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO3dCQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDckIsSUFBSSxNQUFNLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2xCLENBQUM7b0JBQ0gsQ0FBQztpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDcEMsTUFBTSxRQUFRLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs2R0EzQ1UsbUJBQW1CO2dFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNOztpRkFFUCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPSE1vZGFsUmVmLCBPSE1vZGFsU2VydmljZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvbW9kYWwnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogT0hNb2RhbFNlcnZpY2UpIHt9XHJcbiAgcHVibGljIGFzeW5jIGNyZWF0ZShcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBjb250ZW50OiBhbnksXHJcbiAgICBvbk9rOiBGdW5jdGlvbixcclxuICAgIG9uQ2FuY2VsOiBGdW5jdGlvbixcclxuICAgIGJ0bk9rVGV4dDogc3RyaW5nID0gJ8SQ4buTbmcgw70nLFxyXG4gICAgYnRuQ2FuY2VsVGV4dDogc3RyaW5nID0gJ0jhu6d5J1xyXG4gICkge1xyXG4gICAgY29uc3QgbW9kYWw6IE9ITW9kYWxSZWYgPSB0aGlzLm1vZGFsLmNyZWF0ZSh7XHJcbiAgICAgIG9oVGl0bGU6IHRpdGxlLFxyXG4gICAgICBvaENvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIG9oQ2VudGVyZWQ6IHRydWUsXHJcbiAgICAgIG9oRm9vdGVyOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IGJ0bkNhbmNlbFRleHQsXHJcbiAgICAgICAgICBhc3luYyBvbkNsaWNrKCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBhd2FpdCBvbkNhbmNlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgbW9kYWwuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBidG5Pa1RleHQsXHJcbiAgICAgICAgICB0eXBlOiAncHJpbWFyeScsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGFzeW5jIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uT2soKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICBtb2RhbC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gICAgbW9kYWwuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBvbkNhbmNlbCgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbW9kYWw7XHJcbiAgfVxyXG59XHJcbiJdfQ==