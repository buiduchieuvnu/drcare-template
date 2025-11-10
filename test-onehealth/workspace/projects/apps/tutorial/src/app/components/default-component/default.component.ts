import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'default-component',
  standalone: false,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy {

  constructor() { }

  activeSection: 'hospital' | 'doctor' = 'hospital';
  hospitalSlides: any[][] = [];
  doctorSlides: any[][] = [];
  healthcareSlides: any[][] = [];
  currentHospitalSlide = 0;
  currentDoctorSlide = 0;
  currentHealthcareSlide = 0;
  timers: any[] = [];

  hospitals = [
    { name: 'Bệnh viện A', address: 'Hà Nội', image: '/assets/img/hospital1.png' },
    { name: 'Bệnh viện B', address: 'Đà Nẵng', image: '/assets/img/hospital2.png' },
    { name: 'Bệnh viện C', address: 'Hồ Chí Minh', image: '/assets/img/hospital3.png' },
    { name: 'Bệnh viện D', address: 'Huế', image: '/assets/img/hospital4.png' },
    { name: 'Bệnh viện E', address: 'Hải Phòng', image: '/assets/img/hospital3.png' },
    { name: 'Bệnh viện F', address: 'Cần Thơ', image: '/assets/img/hospital2.png' },
    { name: 'Bệnh viện G', address: 'Nghệ An', image: '/assets/img/hospital1.png' },
    { name: 'Bệnh viện H', address: 'Thanh Hóa', image: '/assets/img/hospital4.png' }
  ];


  doctors = [
    { name: 'BS. Nguyễn Văn A', specialty: 'Tim mạch', experience: 10, image: '/assets/img/doctor_slide.png' },
    { name: 'BS. Trần Thị B', specialty: 'Nhi khoa', experience: 7, image: '/assets/img/doctor_slide.png' },
    { name: 'BS. Lê Văn C', specialty: 'Da liễu', experience: 5, image: '/assets/img/doctor_slide.png' },
    { name: 'BS. Phạm Thị D', specialty: 'Tai Mũi Họng', experience: 8, image: '/assets/img/doctor_slide.png' },
    { name: 'BS. Vũ Văn E', specialty: 'Nội tiết', experience: 12, image: '/assets/img/doctor_slide.png' },
    { name: 'BS. Hoàng Thị F', specialty: 'Phụ sản', experience: 6, image: '/assets/img/doctor_slide.png' },
    { name: 'BS. Đỗ Văn G', specialty: 'Ngoại tổng hợp', experience: 9, image: '/assets/img/doctor_slide.png' },
    { name: 'BS. Nguyễn Thị H', specialty: 'Thần kinh', experience: 11, image: '/assets/img/doctor_slide.png' }
  ];


  healthcareList = [
    { name: 'Cơ xương khớp', image: '/assets/img/healthcare1.png', room:"Phòng khám Điều trị Cơ Xương Khớp" },
    { name: 'Da liễu', image: '/assets/img/healthcare2.png', room:"Phòng khám chuyên khoa Da Liễu" },
    { name: 'Nha Khoa', image: '/assets/img/healthcare3.png', room:"Phòng khám chuyên khoa Răng - Hàm - Mặt" },
    { name: 'Vật lý trị liệu', image: '/assets/img/healthcare4.png', room:"Phòng khám Điều trị Vật Lý Trị Liệu" },
    { name: 'Cơ xương khớp', image: '/assets/img/healthcare1.png', room:"Phòng khám Điều trị Cơ Xương Khớp" },
    { name: 'Da liễu', image: '/assets/img/healthcare2.png', room:"Phòng khám chuyên khoa Da Liễu" },
    { name: 'Nha Khoa', image: '/assets/img/healthcare3.png', room:"Phòng khám chuyên khoa Răng - Hàm - Mặt" },
    { name: 'Vật lý trị liệu', image: '/assets/img/healthcare4.png', room:"Phòng khám Điều trị Vật Lý Trị Liệu" },
  ];

    newsList = [
    {
      image: '/assets/img/baby.png',
      category: 'CHĂM SÓC TRẺ',
      title: 'Xét nghiệm vi chất cho trẻ em: Khi nào nên thực hiện và cần lưu...',
      describe: 'Create, enable and use across your team in hendrerit urna. Create, enable and use'
    },
    {
      image: '/assets/img/baby.png',
      category: 'CHĂM SÓC TRẺ',
      title: 'Xét nghiệm vi chất cho trẻ em: Khi nào nên thực hiện và cần lưu...',
      describe: 'Create, enable and use across your team in hendrerit urna. Create, enable and use'
    },
    {
      image: '/assets/img/baby.png',
      category: 'CHĂM SÓC TRẺ',
      title: 'Xét nghiệm vi chất cho trẻ em: Khi nào nên thực hiện và cần lưu...',
      describe: 'Create, enable and use across your team in hendrerit urna. Create, enable and use'
    },
    {
      image: '/assets/img/baby.png',
      category: 'CHĂM SÓC TRẺ',
      title: 'Xét nghiệm vi chất cho trẻ em: Khi nào nên thực hiện và cần lưu...',
      describe: 'Create, enable and use across your team in hendrerit urna. Create, enable and use'
    }
  ];
  ngOnInit() {
    this.hospitalSlides = this.chunk(this.hospitals, 4);
    this.doctorSlides = this.chunk(this.doctors, 4);
    this.healthcareSlides = this.chunk(this.healthcareList, 4);


    this.timers.push(setInterval(() => this.nextSlide('hospital'), 5000));
    this.timers.push(setInterval(() => this.nextSlide('doctor'), 5000));
    this.timers.push(setInterval(() => this.nextSlide('healthcare'), 6000));
  }
  ngOnDestroy() {
    this.timers.forEach(timer => clearInterval(timer));
  }


  toggleSection(section: 'hospital' | 'doctor') {
    this.activeSection = section;
  }
  chunk(arr: any[], size: number): any[][] {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  }

  prevSlide(type: 'hospital' | 'doctor' | 'healthcare') {
    if (type === 'hospital') {
      this.currentHospitalSlide = (this.currentHospitalSlide - 1 + this.hospitalSlides.length) % this.hospitalSlides.length;
    } else if (type === 'doctor') {
      this.currentDoctorSlide = (this.currentDoctorSlide - 1 + this.doctorSlides.length) % this.doctorSlides.length;
    } else {
      this.currentHealthcareSlide = (this.currentHealthcareSlide - 1 + this.healthcareSlides.length) % this.healthcareSlides.length;
    }
  }

  nextSlide(type: 'hospital' | 'doctor' | 'healthcare') {
    if (type === 'hospital') {
      this.currentHospitalSlide = (this.currentHospitalSlide + 1) % this.hospitalSlides.length;
    } else if (type === 'doctor') {
      this.currentDoctorSlide = (this.currentDoctorSlide + 1) % this.doctorSlides.length;
    } else {
      this.currentHealthcareSlide = (this.currentHealthcareSlide + 1) % this.healthcareSlides.length;
    }
  }


  goToSlide(type: 'hospital' | 'doctor' | 'healthcare', index: number) {
    if (type === 'hospital') this.currentHospitalSlide = index;
    else if (type === 'doctor') this.currentDoctorSlide = index;
    else this.currentHealthcareSlide = index;
  }


}