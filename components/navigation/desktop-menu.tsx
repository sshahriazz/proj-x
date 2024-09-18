'use client';

import * as React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

// Define the components array
const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

// Define the getting started array
const gettingStarted: { title: string; href: string; description: string }[] = [
  {
    title: 'shadcn/ui',
    href: '/',
    description:
      'Beautifully designed components built with Radix UI and Tailwind CSS.',
  },
  {
    title: 'Introduction',
    href: '/docs',
    description: 'Re-usable components built using Radix UI and Tailwind CSS.',
  },
  {
    title: 'Installation',
    href: '/docs/installation',
    description: 'How to install dependencies and structure your app.',
  },
  {
    title: 'Typography',
    href: '/docs/primitives/typography',
    description: 'Styles for headings, paragraphs, lists...etc',
  },
];

// Create the tree structure
const menuTree = [
  {
    title: 'Getting started',
    href: '/',
    children: gettingStarted,
  },
  {
    title: 'Components',
    href: '/docs/primitives',
    children: components,
  },
  {
    title: 'Documentation',
    href: '/docs',
    children: [], // Add an empty children array to avoid duplication
  },
];

export default function DesktopMenu() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {menuTree.map((menuItem) => (
          <NavigationMenuItem key={menuItem.title}>
            {menuItem.children && menuItem.children.length > 0 ? (
              <>
                <NavigationMenuTrigger>{menuItem.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {menuItem.children.map((child) => (
                      <ListItem
                        key={child.title}
                        title={child.title}
                        href={child.href}
                      >
                        {child.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={menuItem.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {menuItem.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link ref={ref} href={props.href ?? '/'} legacyBehavior passHref>
        <NavigationMenuLink asChild>
          <span
            className={cn(
              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </span>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});

ListItem.displayName = 'ListItem';
