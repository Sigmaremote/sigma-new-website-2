import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { TermsToc } from "@/components/ui/TermsToc";

export const metadata: Metadata = generateSEOMetadata({
  title: "Terms & Conditions - SigmaRemote",
  description: "Terms of Service governing your access to and use of Sigma App, Inc. services.",
  url: "/terms",
  type: "website",
});

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions",
    "url": "https://www.sigmaremote.com/terms",
    "isPartOf": {
      "@type": "WebSite",
      "name": "SigmaRemote",
      "url": "https://www.sigmaremote.com"
    },
    "dateModified": "2025-02-25",
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
          "name": "Terms & Conditions",
          "item": "https://www.sigmaremote.com/terms"
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
          <TermsToc />
          <div className="flex-1 max-w-3xl">
            {/* HERO */}
            <section className="rounded-2xl bg-[#0E2C1E] p-6 md:p-8 text-white shadow-lg">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Terms & Conditions</h1>
              <p className="mt-3 text-white/80 text-sm">Terms of Service governing your access to and use of Sigma App, Inc. services.</p>
            </section>

            {/* CONTENT */}
            <section className="prose prose-neutral prose-lg md:prose-lg mt-8 rounded-2xl bg-white p-6 md:p-8 shadow-sm">
              <style dangerouslySetInnerHTML={{
                __html: `
                  .prose h2 {
                    color: #111827;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                  }
                  .prose h3 {
                    color: #111827;
                    font-weight: 600;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                  }
                  .prose p {
                    color: #374151;
                    line-height: 1.7;
                    margin-bottom: 1rem;
                  }
                  .prose ul {
                    margin-bottom: 1rem;
                  }
                  .prose li {
                    color: #374151;
                    line-height: 1.6;
                    margin-bottom: 0.5rem;
                  }
                  .prose a {
                    color: #059669;
                    text-decoration: underline;
                  }
                  .prose a:hover {
                    text-decoration: none;
                  }
                `
              }} />
              <article>
                <h2 id="Introduction">1. Introduction:</h2>
                <p>Welcome to Sigma App, Inc. ("Sigma," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website at sigmaremote.com, our mobile applications, and any services provided by Sigma App, Inc. (collectively, the "Services").</p>
                <p>By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.</p>

                <h2 id="Definitions">2. Definitions</h2>
                <p>For the purposes of these Terms:</p>
                <p><strong>"Account"</strong> means a registered account that enables access to our Services.</p>
                <p><strong>"Client"</strong> means any business or entity that uses our Services to manage payroll, benefits, or other workforce management functions.</p>
                <p><strong>"Employee"</strong> means any individual whose information is processed through our Services on behalf of a Client.</p>
                <p><strong>"Content"</strong> means any information, data, text, software, graphics, or other materials that are displayed, uploaded, or accessed through our Services.</p>
                <p><strong>"User"</strong> means any individual who accesses or uses our Services, whether as a Client, Employee, or in any other capacity.</p>

                <h2 id="Eligibility and Account Creation">3. Eligibility and Account Creation</h2>
                <h3>3.1 Eligibility</h3>
                <p>You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.</p>

                <h3>3.2 Account Creation</h3>
                <p>To access certain features of our Services, you may need to create an Account. When creating an Account, you must provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your Account credentials and for all activities that occur under your Account. You agree to notify us immediately of any unauthorized use of your Account or any other breach of security.</p>

                <h3>3.3 Account Security</h3>
                <p>You are solely responsible for maintaining the security of your Account credentials. We recommend using strong, unique passwords and enabling any additional security features we may offer. You agree not to share your Account credentials with any third party.</p>

                <h2 id="Services">4. Services</h2>
                <h3>4.1 Service Description</h3>
                <p>Sigma provides payroll processing, human resources management, and related services to businesses. Our Services may include, but are not limited to:</p>
                <ul>
                  <li>Payroll processing and management</li>
                  <li>Employee onboarding and offboarding</li>
                  <li>Benefits administration</li>
                  <li>Time and attendance tracking</li>
                  <li>Tax filing and compliance assistance</li>
                  <li>Contractor management</li>
                </ul>

                <h3>4.2 Service Limitations</h3>
                <p>We strive to provide reliable Services, but we do not guarantee that our Services will be uninterrupted, error-free, or available at all times. We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice.</p>

                <h3>4.3 Third-Party Integrations</h3>
                <p>Our Services may integrate with third-party services. Your use of such integrations may be subject to additional terms and conditions imposed by the third-party service providers. We are not responsible for any third-party services and make no warranties regarding their availability, reliability, or functionality.</p>

                <h2 id="Client Responsibilities">5. Client Responsibilities</h2>
                <h3>5.1 Accurate Information</h3>
                <p>If you are a Client, you are responsible for providing accurate, complete, and up-to-date information about your business and your employees. This includes, but is not limited to, information required for tax filings, payroll processing, and compliance with applicable laws and regulations.</p>

                <h3>5.2 Legal Compliance</h3>
                <p>You are responsible for ensuring that your use of our Services complies with all applicable laws, regulations, and industry standards. This includes, but is not limited to, employment laws, tax laws, data protection laws, and anti-money laundering regulations.</p>

                <h3>5.3 Timely Payments</h3>
                <p>You are responsible for ensuring that sufficient funds are available for payroll processing and other financial transactions facilitated through our Services. You authorize us to debit your designated account for all payments processed through our Services, including payroll, taxes, fees, and other charges.</p>

                <h2 id="User Conduct">6. User Conduct</h2>
                <h3>6.1 Prohibited Activities</h3>
                <p>When using our Services, you agree not to:</p>
                <ul>
                  <li>Violate any applicable law, regulation, or these Terms</li>
                  <li>Infringe upon the intellectual property rights of others</li>
                  <li>Upload, transmit, or distribute any harmful, illegal, or offensive content</li>
                  <li>Interfere with or disrupt the operation of our Services</li>
                  <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                  <li>Use our Services for any fraudulent or deceptive purpose</li>
                  <li>Harass, threaten, or harm any person or entity</li>
                  <li>Engage in any activity that could damage, disable, or impair our Services</li>
                </ul>

                <h3>6.2 Content Restrictions</h3>
                <p>You are solely responsible for any Content you submit, upload, or display through our Services. You represent and warrant that you have all necessary rights to such Content and that the Content does not violate any applicable laws or these Terms.</p>

                <h2 id="Fees and Payment">7. Fees and Payment</h2>
                <h3>7.1 Fees</h3>
                <p>Clients agree to pay all applicable fees for our Services as specified in the pricing information provided to you. We reserve the right to change our fees at any time, with notice provided to you at least 30 days before the changes take effect.</p>

                <h3>7.2 Payment Terms</h3>
                <p>Payments for our Services are due according to the payment schedule specified in your service agreement. We may suspend or terminate your access to our Services if you fail to make timely payments.</p>

                <h3>7.3 Taxes</h3>
                <p>All fees are exclusive of applicable taxes, which will be charged separately unless otherwise stated. You are responsible for paying all taxes associated with your use of our Services, except for taxes based on our net income.</p>

                <h2 id="Intellectual Property">8. Intellectual Property</h2>
                <h3>8.1 Our Intellectual Property</h3>
                <p>Our Services, including all software, designs, text, graphics, logos, and other content, are protected by intellectual property rights owned by or licensed to us. You may not copy, modify, distribute, sell, or lease any part of our Services without our express written permission.</p>

                <h3>8.2 License to Use</h3>
                <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for their intended purposes, subject to these Terms.</p>

                <h3>8.3 Feedback</h3>
                <p>If you provide feedback, ideas, or suggestions regarding our Services ("Feedback"), you grant us a non-exclusive, worldwide, royalty-free, irrevocable license to use, reproduce, modify, publish, distribute, and otherwise exploit the Feedback for any purpose.</p>

                <h2 id="Data Privacy and Security">9. Data Privacy and Security</h2>
                <h3>9.1 Data Processing</h3>
                <p>We collect, use, and disclose personal information in accordance with our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to our collection, use, and disclosure of personal information as described in our Privacy Policy.</p>

                <h3>9.2 Data Security</h3>
                <p>We implement reasonable security measures to protect the data processed through our Services. However, we cannot guarantee absolute security, and you acknowledge that data transmission over the internet is inherently insecure. You are responsible for maintaining the security of your Account credentials and for any activities that occur under your Account.</p>

                <h3>9.3 Data Retention</h3>
                <p>We retain data processed through our Services in accordance with our data retention policies and applicable laws. Upon termination of your Account, we may retain certain data as required by law or for legitimate business purposes.</p>

                <h2 id="Confidentiality">10. Confidentiality</h2>
                <h3>10.1 Confidential Information</h3>
                <p>During your use of our Services, you may have access to confidential information belonging to us or other users. You agree to maintain the confidentiality of such information and not to disclose it to any third party without proper authorization.</p>

                <h3>10.2 Exceptions</h3>
                <p>The confidentiality obligations do not apply to information that: (a) is or becomes publicly available through no fault of your own; (b) was rightfully known to you before you received it from us; (c) is independently developed by you without use of our confidential information; or (d) is required to be disclosed by law or legal process.</p>

                <h2 id="Disclaimers and Limitations of Liability">11. Disclaimers and Limitations of Liability</h2>
                <h3>11.1 Service Disclaimers</h3>
                <p>OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.</p>

                <h3>11.2 Limitation of Liability</h3>
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR SERVICES; OR (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</p>

                <h3>11.3 Cap on Liability</h3>
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO US FOR THE SERVICES DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100) IF NO SUCH PAYMENT HAS BEEN MADE.</p>

                <h2 id="Indemnification">12. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless Sigma App, Inc., its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that arise from or relate to (a) your use of or inability to use our Services; (b) any content submitted by you; (c) your violation of these Terms; or (d) your violation of any rights of another party.</p>

                <h2 id="Term and Termination">13. Term and Termination</h2>
                <h3>13.1 Term</h3>
                <p>These Terms will remain in effect until terminated by either you or us as described below.</p>

                <h3>13.2 Termination by You</h3>
                <p>You may terminate your Account at any time by following the instructions on our website or by contacting us at <a href="mailto:support@sigmaremote.com">support@sigmaremote.com</a>. Termination may be subject to the terms of your service agreement.</p>

                <h3>13.3 Termination by Us</h3>
                <p>We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including, without limitation, if you breach these Terms. We also reserve the right to discontinue our Services or any portion thereof at any time.</p>

                <h3>13.4 Effect of Termination</h3>
                <p>Upon termination, your right to use our Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, limitations of liability, and dispute resolution provisions.</p>

                <h2 id="Dispute Resolution">14. Dispute Resolution</h2>
                <h3>14.1 Governing Law</h3>
                <p>These Terms shall be governed by and construed in accordance with the laws of the State of Washington, without regard to its conflict of laws principles.</p>

                <h3>14.2 Arbitration</h3>
                <p>Any dispute, controversy, or claim arising out of or relating to these Terms or our Services shall be exclusively settled by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in Spokane, Washington, and the judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.</p>

                <h3>14.3 Waiver of Class Actions</h3>
                <p>YOU AND SIGMA APP, INC. AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</p>

                <h3>14.4 Small Claims Court</h3>
                <p>Notwithstanding the foregoing, either party may bring an individual action in small claims court.</p>

                <h2 id="Miscellaneous">15. Miscellaneous</h2>
                <h3>15.1 Entire Agreement</h3>
                <p>These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and Sigma App, Inc. regarding your use of our Services.</p>

                <h3>15.2 No Waiver</h3>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by our authorized representative.</p>

                <h3>15.3 Severability</h3>
                <p>If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.</p>

                <h3>15.4 Assignment</h3>
                <p>You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. We may freely assign or transfer these Terms without restriction.</p>

                <h3>15.5 Force Majeure</h3>
                <p>We will not be liable for any failure or delay in performance resulting from causes beyond our reasonable control, including, but not limited to, acts of God, natural disasters, war, terrorism, riots, civil unrest, labor disputes, network or power failures, or governmental actions.</p>

                <h3>15.6 Notices</h3>
                <p>Any notices or other communications provided by us under these Terms will be given by posting to our website or by sending a message to the email address associated with your Account. Any notices or other communications provided by you to us should be sent to <a href="mailto:support@sigmaremote.com">support@sigmaremote.com</a>.</p>

                <h2 id="Contact Information">16. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <div className="mt-8 rounded-xl bg-gray-50 p-4 border border-gray-200">
                  <p><strong>Sigma App, Inc.</strong><br/>100 N Howard ST Suite W<br/>Spokane, WA 99201</p>
                  <p>Email: <a href="mailto:support@sigmaremote.com" className="underline hover:no-underline">support@sigmaremote.com</a></p>
                </div>
              </article>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
