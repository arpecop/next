'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { useStyledComponentsRegistry } from '@/lib/styling';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <></>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
