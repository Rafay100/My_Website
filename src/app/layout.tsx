import { Inter } from 'next/font/google';
import { Metadata } from "next";
import "./globals.css";
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@syedrafay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              description: siteConfig.description,
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "Founder Name",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "hello@crmflow.io",
                areaServed: "US",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://twitter.com/crmflow",
                "https://linkedin.com/company/crmflow",
                "https://github.com/crmflow",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business Street",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
            }),
          }}
        />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              image: `${siteConfig.url}/og-image.png`,
              url: siteConfig.url,
              telephone: "+1-555-123-4567",
              email: "hello@crmflow.io",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business Street",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.7749,
                longitude: -122.4194,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "$$$",
              servesCuisine: "Business Services",
            }),
          }}
        />
        
        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              description: "CRM consulting and automation services for growing businesses",
              url: siteConfig.url,
              image: `${siteConfig.url}/og-image.png`,
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business Street",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.7749,
                longitude: -122.4194,
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "CRM Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CRM Implementation",
                      description: "Complete CRM setup and configuration",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Workflow Automation",
                      description: "Automate your sales and marketing processes",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CRM Migration",
                      description: "Seamless migration from legacy systems",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Revenue Operations",
                      description: "Build and optimize your revenue engine",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
              publisher: {
                "@type": "Organization",
                name: siteConfig.name,
                logo: {
                  "@type": "ImageObject",
                  url: `${siteConfig.url}/logo.png`,
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteConfig.url}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
