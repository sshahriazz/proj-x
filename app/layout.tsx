import type { Metadata, Viewport } from 'next';

import './globals.css';

import React from 'react';

import TopNavigationBar from '@/components/navigation/top-navigation-bar';
import { ThemeProvider } from '@/components/providers/theme-provider';

const APP_NAME = 'NJS App';
const APP_DESCRIPTION = 'Next.js + Serwist PWA';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: '%s - NJS App',
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`} vaul-drawer-wrapper="">
        <div className="bg-background relative flex min-h-screen flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopNavigationBar />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
