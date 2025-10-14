import { Injectable } from '@angular/core';
import { OHModalRef, OHModalService } from '@onehealth/ui/modal';
@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  constructor(private modal: OHModalService) {}
  public async create(
    title: string,
    content: any,
    onOk: Function,
    onCancel: Function,
    btnOkText: string = 'Đồng ý',
    btnCancelText: string = 'Hủy'
  ) {
    const modal: OHModalRef = this.modal.create({
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
}
