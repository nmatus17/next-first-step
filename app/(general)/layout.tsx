

import type { ReactNode } from 'react';
import { Navbar } from '@/components';

export default function GeneralLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
    </>
  );
}