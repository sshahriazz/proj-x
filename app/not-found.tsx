import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            404 - Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="mb-6 size-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary size-full"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
          <p className="text-muted-foreground mb-6 text-center">
            Oops! The page you&apos;re looking for seems to have wandered off.
            Don&apos;t worry, even the best explorers get lost sometimes.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search">Search</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
