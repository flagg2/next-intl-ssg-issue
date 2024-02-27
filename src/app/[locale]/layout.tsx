import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { Link } from "../../navigation";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }, { lang: "sk" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  console.log({ locale: params.locale });
  unstable_setRequestLocale(params.locale);

  return (
    <html>
      <body className="bg">
        <Link href="/en">This breaks</Link>
      </body>
    </html>
  );
}
