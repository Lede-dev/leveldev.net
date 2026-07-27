const stats = [
  { value: "10+", label: "완료 작업" },
  { value: "10M+", label: "누적 콘텐츠 조회수" },
  { value: "5년+", label: "스튜디오 경력" },
  { value: "10+", label: "파트너십" },
];

const partners = [
  {
    name: "이루",
    category: "MINECRAFT CREATOR",
    href: "https://www.youtube.com/@이루05",
    image: "/partners/iru.jpg",
  },
  {
    name: "셔니",
    category: "MINECRAFT CREATOR",
    href: "https://www.youtube.com/@수박머리_셔니",
    image: "/partners/seanyi.jpg",
  },
  {
    name: "블던",
    category: "MINECRAFT CREATOR",
    href: "https://www.youtube.com/@블던",
    image: "/partners/bluedun.jpg",
  },
  {
    name: "알지모",
    category: "MINECRAFT CREATOR",
    href: "https://www.youtube.com/@알지모",
    image: "/partners/algimo.jpg",
  },
  {
    name: "머땡",
    category: "MINECRAFT CREATOR",
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
    title: "마인크래프트 맵 제작",
    text: "서바이벌, 미니게임, 어드벤처, RPG까지 스토리와 빌딩이 어우러진 고품질 마인크래프트 월드를 설계하고 제작합니다.",
    tags: ["SURVIVAL", "MINIGAME", "RPG"],
  },
  {
    code: "02",
    title: "게임 개발",
    text: "마인크래프트 플러그인·모드부터 독립 게임과 커스텀 서버까지, 아이디어를 안정적인 플레이 경험으로 구현합니다.",
    tags: ["PLUGIN", "MOD", "SERVER"],
  },
  {
    code: "03",
    title: "콘텐츠 크리에이션",
    text: "유튜브 영상, 쇼츠, 썸네일과 시리즈를 기획합니다. 채널의 방향 설정부터 촬영·편집까지 제작 전 과정을 지원합니다.",
    tags: ["YOUTUBE", "SHORTS", "SERIES"],
  },
  {
    code: "04",
    title: "기술 개발 & 컨설팅",
    text: "서버 인프라, 커스텀 봇, 자동화 시스템을 구축하고 마인크래프트와 게임 프로젝트에 필요한 기술 방향을 제안합니다.",
    tags: ["INFRA", "BOT", "AUTOMATION"],
  },
];

const projects = [
  {
    no: "01",
    title: "한강서버",
    client: "한사기",
    date: "2026.04",
    platform: "CHZZK",
    description: "치지직 스트리머를 위해 기획·개발한 콘텐츠 서버입니다.",
    image: "/projects/hangang-server.png",
    imageFit: "contain",
  },
  {
    no: "02",
    title: "이리와 운동회",
    client: "유이리",
    date: "2025.09",
    platform: "CHZZK",
    description: "치지직 스트리머들이 함께 즐길 수 있도록 제작한 운동회 콘텐츠 서버입니다.",
    image: "/projects/iriwa-sports-day.png",
    imageFit: "cover",
  },
  {
    no: "03",
    title: "모징어 게임",
    client: "로빈",
    date: "2025.07",
    platform: "ALL PLATFORM",
    description: "모든 플랫폼의 대규모 스트리머와 유튜버가 참여한 콘텐츠 서버입니다.",
    image: "/projects/mojingeo-game.png",
    imageFit: "cover",
  },
  {
    no: "04",
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

const notices = [
  {
    date: "2025.04.20",
    title: "Dragon's Keep 맵 v2.0 업데이트 출시",
    category: "공지",
    description: "새로운 던전, 추가 보스와 멀티플레이 개선을 포함한 대규모 업데이트를 공개했습니다.",
  },
  {
    date: "2025.04.15",
    title: "주니어 빌더 / 콘텐츠 크리에이터 모집",
    category: "채용",
    description: "세계와 이야기를 함께 만들 창의적인 빌더와 콘텐츠 크리에이터를 찾고 있습니다.",
  },
  {
    date: "2025.04.08",
    title: "스카이워즈 시즌 3 토너먼트 개최",
    category: "이벤트",
    description: "스카이워즈 서버 시즌 3를 기념하는 공식 토너먼트와 시상 프로그램을 진행합니다.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "마인크래프트 맵 제작 팀으로 시작",
    text: "첫 어드벤처 맵 ‘Shadow Keep’를 무료 배포하며 커뮤니티에 LevelDev의 이름을 알렸습니다.",
  },
  {
    year: "2021",
    title: "유튜브 채널 개설 · 구독자 10K",
    text: "빌딩 타임랩스와 맵 소개 영상을 시작해 채널 개설 6개월 만에 구독자 1만 명을 달성했습니다.",
  },
  {
    year: "2022",
    title: "Dragon's Keep 첫 유료 출시",
    text: "MCMarket에서 출시 첫 달 500카피를 판매하며 독창적인 월드 제작의 상업적 가능성을 확인했습니다.",
  },
  {
    year: "2023",
    title: "전문 팀 확장 · 서버 사업 시작",
    text: "전임 빌더 3명과 개발자 2명이 합류하고, 커스텀 서버 동시 접속자 1,000명을 기록했습니다.",
  },
  {
    year: "2024",
    title: "MCN 파트너십 · 구독자 50K",
    text: "GameMCN과 파트너십을 체결하고 유튜브 구독자 5만 명, 누적 조회수 5,000만 뷰를 달성했습니다.",
  },
  {
    year: "2025",
    title: "마인크래프트를 넘어 새로운 IP로",
    text: "독자 게임 IP 개발에 착수하고 국내 스튜디오 파트너들과 장기 프로젝트를 진행하고 있습니다.",
  },
];

export const dynamic = "force-static";

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="LevelDev 홈">
          <Mark />
          <span>LEVELDEV</span>
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
          <p className="eyebrow">MINECRAFT CONTENT STUDIO</p>
          <h1>
            WE BUILD
            <span>WORLDS</span>
          </h1>
          <p className="hero-copy">
            마인크래프트 콘텐츠 제작부터 게임 개발까지,
            <br />
            픽셀 하나하나 세계를 만드는 크리에이티브 스튜디오.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              포트폴리오 보기 <span>↗</span>
            </a>
            <a className="button button-ghost" href="#media">
              유튜브 콘텐츠 <span>→</span>
            </a>
          </div>
        </div>
        <div className="scroll-note" aria-hidden="true">
          SCROLL
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2 className="display-title">
              픽셀로 세계를
              <br />
              <span>빚는 스튜디오</span>
            </h2>
            <p className="section-copy">
              LevelDev는 마인크래프트 세계관을 바탕으로 고품질 콘텐츠와 게임을
              만드는 전문 스튜디오입니다. 단순한 영상 제작을 넘어 플레이어가 직접
              탐험하고 도전하는 세계를 설계합니다.
            </p>
            <p className="section-copy dim">
              맵 하나에도 스토리를, 영상 하나에도 감동을 담습니다. 제작의 경계를
              확장하며 플레이어와 시청자 모두에게 오래 기억되는 경험을 만듭니다.
            </p>
          </div>
          <div className="stat-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <span className="stat-icon">⌁</span>
                <strong>{stat.value}</strong>
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
            <p>LevelDev와 함께 더 나은 마인크래프트 경험을 만드는 파트너입니다.</p>
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
            <div className="filter-row" aria-label="프로젝트 분류">
              <span className="active">전체</span>
              <span>맵</span>
              <span>게임</span>
              <span>콘텐츠</span>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.no}>
                {project.image ? (
                  <img
                    className={`project-image${project.imageFit === "contain" ? " contain" : ""}`}
                    src={project.image}
                    alt={`${project.title} 프로젝트`}
                    width="640"
                    height="360"
                  />
                ) : null}
                <div className="project-topline">
                  <span>{project.platform}</span>
                  <span>{project.date}</span>
                </div>
                <strong className="project-number">{project.no}</strong>
                <div className="project-meta">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-link">CLIENT · {project.client}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="videos section" id="media">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">MEDIA</p>
            <h2>최근 영상</h2>
          </div>
          <div className="video-layout">
            <a
              className="featured-video"
              href={featuredVideo.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${featuredVideo.title} YouTube에서 보기`}
            >
              <img
                className="video-cover"
                src={featuredVideo.image}
                alt=""
                width="1280"
                height="720"
              />
              <span className="featured-tag">FEATURED</span>
              <div className="play-button" aria-hidden="true">
                ▶
              </div>
              <div className="video-caption">
                <p>
                  {featuredVideo.author} · {featuredVideo.meta}
                </p>
                <h3>{featuredVideo.title}</h3>
              </div>
            </a>
            <div className="video-list">
              {videos.map((video, index) => (
                <a
                  className="video-item"
                  href={video.href}
                  key={video.title}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${video.title} YouTube에서 보기`}
                >
                  <span>0{index + 1}</span>
                  <img src={video.image} alt="" width="160" height="90" />
                  <div>
                    <h3>{video.title}</h3>
                    <p>
                      {video.author} · {video.meta}
                    </p>
                  </div>
                  <b>↗</b>
                </a>
              ))}
              <a href="#contact">
                채널 구독 문의 <span>→</span>
              </a>
            </div>
          </div>
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

      <section className="story section" id="history">
        <div className="container timeline-wrap">
          <div className="section-heading centered">
            <p className="eyebrow">HISTORY</p>
            <h2>
              우리의 <span>발자취</span>
            </h2>
            <p>2020년 작은 맵 제작 팀에서 시작해 더 넓은 세계를 만들고 있습니다.</p>
          </div>
          <div className="timeline">
            <div className="timeline-line" aria-hidden="true" />
            {timeline.map((item, index) => (
              <article className={index % 2 === 0 ? "left" : "right"} key={item.year}>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <time>{item.year}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
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
              함께 만들어
              <br />
              <span>가요</span>
            </h2>
            <p className="section-copy">
              프로젝트 의뢰, 협업 제안, 오픈소스 기여 또는 단순한 인사도
              환영합니다. 가장 편한 채널로 LevelDev에 연락해 주세요.
            </p>
            <div className="contact-points">
              {[
                ["01", "Discord", "커뮤니티 서버에서 직접 대화"],
                ["02", "이메일", "hello@leveldev.studio"],
                ["03", "프로젝트", "맵·서버·콘텐츠 제작 협업"],
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
              LevelDev와 함께 세계를 만들 크리에이터, 개발자, 빌더를 찾습니다.
              경험보다 열정을, 결과만큼 만드는 과정을 중요하게 생각합니다.
            </p>
            <ul>
              <li>
                <span>마인크래프트 빌더</span>
                <strong>모집 중</strong>
              </li>
              <li>
                <span>플러그인 개발자</span>
                <strong>모집 중</strong>
              </li>
              <li>
                <span>콘텐츠 크리에이터</span>
                <strong>모집 중</strong>
              </li>
              <li>
                <span>영상 편집자</span>
                <strong>모집 중</strong>
              </li>
            </ul>
            <a className="button button-primary contact-button" href="mailto:jobs@leveldev.studio">
              지원 메일 보내기 <span>↗</span>
            </a>
          </aside>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <Mark />
              <span>LEVELDEV</span>
            </a>
            <p>픽셀 하나하나, 세계를 만드는 스튜디오.</p>
            <div className="social-row">
              <a href="#media" aria-label="유튜브 콘텐츠">
                YT
              </a>
              <a href="#contact" aria-label="Discord 커뮤니티">
                DC
              </a>
              <a href="mailto:hello@leveldev.studio" aria-label="LevelDev 이메일">
                EM
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <strong>STUDIO</strong>
              <a href="#about">스튜디오 소개</a>
              <a href="#history">연혁</a>
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
              <a href="mailto:hello@leveldev.studio">Email</a>
              <a href="#contact">Discord</a>
              <a href="#contact">문의하기</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 LEVELDEV STUDIO. ALL RIGHTS RESERVED.</span>
          <span>모든 세계는 픽셀에서 시작됩니다.</span>
        </div>
      </footer>
    </main>
  );
}
