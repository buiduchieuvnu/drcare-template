/* =========================
   MAIN.JS – DRCARE 247
   ========================= */

// Kích hoạt AOS Animation
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Xử lý form liên hệ (demo)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    setTimeout(() => {
      form.reset();
      message.classList.remove("hidden");
      message.textContent = "Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ sớm.";
    }, 800);
  });
});

// ===========================
// INCLUDE HEADER / FOOTER
// ===========================
async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  for (const el of elements) {
    const file = el.getAttribute('data-include');
    const response = await fetch(file);
    if (response.ok) {
      el.innerHTML = await response.text();
    } else {
      el.innerHTML = "Không thể tải " + file;
    }
  }

  // Sau khi load xong header, khởi tạo chức năng liên quan
  initHeaderSticky();
  initActiveNav();
}

// Sticky header
function initHeaderSticky() {
  const header = document.querySelector("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}

// Active menu
function initActiveNav() {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (linkPath === "index.html" && currentPath === "")) {
      link.classList.add("active");
    }
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
