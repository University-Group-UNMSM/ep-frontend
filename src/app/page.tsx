// Indica que este componente es un Client Component
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);
  return <section className="h-screen"></section>;
}
