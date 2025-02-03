'use client';
import OcLanguage from '../shared/components/oc-language';
import OcTheme from '../shared/components/oc-theme';
import './auth.scss';

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="auth">{children}</section>;
}
