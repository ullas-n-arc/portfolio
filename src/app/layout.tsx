import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ullas N — Software Development Engineer & Data Science Aspirant',
  description:
    'Software Development Engineer & Data Science Aspirant. Building real-time AI pipelines, ML systems, and data-driven solutions.',
  keywords: ['Ullas N', 'Software Development', 'Data Science', 'Machine Learning', 'Portfolio', 'BMSCE'],
  authors: [{ name: 'Ullas N' }],
  openGraph: {
    title: 'Ullas N — Software Development Engineer & Data Science Aspirant',
    description: 'Software Development & Data Science Portfolio',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-midnight-deep text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
