/* =========================
   MAIN.JS – DRCARE 247
   ========================= */

// Kích hoạt AOS Animation
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Header sticky khi scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Xử lý form liên hệ (demo)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Mô phỏng gửi email
    setTimeout(() => {
      form.reset();
      message.classList.remove("hidden");
      message.textContent = "Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ sớm.";
    }, 800);
  });
});

// Cuộn mượt khi click anchor link
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if(linkPath === currentPath || (linkPath === "index.html" && currentPath === "")) {
      link.classList.add("active");
    }
  });
});