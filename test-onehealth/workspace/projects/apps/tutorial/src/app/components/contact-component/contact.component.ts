import { Component } from '@angular/core';

@Component({
  selector: 'contact-component',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
     partners = [
    { image: '/assets/img/hospital1.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital2.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital3.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital1.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital2.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital3.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital4.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital2.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital3.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital4.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital2.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital3.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
    { image: '/assets/img/hospital1.png', name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh' },
  ];

  slides: any[] = [];
  currentSlide = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.groupPartners();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  groupPartners() {
    const chunkSize = 12; // 4 cột x 3 hàng
    for (let i = 0; i < this.partners.length; i += chunkSize) {
      this.slides.push(this.partners.slice(i, i + chunkSize));
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 6000);
  }
}
