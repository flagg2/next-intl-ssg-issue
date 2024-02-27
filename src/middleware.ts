import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, defaultLocale } from "./navigation";

export default createMiddleware({
  locales,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,
  localeDetection: false,
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
