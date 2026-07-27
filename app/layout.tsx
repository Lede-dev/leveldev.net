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
  title: "LevelDev Inc. — 콘텐츠 기획·개발·운영",
  description:
    "크리에이터, 브랜드, 플랫폼을 위한 콘텐츠 기획, 인터랙티브 개발, 기술 운영 서비스를 제공하는 콘텐츠 개발사 LevelDev Inc.입니다.",
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
    title: "LevelDev Inc. — We Build Content",
    description:
      "기획부터 제작, 기술 개발과 운영까지 콘텐츠의 전 과정을 함께하는 콘텐츠 개발사.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "LevelDev Inc. — Content Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelDev Inc. — We Build Content",
    description:
      "기획부터 제작, 기술 개발과 운영까지 콘텐츠의 전 과정을 함께하는 콘텐츠 개발사.",
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
