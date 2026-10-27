export const BASE_PATH =
    process.env.NEXT_PUBLIC_BASE_PATH || "";

const DEFAULT_LOCALE =
    process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "en";

export { DEFAULT_LOCALE };

export const locales = ["en", "el"] as const;

export type Locale = (typeof locales)[number];

export function localePath(
    locale: string,
    path: string = ""
) {
    const cleanPath = path.replace(/^\/+|\/+$/g, "");

    return cleanPath
        ? `/${locale}/${cleanPath}`
        : `/${locale}`;
}

export function landingLocalePath(
    locale: string,
    path: string = ""
) {
    const cleanPath = path.replace(/^\/+|\/+$/g, "");

    return cleanPath
        ? `${BASE_PATH}/${locale}/${cleanPath}`
        : `${BASE_PATH}/${locale}`;
}
