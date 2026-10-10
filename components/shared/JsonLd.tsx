/**
 * Renders schema.org structured data. `<` is escaped to prevent script injection
 * (per node_modules/next/dist/docs/01-app/02-guides/json-ld.md).
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
