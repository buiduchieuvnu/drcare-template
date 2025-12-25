import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'registration-component',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  checked = true;
  unchecked = false;
time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);

    onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }
  activeTab: 'admin' | 'ticket' = 'admin';

  isAdminInfoOpen = true;
  isInsuranceOpen = true;

  toggleAdminInfo() {
  this.isAdminInfoOpen = !this.isAdminInfoOpen;

  if (this.isAdminInfoOpen) {
    setTimeout(() => {
      document
        .querySelector('.admin-info')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}


  toggleInsurance() {
    this.isInsuranceOpen = !this.isInsuranceOpen;
    if (this.isAdminInfoOpen) {
    setTimeout(() => {
      document
        .querySelector('.insurance-info')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  }
}