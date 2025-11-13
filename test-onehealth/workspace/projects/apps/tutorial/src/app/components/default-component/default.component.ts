import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'default-component',
  standalone: false,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy, AfterViewInit {

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
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital1.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital2.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital3.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Bưu điện', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital4.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital1.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital2.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital3.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Bưu điện', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital4.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital1.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital2.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital3.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Bưu điện', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital4.png', logo: '/assets/img/logo-benhvien.png' },
  ];


  doctors = [
    { name: 'BS. Nguyễn Văn Minh', specialty: 'Nội tổng quát, Bệnh viện Bạch Mai',
      experience: [
        '8 năm kinh nghiệm nội tổng quát',
        'Trưởng khoa bệnh viện Bạch Mai'
      ],
      image: '/assets/img/doctor_slide.png'
    },
    { name: 'BS. Nguyễn Văn Minh', specialty: 'Nội tổng quát, Bệnh viện Bạch Mai',
      experience: [
        '8 năm kinh nghiệm nội tổng quát',
        'Trưởng khoa bệnh viện Bạch Mai'
      ],
      image: '/assets/img/doctor_slide.png'
    }, 
    { name: 'BS. Nguyễn Văn Minh', specialty: 'Nội tổng quát, Bệnh viện Bạch Mai',
      experience: [
        '8 năm kinh nghiệm nội tổng quát',
        'Trưởng khoa bệnh viện Bạch Mai'
      ],
      image: '/assets/img/doctor_slide.png'
    },
    { name: 'BS. Nguyễn Văn Minh', specialty: 'Nội tổng quát, Bệnh viện Bạch Mai',
      experience: [
        '8 năm kinh nghiệm nội tổng quát',
        'Trưởng khoa bệnh viện Bạch Mai'
      ],
      image: '/assets/img/doctor_slide.png'
    },
    { name: 'BS. Nguyễn Văn Minh', specialty: 'Nội tổng quát, Bệnh viện Bạch Mai',
      experience: [
        '8 năm kinh nghiệm nội tổng quát',
        'Trưởng khoa bệnh viện Bạch Mai'
      ],
      image: '/assets/img/doctor_slide.png'
    },
    { name: 'BS. Nguyễn Văn Minh', specialty: 'Nội tổng quát, Bệnh viện Bạch Mai',
      experience: [
        '8 năm kinh nghiệm nội tổng quát',
        'Trưởng khoa bệnh viện Bạch Mai'
      ],
      image: '/assets/img/doctor_slide.png'
    }, 
    { name: 'BS. Nguyễn Văn Minh', specialty: 'Nội tổng quát, Bệnh viện Bạch Mai',
      experience: [
        '8 năm kinh nghiệm nội tổng quát',
        'Trưởng khoa bệnh viện Bạch Mai'
      ],
      image: '/assets/img/doctor_slide.png'
    },
    { name: 'BS. Nguyễn Văn Minh', specialty: 'Nội tổng quát, Bệnh viện Bạch Mai',
      experience: [
        '8 năm kinh nghiệm nội tổng quát',
        'Trưởng khoa bệnh viện Bạch Mai'
      ],
      image: '/assets/img/doctor_slide.png'
    },
  ];


  healthcareList = [
    { name: 'Cơ xương khớp', image: '/assets/img/healthcare1.png', room: "Phòng khám Điều trị Cơ Xương Khớp" },
    { name: 'Da liễu', image: '/assets/img/healthcare2.png', room: "Phòng khám chuyên khoa Da Liễu" },
    { name: 'Nha Khoa', image: '/assets/img/healthcare3.png', room: "Phòng khám chuyên khoa Răng - Hàm - Mặt" },
    { name: 'Vật lý trị liệu', image: '/assets/img/healthcare4.png', room: "Phòng khám Điều trị Vật Lý Trị Liệu" },
    { name: 'Cơ xương khớp', image: '/assets/img/healthcare1.png', room: "Phòng khám Điều trị Cơ Xương Khớp" },
    { name: 'Da liễu', image: '/assets/img/healthcare2.png', room: "Phòng khám chuyên khoa Da Liễu" },
    { name: 'Nha Khoa', image: '/assets/img/healthcare3.png', room: "Phòng khám chuyên khoa Răng - Hàm - Mặt" },
    { name: 'Vật lý trị liệu', image: '/assets/img/healthcare4.png', room: "Phòng khám Điều trị Vật Lý Trị Liệu" },
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

  feedbackList = [
    {
      content: 'Từ khi tích hợp đặt lịch trên DRCARE247, số lượng bệnh nhân đến đều và ổn định hơn, giảm hẳn tình trạng trùng lịch. Hệ thống cũng giúp lưu hồ sơ bệnh nhân đồng bộ, tiện theo dõi lâu dài',
      name: 'Phùng Thị Yến – 35 Tuổi',
      desc: 'Sống tại Hà Nội',
      avatar: '/assets/img/avatar_feedback.png'
    },
    {
      content: 'Từ khi tích hợp đặt lịch trên DRCARE247, số lượng bệnh nhân đến đều và ổn định hơn, giảm hẳn tình trạng trùng lịch. Hệ thống cũng giúp lưu hồ sơ bệnh nhân đồng bộ, tiện theo dõi lâu dài',
      name: 'Phùng Thị Yến – 35 Tuổi',
      desc: 'Đại diện Phòng khám Đa Khoa TTYTQ8',
      avatar: '/assets/img/avatar_feedback.png'
    },
    {
      content: 'Từ khi tích hợp đặt lịch trên DRCARE247, số lượng bệnh nhân đến đều và ổn định hơn, giảm hẳn tình trạng trùng lịch. Hệ thống cũng giúp lưu hồ sơ bệnh nhân đồng bộ, tiện theo dõi lâu dài',
      name: 'Phùng Thị Yến – 35 Tuổi',
      desc: 'Sống tại Hà Nội',
      avatar: '/assets/img/avatar_feedback.png'
    },
    {
      content: 'Từ khi tích hợp đặt lịch trên DRCARE247, số lượng bệnh nhân đến đều và ổn định hơn, giảm hẳn tình trạng trùng lịch. Hệ thống cũng giúp lưu hồ sơ bệnh nhân đồng bộ, tiện theo dõi lâu dài',
      name: 'Phùng Thị Yến – 35 Tuổi',
      desc: 'Đại diện Phòng khám Đa Khoa TTYTQ8',
      avatar: '/assets/img/avatar_feedback.png'
    },
    {
      content: 'Từ khi tích hợp đặt lịch trên DRCARE247, số lượng bệnh nhân đến đều và ổn định hơn, giảm hẳn tình trạng trùng lịch. Hệ thống cũng giúp lưu hồ sơ bệnh nhân đồng bộ, tiện theo dõi lâu dài',
      name: 'Phùng Thị Yến – 35 Tuổi',
      desc: 'Sống tại Hà Nội',
      avatar: '/assets/img/avatar_feedback.png'
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

  // Số tăng dần
  @ViewChild('counter1', { static: false }) counter1!: ElementRef;
  @ViewChild('counter2', { static: false }) counter2!: ElementRef;
  @ViewChild('counter3', { static: false }) counter3!: ElementRef;
  @ViewChild('counter4', { static: false }) counter4!: ElementRef;

  ngAfterViewInit() {
    // startContinuousIncrease(element, startValue, step, speed, increase)
    this.startContinuousIncrease(this.counter1.nativeElement, 200, 1, 2000, 600);
    this.startContinuousIncrease(this.counter2.nativeElement, 500000, 30, 100, 300000);
    this.startContinuousIncrease(this.counter3.nativeElement, 200000, 3, 400, 100000);
    this.startContinuousIncrease(this.counter4.nativeElement, 500000, 50, 100, 300000);
  }

  /**
   * Hiệu ứng tăng dần từ giá trị ban đầu
   * @param element   Phần tử HTML hiển thị số
   * @param start     Giá trị ban đầu
   * @param step      Mỗi lần tăng bao nhiêu đơn vị
   * @param speed     Tốc độ (ms giữa mỗi lần tăng)
   * @param increase  Tổng số đơn vị muốn tăng thêm
   */
  private startContinuousIncrease(
    element: HTMLElement,
    start: number,
    step: number,
    speed: number,
    increase: number
  ) {
    let current = start;
    const target = start + increase;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target; // dừng chính xác tại đích
        clearInterval(timer);
      }
      element.textContent = current.toLocaleString('vi-VN') + '+'; // thêm dấu +
    }, speed);
  }
}