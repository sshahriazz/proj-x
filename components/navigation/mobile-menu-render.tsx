import Link from 'next/link';

import { MenuItem, routes } from '@/config/site-config';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

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
          {routes.map((item, index) => (
            <MenuItemComponent key={index} item={item} />
          ))}
        </Accordion>
      </nav>
    </div>
  );
}
