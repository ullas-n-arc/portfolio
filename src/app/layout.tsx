import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ullas N — Swordigo Dev Log',
  description:
    'ML Engineer & Android Developer. Building real-time AI pipelines, gesture-driven apps, and everything in between.',
  keywords: ['Ullas N', 'Machine Learning', 'Android', 'Portfolio', 'Data Science', 'BMSCE'],
  authors: [{ name: 'Ullas N' }],
  openGraph: {
    title: 'Ullas N — Swordigo Dev Log',
    description: 'ML Engineer & Android Developer Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cavern text-sword-silver antialiased">
        {children}
      </body>
    </html>
  );
}
