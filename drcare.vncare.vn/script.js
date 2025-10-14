document.addEventListener('DOMContentLoaded', function() {
    // 1. Chức năng cuộn mượt (Smooth Scrolling) cho các liên kết nội bộ
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Thêm hiệu ứng cho Header khi cuộn
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Cần thêm CSS cho '.header.scrolled' nếu muốn thay đổi giao diện khi cuộn
    /* Ví dụ trong style.css:
    .header.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        border-bottom: 1px solid #ddd;
    }
    */
    
    // 3. (Optional) Logic cho Carousel/Slider trong phần Feedback
    // Đây là phần sẽ cần thư viện ngoài (ví dụ: Swiper.js, Slick) hoặc nhiều code JS hơn.
    // Dưới đây chỉ là một ví dụ placeholder.
    const feedbackCarousel = document.querySelector('.feedback-carousel');
    if (feedbackCarousel) {
        // console.log("Khởi tạo carousel...");
        // Logic để dịch chuyển các feedback-card
    }
});