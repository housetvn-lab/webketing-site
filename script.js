// 스크롤 시 헤더 디자인 변경
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 모바일 메뉴 토글
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.mobile-nav-close');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

// 모바일 메뉴 링크 클릭 시 메뉴 닫기
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});

// 스크롤 애니메이션 (Intersection Observer)
const observerOptions = {
  threshold: 0.15, // 요소가 15% 보일 때 실행
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 한 번만 실행
    }
  });
}, observerOptions);

const animatedElements = document.querySelectorAll('.fade-up');
animatedElements.forEach(el => observer.observe(el));
