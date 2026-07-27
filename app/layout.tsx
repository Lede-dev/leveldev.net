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
