import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { NewsView } from '../../../models/news-view.model';
import { NewsService } from '../../../service/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'default-component',
  standalone: false,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy, AfterViewInit {

  activeSection: 'hospital' | 'doctor' = 'hospital';
  hospitalSlides: any[][] = [];
  doctorSlides: any[][] = [];
  healthcareSlides: any[][] = [];
  currentHospitalSlide = 0;
  currentDoctorSlide = 0;
  currentHealthcareSlide = 0;
  timers: any[] = [];

  hospitals = [
    { name: 'Bệnh viện Bưu điện Hà Nội', address: 'Số 49 Trần Điền Định Công, Hoàng Mai, Hà Nội', image: '/assets/img/hospital1.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Đa khoa Bưu điện', address: 'Lô B9 Thành Thái, Phường Hòa Hưng, Tp. Hồ Chí Minh.', image: '/assets/img/hospital2.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital3.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Đa khoa Long An', address: '211 Nguyễn Thông, Phường 3, Tân An, Long An', image: '/assets/img/hospital4.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Bưu điện Hà Nội', address: 'Số 49 Trần Điền Định Công, Hoàng Mai, Hà Nội', image: '/assets/img/hospital1.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Đa khoa Bưu điện', address: 'Lô B9 Thành Thái, Phường Hòa Hưng, Tp. Hồ Chí Minh.', image: '/assets/img/hospital2.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital3.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Đa khoa Long An', address: '211 Nguyễn Thông, Phường 3, Tân An, Long An', image: '/assets/img/hospital4.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Bưu điện Hà Nội', address: 'Số 49 Trần Điền Định Công, Hoàng Mai, Hà Nội', image: '/assets/img/hospital1.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Đa khoa Bưu điện', address: 'Lô B9 Thành Thái, Phường Hòa Hưng, Tp. Hồ Chí Minh.', image: '/assets/img/hospital2.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Nguyễn Trãi', address: '314 Nguyễn Trãi, Phường 8, Quận 5, Thành phố Hồ Chí Minh', image: '/assets/img/hospital3.png', logo: '/assets/img/logo-benhvien.png' },
    { name: 'Bệnh viện Đa khoa Long An', address: '211 Nguyễn Thông, Phường 3, Tân An, Long An', image: '/assets/img/hospital4.png', logo: '/assets/img/logo-benhvien.png' },
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
      content: 'Ứng dụng rất dễ dùng, chỉ vài thao tác là đặt được lịch khám. Tôi đặc biệt thích tính năng nhắc lịch tự động vì giúp không bị quên lịch tái khám.',
      name: 'Nguyễn Văn Hòa – 42 Tuổi',
      desc: 'Quận Cầu Giấy, Hà Nội',
      avatar: '/assets/img/avatar_null.png'
    },
    {
      content: 'Trước đây mỗi lần đi khám phải chờ rất lâu, nhưng từ khi dùng app thì đến đúng giờ là được vào khám. Thông tin bác sĩ và chuyên khoa hiển thị rõ ràng, dễ chọn.',
      name: 'Lê Thị Mai – 29 Tuổi',
      desc: 'TP. Hồ Chí Minh',
      avatar: '/assets/img/avatar_null.png'
    },
    {
      content: 'Tôi thường xuyên theo dõi hồ sơ sức khỏe của cả gia đình trên ứng dụng. Việc lưu trữ kết quả khám giúp bác sĩ nắm được tiền sử bệnh nhanh hơn.',
      name: 'Trần Quốc Bảo – 38 Tuổi',
      desc: 'Đà Nẵng',
      avatar: '/assets/img/avatar_null.png'
    },
    {
      content: 'App hỗ trợ rất tốt cho người lớn tuổi trong gia đình tôi. Giao diện đơn giản, chữ rõ, dễ thao tác và có thông báo mỗi khi có lịch khám mới.',
      name: 'Phạm Thị Hồng – 50 Tuổi',
      desc: 'Đại diện phòng khám TDI Hải Phòng',
      avatar: '/assets/img/avatar_null.png'
    }
  ];

  slides: NewsView[] = [];
  slides3: NewsView[] = [];
  articles: NewsView[] = [];

  constructor( private newsService: NewsService, private router: Router ) { }
  ngOnInit() {
    this.hospitalSlides = this.chunk(this.hospitals, 4);
    this.doctorSlides = this.chunk(this.doctors, 4);
    this.healthcareSlides = this.chunk(this.healthcareList, 4);


    this.timers.push(setInterval(() => this.nextSlide('hospital'), 5000));
    this.timers.push(setInterval(() => this.nextSlide('doctor'), 5000));
    this.timers.push(setInterval(() => this.nextSlide('healthcare'), 6000));

    // Hiển thị dữ liệu tin tức
    this.loadNews();
  }
  loadNews(): void {
    this.newsService.getNews({
      categoryId: '69659ee36191628e703967c7'
    }).subscribe({
      next: (data) => {
        this.slides = data.filter(item => item.publishOnMain === 1);
        this.slides3 = data
        .filter(item => item.publishOnMain === 1)
        .slice(0, 3);
        this.articles = data
        .filter(item => item.publishOnMain === 0)
        .slice(0, 4);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  goToDetail(id: string): void {
    this.router.navigate(['/news', id]);
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
  private statsStarted = false;
  @ViewChild('statSection', { static: false }) statSection!: ElementRef;

  @ViewChild('counter1', { static: false }) counter1!: ElementRef;
  @ViewChild('counter2', { static: false }) counter2!: ElementRef;
  @ViewChild('counter3', { static: false }) counter3!: ElementRef;
  @ViewChild('counter4', { static: false }) counter4!: ElementRef;

  ngAfterViewInit() {
    this.observeStatsSection();
  }
  private observeStatsSection() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.statsStarted) {
        this.statsStarted = true; 
        this.startCounters();
      }
    }, { threshold: 0.25 });

    observer.observe(this.statSection.nativeElement);
  }
  private startCounters() {
    this.startContinuousIncrease(this.counter1.nativeElement, 100, 19, 80, 200);
    this.startContinuousIncrease(this.counter2.nativeElement, 500000, 61, 10, 12000);
    this.startContinuousIncrease(this.counter3.nativeElement, 50, 14, 90, 250);
    this.startContinuousIncrease(this.counter4.nativeElement, 50000, 23, 22, 2400);
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