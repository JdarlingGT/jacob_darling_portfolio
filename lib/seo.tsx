export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jacob Darling",
    jobTitle: "Marketing Director",
    url: "https://your-domain.com",
    sameAs: [
      "https://www.linkedin.com/in/your-handle"
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jacob Darling – Portfolio",
    url: "https://your-domain.com"
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
