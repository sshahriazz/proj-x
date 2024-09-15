import React from 'react';
import { Apple } from 'lucide-react';

import BrandLogo from './brand-logo';
import DesktopMenu from './desktop-menu';
import MenuToggle from './menu-toggle';
import ProfileDropdown from './profile-dropdown';
import ToggleDarkMode from './toggle-dark-mode';

function TopNavigationBar() {
  return (
    <header className="flex items-center justify-between p-2">
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
