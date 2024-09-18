import React from 'react';
import { Apple } from 'lucide-react';

import { cn } from '@/lib/utils';

import BrandLogo from './brand-logo';
import DesktopMenu from './desktop-menu';
import MenuToggle from './menu-toggle';
import ProfileDropdown from './profile-dropdown';
import ToggleDarkMode from './toggle-dark-mode';

function TopNavigationBar({ sticky = false }: { sticky?: boolean }) {
  return (
    <header
      className={cn(
        'border-grey flex items-center justify-between border-b px-3 py-2 shadow-sm',
        sticky ? 'sticky top-0' : ''
      )}
    >
      <div className="flex">
        <MenuToggle />
        <BrandLogo appLogo={<Apple className="size-5" />} appName="UI" />
      </div>

      <DesktopMenu />
      <div className="flex items-center space-x-4">
        <ToggleDarkMode />
        <ProfileDropdown />
      </div>
    </header>
  );
}

export default TopNavigationBar;
