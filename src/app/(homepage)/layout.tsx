'use client';
import Header from '@/app/shared/components/oc-header';
import OcSideBar from '@/app/shared/components/oc-sidebar';
import './homepage.scss';

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen">
      <div>
        <OcSideBar />
      </div>
      <div className="flex w-full flex-col">
        <Header />
        <main className="home-page-main oc-padding-medium">{children}</main>
      </div>
    </section>
  );
}
