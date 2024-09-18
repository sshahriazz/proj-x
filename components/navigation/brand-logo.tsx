import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface AppBrandingProps {
  appName?: string;
  appLogo?: string | React.ReactNode;
  className?: string;
  logoClassName?: string;
  textClassName?: string;
  path?: string;
}

export default function BrandLogo({
  appName = 'YourApp',
  className,
  logoClassName,
  textClassName,
  appLogo,
  path = '/',
}: AppBrandingProps = {}) {
  return (
    <Link href={path} className={cn('flex items-center space-x-2', className)}>
      {typeof appLogo === 'string' ? (
        <Image
          className={cn(logoClassName)}
          src={'appLogo'}
          alt={appName}
          width={150}
          height={40}
        />
      ) : (
        appLogo
      )}
      <span
        className={cn(
          'text-primary hidden text-xl font-bold md:block',
          textClassName
        )}
        aria-label={`${appName} logo`}
      >
        {appName}
      </span>
    </Link>
  );
}
