/**
 * Utility functions for Kasliwal Joint Institute website
 */

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatMetaTitle(title: string): string {
  return `${title} | Kasliwal Joint Institute`;
}
