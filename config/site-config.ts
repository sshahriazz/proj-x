export type MenuItem = {
  title: string;
  href: string;
  description?: string;
  children?: MenuItem[];
};

const components: MenuItem[] = [
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
const gettingStarted: MenuItem[] = [
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
export const routes: MenuItem[] = [
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

export const seoConfig = {
  title: 'shadcn/ui',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  url: 'https://shadcn/ui',
  twitter: '@shadcn',
  image: '/placeholder.svg',
};

export const siteConfig = {
  isNavSticky: false,
};
