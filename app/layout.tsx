import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leveldev.net"),
  title: "LevelDev Inc. — We Build Play for Everyone.",
  description:
    "모든 플레이어를 위한 즐거운 경험을 기획하고 제작하며 운영하는 콘텐츠 개발사 LevelDev Inc.입니다.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "콘텐츠 개발",
    "콘텐츠 제작",
    "인터랙티브 콘텐츠",
    "게임 개발",
    "크리에이터 콘텐츠",
    "콘텐츠 서버",
    "LevelDev",
  ],
  icons: {
    icon: "/symbol.svg",
    shortcut: "/symbol.svg",
  },
  openGraph: {
    title: "LevelDev Inc. — We Build Play for Everyone.",
    description:
      "기획부터 제작, 기술 개발과 운영까지 모든 플레이어를 위한 즐거운 경험을 만듭니다.",
    type: "website",
    url: "/",
    siteName: "LevelDev Inc.",
    locale: "ko_KR",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "LevelDev Inc. — We Build Play for Everyone.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelDev Inc. — We Build Play for Everyone.",
    description:
      "기획부터 제작, 기술 개발과 운영까지 모든 플레이어를 위한 즐거운 경험을 만듭니다.",
    images: ["/og.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://leveldev.net/#organization",
      name: "LevelDev Inc.",
      alternateName: ["레벨데브", "LevelDev"],
      url: "https://leveldev.net/",
      logo: {
        "@type": "ImageObject",
        url: "https://leveldev.net/logo.svg",
      },
      image: "https://leveldev.net/og.png",
      email: "contact@leveldev.net",
      slogan: "We Build Play for Everyone.",
      description:
        "레벨데브는 기획, 제작, 기술 개발과 운영을 연결해 모든 플레이어를 위한 콘텐츠와 서비스를 제공합니다.",
      sameAs: [
        "https://www.youtube.com/channel/UCYRR-uYiex4Cx7IIIwFlEpg",
        "https://github.com/leveldevinc",
      ],
      knowsAbout: [
        "콘텐츠 기획 및 제작",
        "게임 및 인터랙티브 콘텐츠 개발",
        "마인크래프트 기반 제작 및 개발",
        "월드·맵 및 2D·3D 리소스 제작",
        "크리에이터 콘텐츠 제작",
        "서버 기술 개발 및 운영",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "LevelDev 콘텐츠 개발 서비스",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "월드·맵 및 아트 리소스 제작",
              description:
                "게임과 콘텐츠에 필요한 공간, 월드, 맵, 2D·3D 시각 리소스를 제작합니다.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "게임플레이 및 시스템 개발",
              description:
                "마인크래프트 플러그인·모드와 Unreal·Godot 기반 게임 시스템을 구현합니다.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "크리에이터 콘텐츠 제작",
              description:
                "방송, 영상, 참여형 이벤트와 콘텐츠 서버에 적합한 경험을 기획하고 제작합니다.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "기술 개발 및 운영 지원",
              description:
                "서버, 자동화, 콘텐츠 제작 파이프라인과 프로젝트 운영에 필요한 기술 기반을 구축합니다.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://leveldev.net/#website",
      url: "https://leveldev.net/",
      name: "LevelDev Inc.",
      alternateName: "레벨데브",
      inLanguage: "ko-KR",
      publisher: {
        "@id": "https://leveldev.net/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
