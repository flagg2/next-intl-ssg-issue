import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { Link } from "../../navigation";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <head>
        <Link href="/test" />
        <title>next-intl-bug-repro-app-router</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
