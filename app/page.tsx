import ProjectCarousel from "./components/project-carousel";
import VideoShowcase from "./components/video-showcase";

const stats = [
  { value: "10M", suffix: "+", label: "누적 콘텐츠 조회수" },
  { value: "10", suffix: "+", label: "완료 작업" },
  { value: "5년", suffix: "+", label: "콘텐츠 개발 경력" },
  { value: "10", suffix: "+", label: "파트너십" },
];

const partners = [
  {
    name: "이루",
    category: "CONTENT CREATOR",
    href: "https://www.youtube.com/@이루05",
    image: "/partners/iru.jpg",
  },
  {
    name: "셔니",
    category: "CONTENT CREATOR",
    href: "https://www.youtube.com/@수박머리_셔니",
    image: "/partners/seanyi.jpg",
  },
  {
    name: "블던",
    category: "CONTENT CREATOR",
    href: "https://www.youtube.com/@블던",
    image: "/partners/bluedun.jpg",
  },
  {
    name: "알지모",
    category: "CONTENT CREATOR",
    href: "https://www.youtube.com/@알지모",
    image: "/partners/algimo.jpg",
  },
  {
    name: "머땡",
    category: "CONTENT CREATOR",
    href: "https://www.youtube.com/@머땡",
    image: "/partners/meottaeng.jpg",
  },
  {
    name: "Stella IT",
    category: "TECHNOLOGY PARTNER",
    href: "https://stella-it.com/",
    image: "/partners/stella-it.jpg",
  },
];

const services = [
  {
    code: "01",
    phase: "PLAN",
    title: "전략 기획 & 프로덕션",
    text: "목적과 타깃을 정리하고, 세계관·포맷·사용자 여정을 설계해 제작 가능한 실행안과 결과물로 연결합니다.",
    tags: ["STRATEGY", "FORMAT", "PRODUCTION"],
  },
  {
    code: "02",
    phase: "BUILD",
    title: "인터랙티브 경험 개발",
    text: "게임, 콘텐츠 서버, 참여형 이벤트 등 사용자가 직접 움직이고 반응하는 경험을 안정적인 기술로 구현합니다.",
    tags: ["GAME", "SERVER", "INTERACTIVE"],
  },
  {
    code: "03",
    phase: "CONNECT",
    title: "크리에이터 & 브랜드 캠페인",
    text: "크리에이터와 브랜드의 목소리를 살린 방송·영상·캠페인을 기획해 사람과 채널이 만나는 접점을 만듭니다.",
    tags: ["CREATOR", "BRAND", "MEDIA"],
  },
  {
    code: "04",
    phase: "OPERATE",
    title: "기술 운영 & 성장 지원",
    text: "인프라와 자동화, 라이브 운영 체계를 구축하고 데이터와 피드백을 바탕으로 출시 이후 개선을 지원합니다.",
    tags: ["INFRA", "OPERATIONS", "CONSULTING"],
  },
];

const projects = [
  {
    title: "한강서버",
    client: "한사기",
    date: "2026.04",
    platform: "CHZZK",
    description: "치지직 스트리머를 위해 기획·개발한 콘텐츠 서버입니다.",
    image: "/projects/hangang-server.png",
    imageFit: "contain",
  },
  {
    title: "이리와 운동회",
    client: "유이리",
    date: "2025.09",
    platform: "CHZZK",
    description: "치지직 스트리머들이 함께 즐길 수 있도록 제작한 운동회 콘텐츠 서버입니다.",
    image: "/projects/iriwa-sports-day.png",
    imageFit: "cover",
  },
  {
    title: "모징어 게임",
    client: "로빈",
    date: "2025.07",
    platform: "ALL PLATFORM",
    description: "모든 플랫폼의 대규모 스트리머와 유튜버가 참여한 콘텐츠 서버입니다.",
    image: "/projects/mojingeo-game.png",
    imageFit: "cover",
  },
  {
    title: "블루점프 원블럭",
    client: "대월향 & 블루점프",
    date: "2026.05",
    platform: "SOOP",
    description: "SOOP 블루점프 멤버 전용으로 설계한 원블럭 콘텐츠 서버입니다.",
    image: "/projects/bluejump-oneblock.png",
    imageFit: "cover",
  },
];

const videos = [
  {
    title: "【한강 서버】벽 뒤에 자꾸 뭐가 보임",
    meta: "2.8천 조회 · 2026.05.24",
    author: "김용찬",
    href: "https://www.youtube.com/watch?v=UNk70G0rAS0&t=2s",
    image: "/videos/hangang-server.jpg",
  },
  {
    title: "하꼬가 치지직지원을 받았다고? 😲🫢 | 이리와 운동회",
    meta: "2.3천 조회 · 2025.10.11",
    author: "유이리",
    href: "https://www.youtube.com/watch?v=0PJj4ETImRQ&t=30s",
    image: "/videos/iriwa-sports-day.jpg",
  },
];

const featuredVideo = {
  title: "오징어 게임에서 1등 하기",
  meta: "18.7만 조회 · 2025.07.27",
  author: "블루맥스",
  href: "https://www.youtube.com/watch?v=I04NY35EDlg&t=26s",
  image: "/videos/mojingeo-game.jpg",
};

const socialLinks = [
  {
    name: "Discord",
    detail: "커뮤니티 참여",
    href: "https://discord.gg/49HEWTA",
    icon: "/icons/discord.svg",
    external: true,
  },
  {
    name: "YouTube",
    detail: "콘텐츠 채널",
    href: "https://www.youtube.com/channel/UCYRR-uYiex4Cx7IIIwFlEpg",
    icon: "/icons/youtube.svg",
    external: true,
  },
  {
    name: "GitHub",
    detail: "leveldevinc",
    href: "https://github.com/leveldevinc",
    icon: "/icons/github.svg",
    external: true,
  },
  {
    name: "Email",
    detail: "contact@leveldev.net",
    href: "mailto:contact@leveldev.net",
    icon: "/icons/mail.svg",
    external: false,
  },
];

const notices = [
  {
    date: "ONGOING",
    title: "콘텐츠 개발 프로젝트 상담 안내",
    category: "안내",
    description: "기획 초기 단계부터 제작, 기술 개발, 운영까지 프로젝트에 필요한 범위를 함께 설계합니다.",
  },
  {
    date: "ONGOING",
    title: "기획·개발·디자인 파트너 상시 모집",
    category: "협업",
    description: "다양한 프로젝트를 함께 완성할 콘텐츠 기획자, 개발자, 디자이너의 제안을 기다립니다.",
  },
  {
    date: "ONGOING",
    title: "크리에이터·브랜드 파트너십 제안",
    category: "파트너십",
    description: "방송, 캠페인, 인터랙티브 콘텐츠를 함께 만들 크리에이터와 브랜드의 제안을 받습니다.",
  },
];

export const dynamic = "force-static";

function BrandLogo() {
  return (
    <img
      className="brand-logo"
      src="/logo.svg"
      alt=""
      width="116"
      height="36"
      aria-hidden="true"
    />
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="LevelDev 홈">
          <BrandLogo />
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#services">서비스</a>
          <a href="#projects">포트폴리오</a>
          <a href="#media">미디어</a>
        </nav>
        <a className="header-cta" href="#contact">
          프로젝트 문의 <span>↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="signal signal-a" aria-hidden="true" />
        <div className="signal signal-b" aria-hidden="true" />
        <div className="signal signal-c" aria-hidden="true" />
        <div className="container hero-content">
          <p className="eyebrow">CONTENT DEVELOPMENT COMPANY</p>
          <h1>
            WE BUILD
            <span>CONTENT</span>
          </h1>
          <p className="hero-copy">
            기획부터 제작, 기술 개발과 운영까지,
            <br />
            아이디어를 오래 남는 콘텐츠 경험으로 만듭니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              포트폴리오 보기 <span>↗</span>
            </a>
            <a className="button button-ghost" href="#services">
              서비스 살펴보기 <span>→</span>
            </a>
          </div>
        </div>
        <div className="scroll-note" aria-hidden="true">
          SCROLL
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container about-grid">
          <div className="about-intro">
            <div>
              <p className="eyebrow">OUR STORY</p>
              <h2 className="display-title">
                아이디어를 경험으로
                <br />
                <span>연결합니다</span>
              </h2>
            </div>
            <p className="about-summary">
              LevelDev Inc.는 기획·개발·운영을 하나로 연결해 크리에이터와
              브랜드의 아이디어를 참여형 콘텐츠와 기술 기반 서비스로 구현합니다.
            </p>
          </div>
          <div className="stat-grid">
            {stats.map((stat, index) => (
              <article
                className={`stat-card${index === 0 ? " featured" : ""}`}
                key={stat.label}
              >
                <strong>
                  <span>{stat.value}</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </strong>
                <small>{stat.label}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partners section-tight" id="partners">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">PARTNERS</p>
            <h2>
              함께하는 <span>파트너</span>
            </h2>
            <p>프로젝트의 가능성을 함께 확장하는 크리에이터와 기술 파트너입니다.</p>
          </div>
          <div className="partner-grid">
            {partners.map((partner) => (
              <a
                className="partner-card"
                href={partner.href}
                key={partner.name}
                target="_blank"
                rel="noreferrer"
                aria-label={`${partner.name} 파트너 페이지 열기`}
              >
                <img
                  className="partner-avatar"
                  src={partner.image}
                  alt={`${partner.name} 프로필`}
                  width="96"
                  height="96"
                />
                <strong>{partner.name}</strong>
                <span>{partner.category}</span>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">SERVICES</p>
            <h2>우리가 하는 일</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.code}>
                <div className="service-icon">{service.code}</div>
                <span className="service-phase">{service.phase}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tag-row">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">PORTFOLIO</p>
            <h2>프로젝트</h2>
          </div>
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <section className="videos section" id="media">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">MEDIA</p>
            <h2>최근 영상</h2>
          </div>
          <VideoShowcase
            videos={[featuredVideo, ...videos]}
            channelHref="https://www.youtube.com/channel/UCYRR-uYiex4Cx7IIIwFlEpg"
          />
        </div>
      </section>

      <section className="news section-tight" id="news">
        <div className="container">
          <div className="news-heading">
            <div>
              <p className="eyebrow">NEWS</p>
              <h2>공지사항</h2>
            </div>
            <a href="#contact">문의하기 →</a>
          </div>
          <div className="notice-grid">
            {notices.map((item) => (
              <article key={item.title}>
                <div>
                  <span>{item.category}</span>
                  <time>{item.date}</time>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <b>LEVELDEV NEWS ↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2 className="display-title">
              필요한 콘텐츠를
              <br />
              <span>함께 만듭니다</span>
            </h2>
            <p className="section-copy">
              콘텐츠 기획부터 제작, 기술 개발, 운영까지 필요한 범위를 함께
              설계합니다. 프로젝트의 목표와 현재 고민을 들려주세요.
            </p>
            <div className="contact-points">
              {[
                ["01", "기획", "아이디어·타깃·콘텐츠 구조 설계"],
                ["02", "제작", "디자인·개발·프로덕션 실행"],
                ["03", "운영", "출시·라이브 운영·지속 개선"],
              ].map(([no, title, desc]) => (
                <div key={no}>
                  <span>{no}</span>
                  <p>
                    <strong>{title}</strong>
                    {desc}
                  </p>
                  <b>→</b>
                </div>
              ))}
            </div>
          </div>
          <aside className="contact-card">
            <div className="contact-glow" aria-hidden="true" />
            <div className="contact-icon">⌁</div>
            <p>NOW HIRING</p>
            <h3>팀에 합류하세요</h3>
            <p>
              LevelDev와 함께 콘텐츠를 만들 기획자, 개발자, 디자이너, 크리에이터를
              찾습니다. 결과만큼 만드는 과정과 협업을 중요하게 생각합니다.
            </p>
            <ul>
              <li>
                <span>콘텐츠 기획자</span>
                <strong>모집 중</strong>
              </li>
              <li>
                <span>인터랙티브 개발자</span>
                <strong>모집 중</strong>
              </li>
              <li>
                <span>콘텐츠 디자이너</span>
                <strong>모집 중</strong>
              </li>
              <li>
                <span>영상 편집자</span>
                <strong>모집 중</strong>
              </li>
            </ul>
            <a className="button button-primary contact-button" href="mailto:contact@leveldev.net">
              지원 메일 보내기 <span>↗</span>
            </a>
          </aside>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top" aria-label="LevelDev 홈">
              <BrandLogo />
            </a>
            <p>아이디어를 콘텐츠로, 콘텐츠를 경험으로.</p>
            <div className="social-row">
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  key={social.name}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer" : undefined}
                  aria-label={`${social.name} ${social.detail}`}
                >
                  <span className="social-icon" aria-hidden="true">
                    <img src={social.icon} alt="" width="22" height="22" />
                  </span>
                  <span className="social-copy">
                    <strong>{social.name}</strong>
                    <small>{social.detail}</small>
                  </span>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            <div>
              <strong>COMPANY</strong>
              <a href="#about">회사 소개</a>
              <a href="#partners">파트너</a>
              <a href="#contact">채용</a>
            </div>
            <div>
              <strong>CONTENT</strong>
              <a href="#services">서비스</a>
              <a href="#projects">포트폴리오</a>
              <a href="#media">미디어</a>
            </div>
            <div>
              <strong>CONTACT</strong>
              <a href="mailto:contact@leveldev.net">Email</a>
              <a href="https://discord.gg/49HEWTA" target="_blank" rel="noreferrer">
                Discord
              </a>
              <a href="https://github.com/leveldevinc" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 LEVELDEV INC. ALL RIGHTS RESERVED.</span>
          <span>모든 콘텐츠는 좋은 질문에서 시작됩니다.</span>
        </div>
      </footer>
    </main>
  );
}
