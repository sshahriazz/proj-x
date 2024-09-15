import React from 'react';
import { Apple } from 'lucide-react';

import BrandLogo from './brand-logo';
import DesktopMenu from './desktop-menu';
import ProfileDropdown from './profile-dropdown';
import ToggleDarkMode from './toggle-dark-mode';

function TopNavigationBar() {
  return (
    <header className="flex items-center justify-between">
      <BrandLogo appLogo={<Apple className="size-5" />} appName="UI" />

      <DesktopMenu />
      <div className="flex items-center space-x-4">
        <ToggleDarkMode />
        <ProfileDropdown />
      </div>
    </header>
  );
}

export default TopNavigationBar;
