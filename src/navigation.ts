import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "sk", "de"] as const;

export const defaultLocale = "sk" as const;

// Use the default: `always`
export const localePrefix = undefined;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: ["sk", "en", "de"],
    localePrefix: "as-needed",
  });
