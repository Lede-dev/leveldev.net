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
  metadataBase: new URL("http://localhost:3000"),
  title: "LevelDev — We Build Worlds",
  description:
    "게임과 가상 공간을 만드는 인터랙티브 콘텐츠 스튜디오 LevelDev입니다.",
  openGraph: {
    title: "LevelDev — We Build Worlds",
    description:
      "아이디어를 몰입할 수 있는 게임과 가상 공간으로 만드는 인터랙티브 콘텐츠 스튜디오.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og.png",
        width: 1733,
        height: 908,
        alt: "LevelDev — We Build Worlds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelDev — We Build Worlds",
    description:
      "아이디어를 몰입할 수 있는 게임과 가상 공간으로 만드는 인터랙티브 콘텐츠 스튜디오.",
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
