import type React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Twilight',
  description:
    'Twilight is a software developer specializing in web development.',
  keywords: 'twilight, software developer, web development, programming',
  creator: 'Twilight',
  icons: 'https://github.com/twlite.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body className={`${poppins.className} scroll-smooth`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
