import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
};

const LAST_UPDATED = "March 1, 2026";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold tracking-tight text-white md:text-2xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-6 text-zinc-300">{children}</p>;
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <div className="flex items-baseline justify-between gap-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Terms of Service</h1>
          <div className="text-xs text-zinc-500">Last updated: {LAST_UPDATED}</div>
        </div>

        <P>
          These Terms of Service (the “Terms”) govern your access to and use of MergeData.ai’s websites, products, and
          services (collectively, the “Services”).
        </P>

        <P>
          If you are using the Services on behalf of an organization, you represent that you have authority to bind that
          organization, and “you” refers to that organization.
        </P>

        <H2>1) Agreement hierarchy</H2>
        <P>
          If you have a written agreement with MergeData.ai (for example, a master services agreement, order form, or other
          signed contract), that agreement controls to the extent it conflicts with these Terms.
        </P>

        <H2>2) Eligibility and accounts</H2>
        <P>
          You must be legally able to enter into these Terms. You are responsible for all activity under your account and
          for maintaining the confidentiality of your credentials.
        </P>

        <H2>3) Acceptable use</H2>
        <P>You agree not to:</P>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
          <li>Use the Services in violation of any law or regulation.</li>
          <li>Interfere with or disrupt the Services, including by probing or scanning for vulnerabilities.</li>
          <li>Attempt to access data or accounts you do not have permission to access.</li>
          <li>Reverse engineer, decompile, or attempt to derive source code from the Services (except where prohibited by law).</li>
          <li>Upload or transmit malicious code, or content that infringes intellectual property or privacy rights.</li>
        </ul>

        <H2>4) Customer data</H2>
        <P>
          “Customer Data” means data you (or your users) submit to the Services, including data from connected sources.
          You retain all rights in Customer Data. You grant MergeData.ai a limited right to host, process, transmit, and
          display Customer Data solely to provide, secure, and improve the Services.
        </P>

        <H2>5) Security and privacy</H2>
        <P>
          We use reasonable administrative, technical, and organizational safeguards designed to protect Customer Data.
          More details are available on our <Link href="/security" className="text-indigo-300 hover:text-indigo-200">Security</Link> page.
          Our collection and use of personal information is described in our{" "}
          <Link href="/privacy" className="text-indigo-300 hover:text-indigo-200">Privacy Policy</Link>.
        </P>

        <H2>6) Feedback</H2>
        <P>
          If you provide suggestions or feedback, you grant us a non-exclusive, worldwide, royalty-free license to use it
          without restriction or compensation.
        </P>

        <H2>7) Third-party services</H2>
        <P>
          The Services may interoperate with third-party services (for example, DMS/CRM vendors). Your use of third-party
          services is governed by their terms, and we are not responsible for third-party services.
        </P>

        <H2>8) Fees (if applicable)</H2>
        <P>
          Some portions of the Services may require payment. Pricing, billing, and renewal terms (if any) will be
          described in an order form, invoice, or other written agreement.
        </P>

        <H2>9) Intellectual property</H2>
        <P>
          MergeData.ai and its licensors retain all rights, title, and interest in the Services, including software,
          documentation, and trademarks. These Terms grant you a limited, non-exclusive, non-transferable right to access
          and use the Services during the term, subject to these Terms.
        </P>

        <H2>10) Disclaimers</H2>
        <P>
          THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, MERGEDATA.AI
          DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </P>

        <H2>11) Limitation of liability</H2>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, MERGEDATA.AI WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED
          TO THE SERVICES.
        </P>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, MERGEDATA.AI’S TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED
          TO THE SERVICES WILL NOT EXCEED THE AMOUNTS PAID BY YOU TO MERGEDATA.AI FOR THE SERVICES IN THE 12 MONTHS BEFORE
          THE EVENT GIVING RISE TO THE CLAIM.
        </P>

        <H2>12) Suspension and termination</H2>
        <P>
          We may suspend or terminate access to the Services if we reasonably believe you have violated these Terms or if
          necessary to protect the Services or other users. You may stop using the Services at any time.
        </P>

        <H2>13) Changes</H2>
        <P>
          We may update these Terms from time to time. If changes are material, we will provide reasonable notice (for
          example, by posting on this page). Your continued use of the Services after the effective date means you accept
          the updated Terms.
        </P>

        <H2>14) Contact</H2>
        <P>
          Questions about these Terms? Contact us at{" "}
          <a className="text-indigo-300 hover:text-indigo-200" href="mailto:hello@mergedata.ai">
            hello@mergedata.ai
          </a>
          .
        </P>

        <div className="mt-10 rounded-2xl bg-white/5 p-5 text-xs text-zinc-400 ring-1 ring-white/10">
          This page is provided for general informational purposes and is not legal advice. For customer deployments,
          signed contractual terms may apply.
        </div>
      </main>
      <Footer />
    </div>
  );
}
