/* 기본 설정 및 변수 */
:root {
  --primary: #4f46e5;       /* 세련된 인디고 블루 */
  --primary-dark: #4338ca;
  --accent: #06b6d4;        /* 포인트 시안 컬러 */
  --dark-bg: #0f172a;       /* 딥 네이비 배경 */
  --light-bg: #f8fafc;      /* 아주 밝은 쿨 그레이 (누런끼 제거) */
  --text-main: #1e293b;
  --text-sub: #64748b;
  --white: #ffffff;
  --gradient: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
  --shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  --glass: rgba(255, 255, 255, 0.7);
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Pretendard', sans-serif; }
html { scroll-behavior: smooth; }
body { color: var(--text-main); line-height: 1.6; background-color: var(--white); overflow-x: hidden; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* 유틸리티 */
.text-gradient {
  background: var(--gradient);
  -webkit-background-clip: text;
  color: transparent;
}

/* HEADER */
.header {
  position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
  transition: 0.4s ease;
  padding: 20px 0;
}
.header.scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  padding: 15px 0;
}
.inner {
  max-width: 1200px; margin: 0 auto; padding: 0 20px;
  display: flex; justify-content: space-between; align-items: center;
}
.logo { font-weight: 800; font-size: 24px; letter-spacing: -0.5px; color: var(--dark-bg); }
.logo span { color: var(--primary); }

.nav a {
  margin-left: 30px; font-weight: 500; font-size: 16px; color: var(--text-main);
  transition: 0.3s;
}
.nav a:hover { color: var(--primary); }
.nav-cta {
  background: var(--dark-bg); color: #fff !important;
  padding: 10px 24px; border-radius: 50px; font-size: 14px;
}
.nav-cta:hover { background: var(--primary); transform: translateY(-2px); }

/* MOBILE MENU */
.mobile-menu-btn { display: none; font-size: 24px; cursor: pointer; color: var(--dark-bg); }
.mobile-nav {
  position: fixed; top: 0; right: -100%; width: 80%; height: 100vh;
  background: var(--white); z-index: 1001; padding: 40px;
  display: flex; flex-direction: column; gap: 20px;
  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -10px 0 30px rgba(0,0,0,0.1);
}
.mobile-nav.active { right: 0; }
.mobile-nav-close { align-self: flex-end; font-size: 24px; cursor: pointer; margin-bottom: 20px; }
.mobile-nav a { font-size: 20px; font-weight: 700; color: var(--dark-bg); }

/* HERO SECTION */
.hero {
  height: 100vh; position: relative; display: flex; align-items: center; justify-content: center;
  text-align: center; overflow: hidden; background: #fff;
}
.hero-bg {
  position: absolute; width: 100%; height: 100%; top: 0; left: 0;
  background: radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 50%);
  filter: blur(60px); z-index: 0;
  animation: blobMove 10s infinite alternate;
}
@keyframes blobMove {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
.hero-content { position: relative; z-index: 2; max-width: 800px; padding: 0 20px; }
.badge {
  display: inline-block; padding: 6px 16px; background: rgba(79, 70, 229, 0.1);
  color: var(--primary); border-radius: 30px; font-size: 14px; font-weight: 700;
  margin-bottom: 20px; letter-spacing: 1px;
}
.hero h1 {
  font-size: 64px; font-weight: 800; line-height: 1.1; margin-bottom: 24px;
  color: var(--dark-bg); letter-spacing: -1px;
}
.hero p { font-size: 20px; color: var(--text-sub); margin-bottom: 40px; font-weight: 400; }

.hero-actions { display: flex; gap: 15px; justify-content: center; }
.btn-main {
  padding: 18px 40px; background: var(--dark-bg); color: #fff; border-radius: 12px;
  font-weight: 700; font-size: 18px; transition: 0.3s;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.2);
}
.btn-main:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(15, 23, 42, 0.3); }
.btn-outline {
  padding: 18px 40px; background: #fff; color: var(--dark-bg); border: 1px solid #e2e8f0;
  border-radius: 12px; font-weight: 700; font-size: 18px; transition: 0.3s;
}
.btn-outline:hover { border-color: var(--dark-bg); background: #f8fafc; }

.scroll-down {
  position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 10px; opacity: 0.6;
}
.scroll-down span { font-size: 12px; letter-spacing: 2px; font-weight: 600; }
.mouse {
  width: 24px; height: 36px; border: 2px solid var(--text-main); border-radius: 12px;
  position: relative;
}
.mouse::after {
  content: ''; position: absolute; top: 6px; left: 50%; transform: translateX(-50%);
  width: 4px; height: 4px; background: var(--text-main); border-radius: 50%;
  animation: scrollMouse 1.5s infinite;
}
@keyframes scrollMouse { 0% { top: 6px; opacity: 1; } 100% { top: 20px; opacity: 0; } }

/* STATS BAR */
.stats-bar {
  background: var(--dark-bg); padding: 40px 20px; display: flex; justify-content: center; gap: 80px;
  color: #fff; text-align: center;
  flex-wrap: wrap;
}
.stat-item strong { display: block; font-size: 40px; font-weight: 800; color: var(--accent); margin-bottom: 5px; }
.stat-item span { font-size: 16px; opacity: 0.8; }

/* SECTIONS COMMON */
.section { padding: 120px 20px; max-width: 1200px; margin: 0 auto; }
.dark-section { background: var(--light-bg); width: 100%; max-width: 100%; }
.dark-section .pricing-container { max-width: 1200px; margin: 0 auto; }

.section-header { text-align: center; margin-bottom: 80px; }
.section-header h2 {
  font-size: 40px; font-weight: 800; color: var(--dark-bg); margin-bottom: 15px;
  position: relative; display: inline-block;
}
.section-header p { font-size: 18px; color: var(--text-sub); }

/* PROCESS GRID */
.process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
.process-card {
  background: #fff; padding: 40px 25px; border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.05); text-align: center; transition: 0.3s;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}
.process-card:hover { transform: translateY(-15px); box-shadow: 0 20px 40px rgba(79, 70, 229, 0.1); border-color: var(--primary); }
.icon-box {
  width: 70px; height: 70px; background: rgba(79, 70, 229, 0.05); border-radius: 50%;
  display: flex; align-items: center; justify-content: center; margin: 0 auto 25px;
  color: var(--primary); font-size: 28px; transition: 0.3s;
}
.process-card:hover .icon-box { background: var(--primary); color: #fff; }
.process-card h3 { font-size: 20px; margin-bottom: 15px; }
.process-card p { font-size: 15px; color: var(--text-sub); }

/* PRICING GRID */
.pricing-container { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; align-items: flex-start; }
.pricing-card {
  background: #fff; padding: 40px 30px; border-radius: 24px; position: relative;
  border: 1px solid #e2e8f0; transition: 0.3s; text-align: center;
}
.pricing-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); z-index: 2; }
.pricing-card.best-seller { border: 2px solid var(--primary); box-shadow: 0 20px 50px rgba(79, 70, 229, 0.15); transform: scale(1.05); z-index: 10; }
.pricing-card.best-seller:hover { transform: scale(1.08); }
.tag {
  position: absolute; top: -15px; left: 50%; transform: translateX(-50%);
  background: var(--gradient); color: #fff; padding: 5px 15px; border-radius: 20px;
  font-size: 12px; font-weight: 800; letter-spacing: 1px;
}
.pricing-card h3 { font-size: 18px; color: var(--text-main); margin-bottom: 15px; font-weight: 700; }
.pricing-card .price { font-size: 32px; font-weight: 800; color: var(--dark-bg); margin-bottom: 10px; }
.pricing-card .price span { font-size: 14px; color: var(--text-sub); font-weight: 500; }
.pricing-card .desc { font-size: 14px; color: var(--text-sub); margin-bottom: 30px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px; }
.features { text-align: left; margin-bottom: 30px; }
.features li { margin-bottom: 12px; font-size: 14px; color: var(--text-main); display: flex; align-items: center; gap: 10px; }
.features li i { color: var(--primary); font-size: 12px; }
.btn-price {
  display: block; width: 100%; padding: 15px 0; background: var(--dark-bg); color: #fff;
  border-radius: 10px; font-weight: 700; transition: 0.3s;
}
.btn-price:hover { background: var(--primary); }
.btn-price.outline { background: #fff; border: 1px solid #e2e8f0; color: var(--dark-bg); }
.btn-price.outline:hover { background: #f8fafc; border-color: var(--dark-bg); }

/* 개선된 PORTFOLIO GRID */
.pf-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.pf-item {
  border-radius: 24px; overflow: hidden; background: #fff;
  border: 1px solid #f1f5f9; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
}
.pf-item:hover { transform: translateY(-15px); box-shadow: 0 30px 60px rgba(0,0,0,0.12); }
.pf-thumb { 
  height: 220px; position: relative; overflow: hidden;
}
.pf-category {
  position: absolute; bottom: 15px; left: 15px; background: var(--white);
  padding: 4px 12px; border-radius: 50px; font-size: 12px; font-weight: 700;
  color: var(--primary); box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.pf-info { padding: 30px; }
.pf-client { color: var(--primary); font-size: 13px; font-weight: 700; display: block; margin-bottom: 8px; }
.pf-info h4 { font-size: 20px; margin-bottom: 20px; font-weight: 800; color: var(--dark-bg); }

/* 포트폴리오 결과 지표 */
.pf-result { 
  display: flex; gap: 15px; margin-bottom: 20px; 
  padding: 15px; background: #f8fafc; border-radius: 12px;
}
.res-item { flex: 1; }
.res-item .label { font-size: 11px; color: var(--text-sub); display: block; margin-bottom: 4px; }
.res-item .val { font-size: 16px; font-weight: 800; color: var(--primary); }
.pf-info p { color: var(--text-sub); font-size: 14px; line-height: 1.5; }

/* CONTACT SECTION */
.contact-section {
  padding: 100px 20px; background: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80') center/cover fixed;
  position: relative; text-align: center; color: #fff;
}
.contact-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.9); }
.contact-content { position: relative; z-index: 2; }
.contact-content h2 { font-size: 40px; font-weight: 800; margin-bottom: 20px; }
.contact-content p { font-size: 18px; margin-bottom: 50px; opacity: 0.8; }
.contact-box { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.contact-box a {
  padding: 20px 40px; border-radius: 50px; font-size: 20px; font-weight: 700;
  display: flex; align-items: center; gap: 10px; transition: 0.3s;
}
.phone-link { background: #fff; color: var(--dark-bg); }
.phone-link:hover { transform: scale(1.05); }
.kakao-link { background: #ffe812; color: #3c1e1e; }
.kakao-link:hover { transform: scale(1.05); }

/* FOOTER */
.footer { background: #000; color: #666; padding: 60px 20px; text-align: center; font-size: 14px; }
.f-logo { font-size: 24px; font-weight: 800; color: #fff; margin-bottom: 20px; }
.footer p { margin-bottom: 10px; }

/* ANIMATION CLASSES */
.fade-up { opacity: 0; transform: translateY(50px); transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
.fade-up.visible { opacity: 1; transform: translateY(0); }

/* MOBILE RESPONSIVE */
@media (max-width: 1024px) {
  .hero h1 { font-size: 48px; }
  .process-grid, .pricing-container, .pf-grid { grid-template-columns: repeat(2, 1fr); }
  .pricing-card.best-seller { transform: scale(1); }
}

@media (max-width: 768px) {
  .nav { display: none; }
  .mobile-menu-btn { display: block; }
  .hero h1 { font-size: 36px; }
  .process-grid, .pricing-container, .pf-grid, .stats-bar { grid-template-columns: 1fr; gap: 40px; }
  .section-header h2 { font-size: 30px; }
  .section { padding: 80px 20px; }
}
