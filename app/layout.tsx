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
  metadataBase: new URL("https://leveldev-studio-home.lede-7716.chatgpt.site"),
  title: "LevelDev Studio — 마인크래프트 콘텐츠 & 게임 개발",
  description:
    "마인크래프트 맵, 플러그인·서버, 유튜브 콘텐츠와 독립 게임을 만드는 크리에이티브 스튜디오 LevelDev입니다.",
  keywords: [
    "마인크래프트",
    "마인크래프트 맵 제작",
    "플러그인 개발",
    "게임 개발",
    "유튜브 콘텐츠",
    "LevelDev",
  ],
  openGraph: {
    title: "LevelDev Studio — We Build Worlds",
    description:
      "마인크래프트 콘텐츠 제작부터 게임 개발까지, 픽셀 하나하나 세계를 만드는 크리에이티브 스튜디오.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 908,
        alt: "LevelDev Studio — Minecraft Content Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelDev Studio — We Build Worlds",
    description:
      "마인크래프트 콘텐츠 제작부터 게임 개발까지, 픽셀 하나하나 세계를 만드는 크리에이티브 스튜디오.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
