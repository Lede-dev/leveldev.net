"use client";

import {
  Clapperboard,
  Gamepad2,
  Map,
  ServerCog,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type ServiceGroup = {
  label: string;
  tags: string[];
};

type Service = {
  code: string;
  icon: "world" | "gameplay" | "creator" | "tech";
  title: string;
  lead: string;
  text: string;
  groups: ServiceGroup[];
};

type ServiceExplorerProps = {
  services: Service[];
};

const serviceIcons: Record<Service["icon"], LucideIcon> = {
  world: Map,
  gameplay: Gamepad2,
  creator: Clapperboard,
  tech: ServerCog,
};

function ServiceGlyph({ icon }: { icon: Service["icon"] }) {
  const Icon = serviceIcons[icon];

  return (
    <span className="service-glyph" data-icon={icon} aria-hidden="true">
      <Icon strokeWidth={1.7} />
    </span>
  );
}

export default function ServiceExplorer({ services }: ServiceExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="service-explorer">
      <div className="service-tabs" role="tablist" aria-label="서비스 선택">
        {services.map((service, index) => (
          <button
            className={`service-tab${index === activeIndex ? " active" : ""}`}
            id={`service-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`service-panel-${index}`}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              let nextIndex = index;

              if (event.key === "ArrowRight") {
                nextIndex = (index + 1) % services.length;
              } else if (event.key === "ArrowLeft") {
                nextIndex = (index - 1 + services.length) % services.length;
              } else if (event.key === "Home") {
                nextIndex = 0;
              } else if (event.key === "End") {
                nextIndex = services.length - 1;
              } else {
                return;
              }

              event.preventDefault();
              setActiveIndex(nextIndex);
              requestAnimationFrame(() => {
                document.getElementById(`service-tab-${nextIndex}`)?.focus();
              });
            }}
            key={service.code}
          >
            <span className="service-tab-visual">
              <ServiceGlyph icon={service.icon} />
              <b>{service.code}</b>
            </span>
            <span className="service-tab-copy">
              <strong>{service.title}</strong>
              <small>{service.lead}</small>
            </span>
          </button>
        ))}
      </div>

      {services.map((service, index) => (
        <section
          className="service-panel"
          id={`service-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`service-tab-${index}`}
          hidden={index !== activeIndex}
          key={service.code}
        >
          <div className="service-panel-copy">
            <p>{service.text}</p>
          </div>
          <div className="service-panel-scopes">
            {service.groups.map((group) => (
              <div className="service-scope-group" key={group.label}>
                <strong>{group.label}</strong>
                <div className="service-scope-items">
                  {group.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
