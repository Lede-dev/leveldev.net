const stats = [
  { value: "100+", label: "누적 프로젝트" },
  { value: "50R+", label: "제작한 월드" },
  { value: "5년+", label: "스튜디오 경험" },
  { value: "20+", label: "함께한 파트너" },
];

const partners = [
  ["NEX", "NEXON"],
  ["CF", "Crafton"],
  ["MS", "Microsoft"],
  ["GM", "GameMakers"],
  ["PF", "PlayFarm"],
  ["NB", "Netmarble"],
  ["AR", "Archive Room"],
  ["SC", "Studio C"],
];

const services = [
  {
    code: "01",
    title: "메타버스 & 맵 제작",
    text: "브랜드와 사용자가 자연스럽게 만나는 공간을 기획하고, 플레이 가능한 월드로 완성합니다.",
    tags: ["WORLD", "MAP", "BUILD"],
  },
  {
    code: "02",
    title: "게임 개발",
    text: "아이디어의 재미를 검증하고 시스템, 레벨, 플레이 루프까지 하나의 게임 경험으로 설계합니다.",
    tags: ["GAME", "LEVEL", "SYSTEM"],
  },
  {
    code: "03",
    title: "콘텐츠 크리에이티브",
    text: "IP의 결을 놓치지 않으면서도 플랫폼에 어울리는 인터랙티브 콘텐츠를 제작합니다.",
    tags: ["IP", "STORY", "CONTENT"],
  },
  {
    code: "04",
    title: "기술 컨설팅",
    text: "개발 방향과 기술 난제를 빠르게 정리하고, 실제 출시까지 이어지는 현실적인 답을 제안합니다.",
    tags: ["TECH", "R&D", "OPS"],
  },
];

const projects = [
  { no: "01", title: "Dragon's Keep", type: "WORLD BUILDING", status: "LIVE" },
  { no: "02", title: "Skyfarm Pro", type: "GAME DESIGN", status: "LIVE" },
  { no: "03", title: "네온시티: 야간 순찰", type: "METAVERSE", status: "2026" },
  { no: "04", title: "Harbor Labyrinth", type: "LEVEL DESIGN", status: "LIVE" },
  { no: "05", title: "Custom Survival Server", type: "SERVER DEV", status: "BETA" },
  { no: "06", title: "달빛 정거장", type: "INTERACTIVE IP", status: "2026" },
];

const notices = [
  ["2026.07.22", "LevelDev 신규 프로젝트 팀원을 모집합니다.", "채용"],
  ["2026.07.09", "하반기 파트너 프로젝트 상담 안내", "안내"],
  ["2026.06.18", "스튜디오 공식 홈페이지를 새롭게 준비하고 있습니다.", "소식"],
  ["2026.05.30", "Dragon’s Keep 시즌 업데이트 작업 완료", "프로젝트"],
];

const timeline = [
  {
    year: "2022",
    title: "우리가 만들고 싶은 세계에서 시작",
    text: "작은 팀이 모여 첫 번째 커스텀 월드와 서버를 만들었습니다.",
  },
  {
    year: "2023",
    title: "첫 번째 브랜드 프로젝트",
    text: "기획부터 라이브 운영까지 맡으며 제작 역량을 넓혔습니다.",
  },
  {
    year: "2024",
    title: "Dragon's Keep 누적 1M 플레이",
    text: "플레이어가 계속 돌아오는 경험을 만들 수 있다는 확신을 얻었습니다.",
  },
  {
    year: "2025",
    title: "장르와 플랫폼의 경계를 확장",
    text: "게임, 메타버스, 인터랙티브 IP로 제작 영역을 확장했습니다.",
  },
  {
    year: "2026",
    title: "더 큰 세계를 향해",
    text: "LevelDev만의 제작 방식으로 새로운 파트너와 다음 장을 준비합니다.",
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
          <a href="#projects">프로젝트</a>
          <a href="#story">스토리</a>
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
          <p className="eyebrow">INTERACTIVE CONTENT STUDIO</p>
          <h1>
            WE BUILD
            <span>WORLDS</span>
          </h1>
          <p className="hero-copy">
            아이디어가 플레이가 되는 순간을 만듭니다.
            <br />
            몰입하게 만들고, 기억에 남고, 다시 찾게 되는 세계.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              프로젝트 보기 <span>↗</span>
            </a>
            <a className="button button-ghost" href="#contact">
              함께 만들기 <span>→</span>
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
              LevelDev는 게임과 가상 공간을 만드는 인터랙티브 콘텐츠 스튜디오입니다.
              기술을 앞세우기보다 그 안에서 사용자가 무엇을 느끼고, 어떤 행동을 하게
              될지부터 생각합니다.
            </p>
            <p className="section-copy dim">
              우리가 잘하는 것은 복잡한 아이디어를 선명한 경험으로 바꾸는 일입니다.
              기획, 디자인, 개발, 운영이 한 팀 안에서 유기적으로 움직입니다.
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

      <section className="partners section-tight">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">PARTNERS</p>
            <h2>
              함께하는 <span>파트너</span>
            </h2>
            <p>신뢰를 바탕으로 오래 이어지는 결과를 만듭니다.</p>
          </div>
          <div className="partner-grid">
            {partners.map(([abbr, name]) => (
              <div className="partner-card" key={name}>
                <strong>{abbr}</strong>
                <span>{name}</span>
              </div>
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
              <span>게임</span>
              <span>메타버스</span>
              <span>IP 콘텐츠</span>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.no}>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <span>{project.status}</span>
                </div>
                <strong className="project-number">{project.no}</strong>
                <div className="project-meta">
                  <h3>{project.title}</h3>
                  <p>기획부터 제작까지 LevelDev가 함께한 인터랙티브 프로젝트입니다.</p>
                  <span className="project-link">VIEW CASE ↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="videos section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">MEDIA</p>
            <h2>최근 영상</h2>
          </div>
          <div className="video-layout">
            <article className="featured-video">
              <span className="featured-tag">FEATURED</span>
              <div className="play-button" aria-hidden="true">
                ▶
              </div>
              <div className="video-caption">
                <p>WORLD MAKING FILM · 05:12</p>
                <h3>픽셀에서 세계가 되기까지 — Dragon&apos;s Keep 제작기</h3>
              </div>
            </article>
            <div className="video-list">
              {[
                ["02:48", "네온시티의 밤을 설계하는 방법"],
                ["04:10", "플레이어가 길을 잃지 않는 레벨 디자인"],
                ["03:35", "LevelDev Studio Showreel 2026"],
                ["01:52", "5분 만에 보는 Skyfarm Pro"],
              ].map(([time, title], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>BEHIND THE SCENES · {time}</p>
                  </div>
                  <b>↗</b>
                </article>
              ))}
              <a href="#contact">모든 영상 보기 <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="news section-tight">
        <div className="container">
          <div className="news-heading">
            <div>
              <p className="eyebrow">NEWS</p>
              <h2>공지사항</h2>
            </div>
            <a href="#contact">모두 보기 →</a>
          </div>
          <div className="notice-grid">
            {notices.map(([date, title, category]) => (
              <article key={title}>
                <div>
                  <span>{category}</span>
                  <time>{date}</time>
                </div>
                <h3>{title}</h3>
                <p>LevelDev의 새로운 소식과 프로젝트 업데이트를 전합니다.</p>
                <b>READ MORE ↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story section" id="story">
        <div className="container timeline-wrap">
          <div className="section-heading centered">
            <p className="eyebrow">HISTORY</p>
            <h2>
              우리의 <span>발자취</span>
            </h2>
            <p>작은 픽셀 하나에서 시작해 더 큰 세계를 만들고 있습니다.</p>
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
              재미있는 아이디어가 있다면 들려주세요. 아직 정리되지 않은 생각이어도
              괜찮습니다.
            </p>
            <div className="contact-points">
              {[
                ["01", "프로젝트", "새로운 월드와 게임 제작"],
                ["02", "파트너십", "브랜드·스튜디오 협업"],
                ["03", "채용", "함께 성장할 동료"],
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
            <p>LET&apos;S BUILD TOGETHER</p>
            <h3>함께 협업하세요</h3>
            <p>
              프로젝트 목표와 일정을 간단히 알려주시면 영업일 기준 2일 안에 답변
              드립니다.
            </p>
            <ul>
              <li>
                <span>이메일</span>
                <strong>hello@leveldev.studio</strong>
              </li>
              <li>
                <span>프로젝트 시작</span>
                <strong>2026년 4분기</strong>
              </li>
              <li>
                <span>상담 방식</span>
                <strong>온라인 미팅</strong>
              </li>
            </ul>
            <a className="button button-primary contact-button" href="mailto:hello@leveldev.studio">
              문의 메일 보내기 <span>↗</span>
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
            <p>WE BUILD WORLDS.</p>
            <div className="social-row">
              <a href="#top" aria-label="유튜브">YT</a>
              <a href="#top" aria-label="인스타그램">IG</a>
              <a href="#top" aria-label="링크드인">IN</a>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <strong>STUDIO</strong>
              <a href="#about">회사 소개</a>
              <a href="#story">연혁</a>
              <a href="#contact">채용</a>
            </div>
            <div>
              <strong>WORK</strong>
              <a href="#services">서비스</a>
              <a href="#projects">프로젝트</a>
              <a href="#contact">파트너십</a>
            </div>
            <div>
              <strong>CONTACT</strong>
              <a href="mailto:hello@leveldev.studio">Email</a>
              <a href="#contact">Seoul</a>
              <a href="#contact">문의하기</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 LEVELDEV STUDIO. ALL RIGHTS RESERVED.</span>
          <span>PIXELS INTO WORLDS.</span>
        </div>
      </footer>
    </main>
  );
}
