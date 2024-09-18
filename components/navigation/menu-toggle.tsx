'use client';

import { Menu } from 'lucide-react';

import useMediaQuery from '@/hooks/useMediaQuery';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import MobileMenuRender from './mobile-menu-render';

export function TabSheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={'icon'} variant="outline">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <MobileMenuRender />
      </SheetContent>
    </Sheet>
  );
}

export function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={'icon'} variant="outline">
          <Menu className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <MobileMenuRender />
      </DrawerContent>
    </Drawer>
  );
}

export default function MenuToggle() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  return (
    <>
      <div className="mr-2 hidden sm:block md:hidden">
        {isTablet && <TabSheetMenu />}
      </div>
      <div className="mr-2 sm:hidden">{isMobile && <MobileDrawer />}</div>
    </>
  );
}
