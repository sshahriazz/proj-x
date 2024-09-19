import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const metadata: Metadata = {
  title: 'Login - Next.js App',
  description: 'Enter your email below to login to your account.',
  openGraph: {
    title: 'Login - Next.js App',
    description: 'Enter your email below to login to your account.',
    url: 'https://yourwebsite.com/login',
    images: [
      {
        url: 'https://yourwebsite.com/images/login-page.png',
        width: 800,
        height: 600,
        alt: 'Login Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Login - Next.js App',
    description: 'Enter your email below to login to your account.',
    images: ['https://yourwebsite.com/images/login-page.png'],
  },
};

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100dvh-57px)] w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground text-balance">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/auth/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/auth/register" className="underline">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-muted hidden lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="size-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
