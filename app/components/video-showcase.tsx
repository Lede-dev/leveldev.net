"use client";

import { useState } from "react";

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
  const activeVideo = videos[activeIndex];

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
          <span className="video-play" aria-hidden="true">
            ▶
          </span>
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
        <p>NEXT VIDEOS</p>
        <a href={channelHref} target="_blank" rel="noreferrer">
          YouTube 채널에서 더 보기 <span>↗</span>
        </a>
      </div>

      <div className="video-selectors">
        {videos.map((video, index) =>
          index === activeIndex ? null : (
            <button
              type="button"
              className="video-selector"
              key={video.title}
              onClick={() => setActiveIndex(index)}
              aria-label={`${video.title} 메인 영상으로 선택`}
            >
              <img src={video.image} alt="" width="240" height="135" />
              <span className="video-selector-copy">
                <small>{video.author}</small>
                <strong>{video.title}</strong>
                <span>{video.meta}</span>
              </span>
              <b aria-hidden="true">선택</b>
            </button>
          ),
        )}
      </div>
    </div>
  );
}
