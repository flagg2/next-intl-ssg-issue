import { unstable_setRequestLocale } from "next-intl/server";

export default function TestPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  //   unstable_setRequestLocale(locale);
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}
