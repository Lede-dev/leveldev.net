export type NoticeIcon = "guide" | "collaboration" | "partnership";

export type NoticeSection = {
  title: string;
  description: string;
  items?: string[];
};

export type Notice = {
  slug: string;
  icon: NoticeIcon;
  date: string;
  title: string;
  category: string;
  description: string;
  introduction: string;
  sections: NoticeSection[];
};

export const notices: Notice[] = [
  {
    slug: "project-consulting",
    icon: "guide",
    date: "ONGOING",
    title: "콘텐츠 개발 프로젝트 상담 안내",
    category: "안내",
    description:
      "기획 초기 단계부터 제작, 기술 개발, 운영까지 프로젝트에 필요한 범위를 함께 설계합니다.",
    introduction:
      "아이디어만 있는 초기 단계부터 구체적인 제작 계획이 필요한 프로젝트까지 현재 상황과 목표를 확인하고 적절한 제작 범위와 진행 방식을 함께 정리합니다.",
    sections: [
      {
        title: "상담 대상",
        description:
          "크리에이터 콘텐츠, 마인크래프트 서버와 맵, 게임 및 인터랙티브 콘텐츠, 기술 개발과 운영이 필요한 프로젝트를 상담합니다.",
      },
      {
        title: "지원 범위",
        description:
          "프로젝트 성격에 따라 필요한 분야를 선택하거나 하나의 제작 흐름으로 연결할 수 있습니다.",
        items: [
          "콘텐츠 콘셉트와 플레이 흐름 기획",
          "월드·맵 및 2D·3D 리소스 제작",
          "게임플레이·플러그인·모드 개발",
          "서버 구축, 최적화와 운영 지원",
        ],
      },
      {
        title: "진행 방식",
        description:
          "문의 내용을 바탕으로 목표와 일정, 필요한 결과물을 확인한 뒤 제작 범위와 협업 방식을 제안합니다.",
      },
    ],
  },
  {
    slug: "creative-partners",
    icon: "collaboration",
    date: "ONGOING",
    title: "기획·개발·디자인 파트너 상시 모집",
    category: "협업",
    description:
      "다양한 프로젝트를 함께 완성할 콘텐츠 기획자, 개발자, 디자이너의 제안을 기다립니다.",
    introduction:
      "프로젝트의 성격과 일정에 따라 함께할 수 있는 기획자, 개발자, 디자이너와의 장기적인 협업 관계를 찾고 있습니다.",
    sections: [
      {
        title: "모집 분야",
        description:
          "콘텐츠 제작 과정에 필요한 실무 경험과 전문성을 가진 개인 또는 팀의 제안을 받습니다.",
        items: [
          "게임·콘텐츠 기획 및 프로젝트 관리",
          "Unreal·Godot 및 마인크래프트 개발",
          "월드·맵, 2D·3D 리소스 제작",
          "방송·영상 콘텐츠 디자인과 운영",
        ],
      },
      {
        title: "협업 형태",
        description:
          "프로젝트 단위 참여부터 지속적인 제작 파트너십까지 포트폴리오와 가능한 업무 범위를 바탕으로 협의합니다.",
      },
      {
        title: "제안 방법",
        description:
          "간단한 소개, 주요 작업 분야, 포트폴리오 또는 작업 사례를 이메일로 보내주세요.",
      },
    ],
  },
  {
    slug: "creator-brand-partnership",
    icon: "partnership",
    date: "ONGOING",
    title: "크리에이터·브랜드 파트너십 제안",
    category: "파트너십",
    description:
      "방송, 캠페인, 인터랙티브 콘텐츠를 함께 만들 크리에이터와 브랜드의 제안을 받습니다.",
    introduction:
      "채널과 브랜드의 성격에 맞는 참여형 콘텐츠, 방송 이벤트, 캠페인과 콘텐츠 서버를 함께 기획하고 제작합니다.",
    sections: [
      {
        title: "협업 대상",
        description:
          "새로운 콘텐츠 경험을 만들고 싶은 크리에이터, 방송팀, 브랜드와 에이전시의 제안을 기다립니다.",
      },
      {
        title: "제작 가능 범위",
        description:
          "아이디어와 채널 특성에 맞춰 콘텐츠 형식과 제작 범위를 함께 설계합니다.",
        items: [
          "치지직·SOOP·씨미 방송용 콘텐츠",
          "유튜브 영상 및 참여형 이벤트",
          "스트리머 서버와 브랜드 캠페인",
          "콘텐츠 운영 기술과 현장 지원",
        ],
      },
      {
        title: "제안 방법",
        description:
          "목표, 희망 일정, 예상 참여 인원과 참고 자료를 전달해 주시면 적합한 진행 방향을 검토해 회신합니다.",
      },
    ],
  },
];

export function findNotice(slug: string) {
  return notices.find((notice) => notice.slug === slug);
}
