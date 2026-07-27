import ProjectCarousel from "./components/project-carousel";
import ServiceExplorer from "./components/service-explorer";
import VideoShowcase from "./components/video-showcase";
import NoticeCarousel from "./components/notice-carousel";
import { notices } from "./data/notices";

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
    icon: "world" as const,
    title: "월드·맵 & 아트 리소스 제작",
    lead: "게임과 콘텐츠에 필요한 공간과 시각 자산을 제작합니다.",
    text: "콘셉트와 플레이 흐름에 맞춰 월드와 맵, 지형, 건축물, 이벤트 공간을 설계하고 2D·3D 리소스를 제작합니다. 마인크래프트를 포함한 다양한 게임과 콘텐츠 환경에 맞춰 공간의 기능과 시각적 완성도를 함께 설계합니다.",
    groups: [
      {
        label: "마인크래프트",
        tags: ["지형", "모든 크기", "레벨 디자인", "인테리어", "BE", "JE", "모든 버전"],
      },
      {
        label: "게임·콘텐츠 전반",
        tags: ["맵", "레벨 디자인", "2D 리소스", "3D 리소스"],
      },
    ],
  },
  {
    code: "02",
    icon: "gameplay" as const,
    title: "게임플레이 & 시스템 개발",
    lead: "기획된 규칙과 상호작용을 실제로 플레이 가능한 기능으로 구현합니다.",
    text: "마인크래프트에서는 플러그인과 모드를 활용해 콘텐츠 규칙, 시스템, 상호작용을 개발합니다. 그 외 프로젝트에서는 Unreal과 Godot을 기반으로 2D·3D 게임과 플레이 가능한 콘텐츠를 구현합니다.",
    groups: [
      {
        label: "마인크래프트",
        tags: ["플러그인", "모드", "서버 콘텐츠 시스템"],
      },
      {
        label: "게임 개발",
        tags: ["Unreal", "Godot", "2D", "3D", "Mobile", "Desktop"],
      },
    ],
  },
  {
    code: "03",
    icon: "creator" as const,
    title: "크리에이터 콘텐츠 제작",
    lead: "방송과 영상에서 활용할 수 있는 참여형 콘텐츠를 만듭니다.",
    text: "마인크래프트 스트리머 서버뿐 아니라 크리에이터와 브랜드의 아이디어를 기반으로 방송, 촬영, 참여형 이벤트와 유튜브 콘텐츠에 적합한 경험을 기획하고 제작합니다.",
    groups: [
      {
        label: "마인크래프트",
        tags: ["스트리머 서버", "참여형 서버", "방송 이벤트"],
      },
      {
        label: "크리에이터 콘텐츠",
        tags: ["방송용 콘텐츠", "유튜브용 콘텐츠", "참여형 이벤트"],
      },
      {
        label: "지원 플랫폼",
        tags: ["치지직", "SOOP", "씨미"],
      },
    ],
  },
  {
    code: "04",
    icon: "tech" as const,
    title: "기술 개발 & 운영 지원",
    lead: "콘텐츠가 안정적으로 제작되고 서비스되도록 기술 기반을 구축합니다.",
    text: "마인크래프트 서버와 런처 개발부터 게임 및 콘텐츠 프로젝트의 자동화, 운영 환경, 제작 파이프라인까지 필요한 기술 구조를 제안하고 개발합니다. 기획과 프로젝트 관리, 출시 이후 운영도 함께 지원합니다.",
    groups: [
      {
        label: "마인크래프트",
        tags: ["서버 최적화", "마인크래프트 런처", "서버 운영"],
      },
      {
        label: "기술 개발",
        tags: ["자동화", "콘텐츠 제작 파이프라인", "운영 시스템"],
      },
      {
        label: "프로젝트 지원",
        tags: ["기획", "프로젝트 관리", "기술 컨설팅", "유지보수"],
      },
    ],
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
    href: "https://chzzk.naver.com/05ca39e26587ea916a9eba1c6ae2d4ba/community/detail/25626757",
  },
  {
    title: "이리와 운동회",
    client: "유이리",
    date: "2025.09",
    platform: "CHZZK",
    description: "치지직 스트리머들이 함께 즐길 수 있도록 제작한 운동회 콘텐츠 서버입니다.",
    image: "/projects/iriwa-sports-day.png",
    imageFit: "cover",
    href: "https://chzzk.naver.com/6bcc176b0fa71673540159febcd97cd4/community/detail/22065765",
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
    href: "https://www.youtube.com/watch?v=GAJ3yv0Ot9E",
  },
];

const videos = [
  {
    title: "【한강 서버】벽 뒤에 자꾸 뭐가 보임",
    date: "2026.05.24",
    meta: "2.8천 조회 · 2026.05.24",
    author: "김용찬",
    href: "https://www.youtube.com/watch?v=UNk70G0rAS0&t=2s",
    image: "/videos/hangang-server.jpg",
  },
  {
    title: "하꼬가 치지직지원을 받았다고? 😲🫢 | 이리와 운동회",
    date: "2025.10.11",
    meta: "2.3천 조회 · 2025.10.11",
    author: "유이리",
    href: "https://www.youtube.com/watch?v=0PJj4ETImRQ&t=30s",
    image: "/videos/iriwa-sports-day.jpg",
  },
  {
    title: "오징어 게임에서 1등 하기",
    date: "2025.07.27",
    meta: "18.7만 조회 · 2025.07.27",
    author: "블루맥스",
    href: "https://www.youtube.com/watch?v=I04NY35EDlg&t=26s",
    image: "/videos/mojingeo-game.jpg",
  },
];

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
          <h1 aria-label="We Build Play for Everyone.">
            <span className="hero-slogan-line hero-slogan-lead" aria-hidden="true">
              <span>WE</span>
              <span>BUILD</span>
              <span>PLAY</span>
            </span>
            <span className="hero-slogan-line hero-slogan-accent" aria-hidden="true">
              <span>FOR</span>
              <span>EVERYONE.</span>
            </span>
          </h1>
          <p className="hero-copy">
            기획부터 제작, 기술 개발과 운영까지,
            <br />
            모든 플레이어를 위한 즐거운 경험을 만듭니다.
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
              레벨데브는 기획·개발·운영을 하나로 연결해 크리에이터와
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
          <div className="section-heading services-heading">
            <div className="services-heading-title">
              <p className="eyebrow">SERVICES</p>
              <h2>우리가 하는 일</h2>
            </div>
          </div>
          <ServiceExplorer services={services} />
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
            videos={videos}
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
          </div>
          <NoticeCarousel notices={notices} />
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-intro">
            <div>
              <p className="eyebrow">CONTACT</p>
              <h2 className="display-title">
                필요한 콘텐츠를
                <br />
                <span>함께 만듭니다</span>
              </h2>
            </div>
            <div className="contact-brief">
              <p>
                콘텐츠 기획부터 제작, 기술 개발과 운영까지 프로젝트에 필요한
                범위를 함께 설계합니다. 목표와 현재 고민만 들려주세요.
              </p>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="mailto:contact@leveldev.net?subject=LevelDev%20Project%20Inquiry"
                >
                  프로젝트 문의하기 <span>↗</span>
                </a>
                <a className="contact-email" href="mailto:contact@leveldev.net">
                  contact@leveldev.net
                </a>
              </div>
            </div>
          </div>

          <div className="contact-flow" aria-label="프로젝트 진행 과정">
            {[
              ["01", "이야기를 듣습니다", "아이디어와 목표, 타깃, 일정, 현재 고민을 확인합니다."],
              ["02", "범위를 설계합니다", "기획·디자인·개발·운영에서 필요한 역할과 방향을 제안합니다."],
              ["03", "함께 실행합니다", "제작과 출시부터 라이브 운영, 이후 개선까지 연결합니다."],
            ].map(([no, title, desc]) => (
              <div key={no}>
                <span>{no}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="recruitment-strip">
            <div className="recruitment-copy">
              <p>JOIN LEVELDEV</p>
              <h3>함께 만들 동료를 찾습니다</h3>
              <span>
                결과만큼 만드는 과정과 협업을 중요하게 생각하는 분을 기다립니다.
              </span>
            </div>
            <ul className="recruitment-roles" aria-label="채용 분야">
              {["콘텐츠 기획", "인터랙티브 개발", "콘텐츠 디자인", "영상 제작"].map(
                (role) => (
                  <li key={role}>
                    <i aria-hidden="true" />
                    {role}
                  </li>
                ),
              )}
            </ul>
            <a
              className="recruitment-link"
              href="mailto:contact@leveldev.net?subject=LevelDev%20Career%20Inquiry"
            >
              채용 문의 <span>↗</span>
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
            <p>WE BUILD PLAY FOR EVERYONE.</p>
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
