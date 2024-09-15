'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const errorMessage = error?.message ?? 'An unexpected error occurred.';

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Oops! Something went wrong
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="size-32 text-red-500">
            <AlertTriangle className="size-full" />
          </div>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
          {error?.digest && (
            <p className="text-muted-foreground text-sm">
              Error ID: {error.digest}
            </p>
          )}
          <p className="text-muted-foreground text-center">
            Don&apos;t worry, our team has been notified and we&apos;re working
            on fixing this issue.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button onClick={() => reset()}>
            <RefreshCcw className="mr-2 size-4" /> Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
          >
            Go Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
