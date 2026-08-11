import { defaultBuybackContent } from "./defaults";
import type { BuybackCmsContent } from "./types";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge<T>(defaults: T, override: unknown): T {
  if (!isPlainObject(defaults) || !isPlainObject(override)) {
    return (override === undefined ? defaults : override) as T;
  }

  const result: Record<string, unknown> = { ...defaults };

  for (const key of Object.keys(override)) {
    const defaultValue = (defaults as Record<string, unknown>)[key];
    const overrideValue = override[key];

    if (overrideValue === undefined) continue;

    if (Array.isArray(overrideValue)) {
      result[key] = overrideValue;
    } else if (isPlainObject(defaultValue) && isPlainObject(overrideValue)) {
      result[key] = deepMerge(defaultValue, overrideValue);
    } else {
      result[key] = overrideValue;
    }
  }

  return result as T;
}

export function mergeWithDefaults(
  content: Partial<BuybackCmsContent> | Record<string, unknown>,
): BuybackCmsContent {
  return deepMerge(defaultBuybackContent, content);
}

export async function getBuybackCmsContent(): Promise<BuybackCmsContent> {
  const base =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
    "http://localhost:5000";
  try {
    const res = await fetch(`${base}/api/v1/cms/buyback-capital`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) throw new Error("cms fetch failed");
    const json = await res.json();
    const content = json?.data?.content;
    if (!content || typeof content !== "object") throw new Error("invalid cms");
    return mergeWithDefaults(content);
  } catch {
    return defaultBuybackContent;
  }
}
