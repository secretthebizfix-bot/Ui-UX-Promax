interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/** Renders JSON-LD structured data. Server component. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, generated data — safe to inject.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
