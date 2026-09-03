import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Samar Anand | Personal Portfolio",
  description:
    "Personal Portfolio of Samar Anand — B.Tech Computer Science (AI & ML) student at VIT Bhopal University. Engineer of VibeCode AI IDE, Nexus Cart Voice Assistant, and Full Stack Portals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${manrope.variable} antialiased bg-[#121212] text-[#fafafa]`}>
        {children}
      </body>
    </html>
  );
}
