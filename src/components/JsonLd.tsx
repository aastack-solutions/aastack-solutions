/**
 * Injects one or more JSON-LD structured-data blocks into the page.
 *
 * Renders a <script type="application/ld+json"> per schema. Server-rendered, so
 * the structured data is present in the initial HTML for crawlers (no JS needed).
 */
type JsonLdProps = {
  /** A single schema object, or an array to emit several blocks. */
  data: object | object[];
};

export default function JsonLd({ data }: JsonLdProps) {
  const blocks: object[] = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
