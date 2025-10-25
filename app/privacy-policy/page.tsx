import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Toc } from "@/components/ui/Toc";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return generateSEOMetadata({
    title: "Privacy Policy - SigmaRemote",
    description: "How Sigma App, Inc. collects, uses, shares, and protects your personal information.",
    url: "/privacy-policy",
    type: "website",
  });
}

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://www.sigmaremote.com/privacy-policy",
    "isPartOf": {
      "@type": "WebSite",
      "name": "SigmaRemote",
      "url": "https://www.sigmaremote.com"
    },
    "dateModified": "2025-02-21",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.sigmaremote.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://www.sigmaremote.com/privacy-policy"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="px-4 py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl gap-10">
          <Toc />
          <div className="flex-1 max-w-3xl">
          {/* HERO */}
          <section className="rounded-2xl bg-[#0E2C1E] p-6 md:p-8 text-white shadow-lg">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
            <p className="mt-3 text-white/80 text-sm">How Sigma App, Inc. collects, uses, shares, and protects your personal information.</p>
          </section>

          {/* CONTENT */}
          <section className="prose prose-neutral prose-base md:prose-lg mt-8 rounded-2xl bg-white p-6 md:p-8 shadow-sm dark:prose-invert">
            {/* Headings styling helpers via utility classes */}
            <style>{`
              .prose :where(h2):not(:where(.not-prose *)) {
                margin-top: 2rem; margin-bottom: 0.75rem;
                font-size: 1.25rem; line-height: 1.3; font-weight: 600; color: #111827;
              }
              .prose :where(h3):not(:where(.not-prose *)) {
                margin-top: 1.25rem; margin-bottom: 0.5rem;
                font-size: 1.05rem; font-weight: 600; color: #111827;
              }
              .prose :where(p):not(:where(.not-prose *)) { color: #1f2937; }
              .prose :where(ul,ol):not(:where(.not-prose *)) { margin-top: 0.5rem; margin-bottom: 1rem; }
              .prose :where(li):not(:where(.not-prose *)) { margin-top: 0.25rem; margin-bottom: 0.25rem; }
              .prose a { text-decoration: underline; }
              .prose a:hover { text-decoration-thickness: 2px; }
            `}</style>

            <article>
              <h2 id="Introduction">Introduction:</h2>
              <p>Sigma App, Inc. ("Sigma," "we," "our," or "us"), headquartered at 100 N Howard ST, Suite W, Spokane, WA 99201, is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our payroll and related services (the "Services"). By accessing or using our Services, you acknowledge that you have read and understood this Privacy Policy.</p>

              <h2 id="Scope">Scope</h2>
              <p>This Privacy Policy applies to:</p>
              <ul>
                <li>Users of our website and Services</li>
                <li>Employees/contractors whose employers use our Services</li>
                <li>Job applicants and candidates</li>
                <li>Website visitors and individuals who interact with our marketing communications</li>
                <li>Business partners and service providers</li>
              </ul>

              <h2 id="Information We Collect">Information We Collect</h2>
              
              <h3>Personal Information You Provide</h3>
              <p>We collect personal information that you provide directly to us, including:</p>
              <ul>
                <li><strong>Identity Information:</strong> Name, date of birth, government-issued identification numbers, photographs for verification</li>
                <li><strong>Contact Information:</strong> Email address, phone number, mailing address</li>
                <li><strong>Employment Information:</strong> Job title, employment history, work location, reporting structure</li>
                <li><strong>Financial Information:</strong> Bank account details, tax information, salary information</li>
                <li><strong>Authentication Information:</strong> Username, password, security questions</li>
                <li><strong>Communications:</strong> Messages and correspondence with us</li>
              </ul>

              <h3>Information Collected Automatically</h3>
              <p>When you use our website or Services, we automatically collect:</p>
              <ul>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> How you interact with our Services, including features used and time spent</li>
                <li><strong>Location Data:</strong> General location based on IP address</li>
                <li><strong>Technical Data:</strong> Login timestamps, system logs, error reports</li>
              </ul>

              <h2 id="How We Use Your Information">How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul>
                <li>Providing and maintaining our Services</li>
                <li>Processing payroll and related transactions</li>
                <li>Identity verification and fraud prevention</li>
                <li>Customer support and communication</li>
                <li>Service optimization and development</li>
                <li>Legal compliance and tax reporting</li>
                <li>Security monitoring and enforcement</li>
                <li>Marketing and communications (with your consent)</li>
              </ul>

              <h2 id="Data Sharing and Disclosure">Data Sharing and Disclosure</h2>
              <p>We share your information with:</p>
              
              <h3>Service Providers</h3>
              <ul>
                <li>Payment processors</li>
                <li>Identity verification services</li>
                <li>Cloud hosting providers</li>
                <li>Customer support tools</li>
                <li>Analytics services</li>
              </ul>

              <h3>Legal Requirements</h3>
              <ul>
                <li>Government agencies when required by law</li>
                <li>Tax authorities for mandatory reporting</li>
                <li>Law enforcement with valid orders</li>
              </ul>

              <h3>Business Transfers</h3>
              <p>In connection with any merger, sale, or acquisition of our business, your information may be transferred as a business asset.</p>

              <h2 id="Data Security">Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>

              <h2 id="Your Rights">Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
              <p>To exercise these rights, contact us at <a href="mailto:support@sigmaremote.com" className="underline hover:no-underline">support@sigmaremote.com</a>.</p>

              <h2 id="Data Retention">Data Retention</h2>
              <p>We retain your personal information for as long as necessary to:</p>
              <ul>
                <li>Provide our Services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>

              <h2 id="Children's Privacy">Children's Privacy</h2>
              <p>Our Services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us.</p>

              <h2 id="International Data Transfers">International Data Transfers</h2>
              <p>We may transfer your personal information to countries other than your own for processing. We implement appropriate safeguards for such transfers, including standard contractual clauses where required by law.</p>

              <h2 id="Changes to This Policy">Changes to This Policy</h2>
              <p>A family budget is a plan for your household's incoming and outgoing money over a certain period of time, such as a month or year. For example, you may aim for certain dollar amounts or percentages of  monthly income to go toward various expenses, like groceries, as well as saving, investing and paying off debt.</p>

              <h2 id="Contact Us">Contact Us</h2>
              <p>For questions about this Privacy Policy or our privacy practices, contact us at:</p>
              
              <div className="mt-8 rounded-xl bg-gray-50 p-4 border border-gray-200">
                <p><strong>Sigma App, Inc.</strong><br />
                100 N Howard ST, Suite W<br />
                Spokane, WA 99201.</p>
                <p>Email: <a href="mailto:support@sigmaremote.com" className="underline hover:no-underline">support@sigmaremote.com</a></p>
              </div>
            </article>

            {/* CONTACT BOX */}
            <div className="not-prose mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm text-gray-600">Questions about this policy?</p>
              <p className="text-sm">
                Email us at{" "}
                <a href="mailto:support@sigmaremote.com" className="underline">
                  support@sigmaremote.com
                </a>
                .
              </p>
            </div>
          </section>
          </div>
        </div>
      </main>
    </>
  );
}
