// Mintlify integration example for Next.js
// See https://www.mintlify.com/docs/integrations/nextjs for details

import Script from "next/script";

export default function MintlifyAnalytics() {
  return (
    <Script
      src="https://mintlify.com/analytics.js"
      strategy="afterInteractive"
    />
  );
}
