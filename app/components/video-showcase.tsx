"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Video = {
  title: string;
  meta: string;
  author: string;
  href: string;
  image: string;
};

type VideoShowcaseProps = {
  videos: Video[];
  channelHref: string;
};

export default function VideoShowcase({
  videos,
  channelHref,
}: VideoShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);
  const queueRef = useRef<HTMLDivElement>(null);
  const activeVideo = videos[activeIndex];
  const queuedVideos = useMemo(
    () =>
      videos
        .map((video, index) => ({ video, index }))
        .filter(({ index }) => index !== activeIndex),
    [activeIndex, videos],
  );

  const updateQueueControls = useCallback(() => {
    const queue = queueRef.current;
    if (!queue) return;

    const maxScrollLeft = queue.scrollWidth - queue.clientWidth;
    setCanScrollBack(queue.scrollLeft > 4);
    setCanScrollForward(maxScrollLeft - queue.scrollLeft > 4);
  }, []);

  useEffect(() => {
    const queue = queueRef.current;
    if (!queue) return;

    queue.scrollTo({ left: 0, behavior: "instant" });
    const frame = window.requestAnimationFrame(updateQueueControls);
    window.addEventListener("resize", updateQueueControls);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateQueueControls);
    };
  }, [activeIndex, queuedVideos.length, updateQueueControls]);

  const scrollQueue = (direction: -1 | 1) => {
    const queue = queueRef.current;
    if (!queue) return;

    queue.scrollBy({
      left: direction * Math.max(queue.clientWidth * 0.82, 280),
      behavior: "smooth",
    });
  };

  if (!activeVideo) return null;

  return (
    <div className="media-showcase">
      <div className="video-stage">
        <a
          className="video-stage-media"
          href={activeVideo.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${activeVideo.title} YouTube에서 보기`}
          >
            <img
              src={activeVideo.image}
              alt=""
              width="1280"
              height="720"
            />
        </a>

        <div className="video-stage-info" aria-live="polite">
          <p className="video-kicker">SELECTED VIDEO</p>
          <div className="video-byline">
            <strong>{activeVideo.author}</strong>
            <span>{activeVideo.meta}</span>
          </div>
          <h3>{activeVideo.title}</h3>
          <a
            className="video-watch-link"
            href={activeVideo.href}
            target="_blank"
            rel="noreferrer"
          >
            YouTube에서 보기 <span>↗</span>
          </a>
        </div>
      </div>

      <div className="video-selector-heading">
        <div className="video-queue-title">
          <p>NEXT VIDEOS</p>
          <span>{String(queuedVideos.length).padStart(2, "0")} VIDEOS</span>
        </div>
        <div className="video-queue-actions">
          <a href={channelHref} target="_blank" rel="noreferrer">
            YouTube 채널에서 더 보기 <span>↗</span>
          </a>
          <div className="video-queue-arrows">
            <button
              type="button"
              onClick={() => scrollQueue(-1)}
              disabled={!canScrollBack}
              aria-label="이전 영상 목록 보기"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollQueue(1)}
              disabled={!canScrollForward}
              aria-label="다음 영상 목록 보기"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        className="video-selectors"
        data-count={Math.min(queuedVideos.length, 3)}
        ref={queueRef}
        onScroll={updateQueueControls}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") scrollQueue(-1);
          if (event.key === "ArrowRight") scrollQueue(1);
        }}
        aria-label="다음 영상 목록"
      >
        {queuedVideos.map(({ video, index }) => (
          <button
            type="button"
            className="video-selector"
            key={video.title}
            onClick={() => setActiveIndex(index)}
            aria-label={`${video.title} 메인 영상으로 선택`}
          >
            <span className="video-selector-image">
              <img src={video.image} alt="" width="480" height="270" />
            </span>
            <span className="video-selector-copy">
              <small>{video.author}</small>
              <strong>{video.title}</strong>
              <span>{video.meta}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
