import type { Metadata } from "next";
import Providers from "@/app/components/Providers";

export const metadata: Metadata = {
  title: "Chandra Shekar — Full Stack Developer",
  description: "Frontend & Full Stack Developer with 4+ years building scalable web applications with React, Next.js, Node.js, and the MERN stack.",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Next.js", "Frontend Developer"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <style>{`
          @font-face {
            font-family: 'ClashDisplay';
            src: url('https://cdn.jsdelivr.net/npm/clash-display@1.0.0/fonts/ClashDisplay-Variable.woff2') format('woff2');
            font-weight: 100 900; font-style: normal; font-display: swap;
          }
        `}</style>
      </head>
      <body style={{ background: "#080C14", margin: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
