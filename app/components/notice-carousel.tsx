"use client";

import {
  Handshake,
  MessageSquareText,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Notice, NoticeIcon } from "../data/notices";

type NoticeCarouselProps = {
  notices: Notice[];
};

const noticeIcons: Record<NoticeIcon, LucideIcon> = {
  guide: MessageSquareText,
  collaboration: UsersRound,
  partnership: Handshake,
};

export default function NoticeCarousel({ notices }: NoticeCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    setCanScrollBack(track.scrollLeft > 4);
    setCanScrollForward(maxScrollLeft - track.scrollLeft > 4);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(updateControls);
    window.addEventListener("resize", updateControls);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateControls);
    };
  }, [notices.length, updateControls]);

  const scrollNotices = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.72, 320),
      behavior: "smooth",
    });
  };

  return (
    <div className="notice-carousel">
      <div className="notice-controls">
        <p>
          <span>{String(notices.length).padStart(2, "0")}</span> NOTICES
        </p>
        <div>
          <button
            type="button"
            onClick={() => scrollNotices(-1)}
            disabled={!canScrollBack}
            aria-label="이전 공지사항 보기"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollNotices(1)}
            disabled={!canScrollForward}
            aria-label="다음 공지사항 보기"
          >
            →
          </button>
        </div>
      </div>
      <div
        className="notice-track"
        ref={trackRef}
        onScroll={updateControls}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") scrollNotices(-1);
          if (event.key === "ArrowRight") scrollNotices(1);
        }}
        aria-label="공지사항 목록"
      >
        {notices.map((notice, index) => {
          const Icon = noticeIcons[notice.icon];

          return (
            <a
              className="notice-card"
              href={`/news/${notice.slug}`}
              key={notice.slug}
            >
              <span className="notice-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="notice-card-icon" aria-hidden="true">
                <Icon strokeWidth={1.7} />
              </span>
              <span className="notice-card-meta">
                <b>{notice.category}</b>
                <time>{notice.date}</time>
              </span>
              <strong className="notice-card-title">{notice.title}</strong>
              <span className="notice-card-description">
                {notice.description}
              </span>
              <span className="notice-card-link">
                자세히 보기 <b>↗</b>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
