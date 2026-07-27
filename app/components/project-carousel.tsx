"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Project = {
  title: string;
  client: string;
  date: string;
  platform: string;
  description: string;
  image: string;
  imageFit?: string;
  href?: string;
};

type ProjectCarouselProps = {
  projects: Project[];
};

const PROJECTS_PER_PAGE = 2;
const AUTO_PLAY_INTERVAL = 6000;

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="project-visual">
        <img
          className={`project-image${project.imageFit === "contain" ? " contain" : ""}`}
          src={project.image}
          alt={`${project.title} 프로젝트`}
          width="720"
          height="405"
        />
      </div>
      <div className="project-content">
        <div className="project-topline">
          <span>{project.platform}</span>
          <span>{project.date}</span>
        </div>
        <div className="project-meta">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-footer">
            <span className="project-link">CLIENT · {project.client}</span>
            {project.href ? (
              <span className="project-action">프로젝트 보기 ↗</span>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );

  if (project.href) {
    return (
      <a
        className="project-card is-linked"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} 프로젝트 관련 링크 열기`}
      >
        {content}
      </a>
    );
  }

  return <article className="project-card">{content}</article>;
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pages = useMemo(
    () =>
      Array.from(
        { length: Math.ceil(projects.length / PROJECTS_PER_PAGE) },
        (_, index) =>
          projects.slice(
            index * PROJECTS_PER_PAGE,
            index * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE,
          ),
      ),
    [projects],
  );

  const goToPage = (page: number) => {
    const track = trackRef.current;
    if (!track || pages.length === 0) return;

    const nextPage = (page + pages.length) % pages.length;
    track.scrollTo({
      left: nextPage * track.clientWidth,
      behavior: "smooth",
    });
    setActivePage(nextPage);
  };

  useEffect(() => {
    if (
      isPaused ||
      pages.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(
      () => goToPage(activePage + 1),
      AUTO_PLAY_INTERVAL,
    );

    return () => window.clearInterval(timer);
  }, [activePage, isPaused, pages.length]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track?.clientWidth) return;

    const nextPage = Math.round(track.scrollLeft / track.clientWidth);
    setActivePage(Math.min(Math.max(nextPage, 0), pages.length - 1));
  };

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="LevelDev 프로젝트"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goToPage(activePage - 1);
        if (event.key === "ArrowRight") goToPage(activePage + 1);
      }}
    >
      <div
        className="project-track"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {pages.map((page, pageIndex) => (
          <div
            className="project-slide"
            key={page[0]?.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${pageIndex + 1} / ${pages.length}`}
          >
            {page.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        ))}
      </div>

      <div className="project-controls">
        <p aria-live="polite">
          <span>{String(activePage + 1).padStart(2, "0")}</span>
          <b>/</b>
          {String(pages.length).padStart(2, "0")}
        </p>
        <div className="project-dots" aria-label="프로젝트 페이지 선택">
          {pages.map((page, index) => (
            <button
              type="button"
              className={index === activePage ? "active" : ""}
              key={page[0]?.title}
              onClick={() => goToPage(index)}
              aria-label={`${index + 1}번째 프로젝트 묶음 보기`}
              aria-current={index === activePage ? "true" : undefined}
            />
          ))}
        </div>
        <div className="project-arrows">
          <button
            type="button"
            onClick={() => goToPage(activePage - 1)}
            aria-label="이전 프로젝트 보기"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => goToPage(activePage + 1)}
            aria-label="다음 프로젝트 보기"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
