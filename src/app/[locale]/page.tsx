import { useLocale, useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function IndexPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  useLocale();
  return null;
}
