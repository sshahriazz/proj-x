import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

type MenuItem = {
  title: string;
  href: string;
  description?: string;
  children?: MenuItem[];
};

const menuTree: MenuItem[] = [
  {
    title: 'Getting started',
    href: '/',
    children: [
      {
        title: 'shadcn/ui',
        href: '/',
        description:
          'Beautifully designed components built with Radix UI and Tailwind CSS.',
      },
      {
        title: 'Introduction',
        href: '/docs',
        description:
          'Re-usable components built using Radix UI and Tailwind CSS.',
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
    ],
  },
  {
    title: 'Components',
    href: '/docs/primitives',
    children: [
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
    ],
  },
  {
    title: 'Documentation',
    href: '/docs',
    children: [],
  },
];

function MenuItemComponent({ item }: { item: MenuItem }) {
  return item.children && item.children.length > 0 ? (
    <AccordionItem value={item.title}>
      <AccordionTrigger>{item.title}</AccordionTrigger>
      <AccordionContent>
        <div>
          {item.children && item.children.length > 0 && (
            <div className="ml-4 space-y-2">
              {item.children.map((child, index) => (
                <div key={index} className="border-border border-l pl-4">
                  <Link
                    href={child.href}
                    className="text-muted-foreground hover:text-foreground hover:bg-accent block rounded-md  p-2 text-sm transition-colors duration-200"
                  >
                    {child.title}
                  </Link>
                  {child.description && (
                    <p className="text-muted-foreground mt-1 px-2 text-xs">
                      {child.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  ) : (
    <Link href={item.href}>{item.title}</Link>
  );
}

export default function MobileMenuRender() {
  return (
    <div className="bg-background text-foreground mx-auto w-full max-w-md p-4">
      <nav className="space-y-2">
        <Accordion type="single" collapsible className="w-full">
          {menuTree.map((item, index) => (
            <MenuItemComponent key={index} item={item} />
          ))}
        </Accordion>
      </nav>
    </div>
  );
}
