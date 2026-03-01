import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const LAST_UPDATED = "March 1, 2026";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl font-semibold tracking-tight text-white md:text-2xl">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-6 text-zinc-300">{children}</p>;
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <div className="flex items-baseline justify-between gap-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Privacy Policy</h1>
          <div className="text-xs text-zinc-500">Last updated: {LAST_UPDATED}</div>
        </div>

        <P>
          This Privacy Policy explains how MergeData.ai (“MergeData”, “we”, “us”) collects, uses, and shares information
          when you visit our website or use our products and services (the “Services”).
        </P>

        <H2>1) Information we collect</H2>
        <P>We collect information in three main ways:</P>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
          <li>
            <span className="text-white">Information you provide</span>, such as contact details (name, email), scheduling
            details, and communications sent to us.
          </li>
          <li>
            <span className="text-white">Information collected automatically</span>, such as IP address, device/browser
            details, pages viewed, and approximate location derived from IP.
          </li>
          <li>
            <span className="text-white">Customer Data from connected systems</span>, when you connect third-party sources
            (e.g., DMS/CRM/vendor systems). This data is processed to provide the Services.
          </li>
        </ul>

        <H2>2) How we use information</H2>
        <P>We use information to:</P>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
          <li>Provide, maintain, and improve the Services.</li>
          <li>Operate integrations you enable and deliver requested outputs (tables, reports, summaries, tasks).</li>
          <li>Communicate with you, including responding to inquiries and sending product/service updates.</li>
          <li>Protect the Services, detect abuse, and enforce our terms.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <H2>3) How we share information</H2>
        <P>We may share information with:</P>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
          <li>
            <span className="text-white">Service providers</span> who help us run the Services (hosting, analytics, support,
            and communications), under contractual obligations to protect information.
          </li>
          <li>
            <span className="text-white">Integration partners</span> you choose to connect to (data is exchanged as needed
            to operate those connections).
          </li>
          <li>
            <span className="text-white">Legal and safety</span> when required by law or to protect rights, security, and
            integrity.
          </li>
          <li>
            <span className="text-white">Business transfers</span> in connection with a merger, acquisition, or sale of
            assets.
          </li>
        </ul>

        <H2>4) Cookies and analytics</H2>
        <P>
          We may use cookies and similar technologies to remember preferences and understand site usage. You can control
          cookies through your browser settings.
        </P>

        <H2>5) Data retention</H2>
        <P>
          We retain information for as long as needed to provide the Services, comply with legal obligations, resolve
          disputes, and enforce agreements. Retention for Customer Data may also be governed by your contract.
        </P>

        <H2>6) Security</H2>
        <P>
          We maintain safeguards designed to protect information. No method of transmission or storage is 100% secure, but
          we work to protect data using appropriate controls.
        </P>

        <H2>7) Your choices</H2>
        <P>
          You may request access, correction, or deletion of certain personal information by contacting us at{" "}
          <a className="text-indigo-300 hover:text-indigo-200" href="mailto:hello@mergedata.ai">
            hello@mergedata.ai
          </a>
          . We may need to verify your request and may retain certain information as required by law.
        </P>

        <H2>8) Children</H2>
        <P>The Services are not directed to children under 13, and we do not knowingly collect personal information from children.</P>

        <H2>9) Changes to this policy</H2>
        <P>
          We may update this Privacy Policy from time to time. We will post updates on this page and update the “Last
          updated” date.
        </P>

        <H2>10) Contact</H2>
        <P>
          If you have questions about this Privacy Policy, email{" "}
          <a className="text-indigo-300 hover:text-indigo-200" href="mailto:hello@mergedata.ai">
            hello@mergedata.ai
          </a>
          .
        </P>

        <div className="mt-10 rounded-2xl bg-white/5 p-5 text-xs text-zinc-400 ring-1 ring-white/10">
          Note: This policy is a general, draft-friendly statement and may be refined once we finalize our production
          data flows, vendors, and contractual terms.
        </div>
      </main>
      <Footer />
    </div>
  );
}
