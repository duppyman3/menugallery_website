import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — MenuGallery",
  description: "How the MenuGallery app handles your menu photos and data.",
};

const LAST_UPDATED = "July 8, 2026";

export default function PrivacyPage() {
  return (
    <main className="bg-paper">
      <header className="border-b border-dotted border-ink/20">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            <span className="text-ink">Menu</span><span className="text-accent">Gallery</span>
          </Link>
        </div>
      </header>
      <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-ink-muted">MenuGallery — Legal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 flex items-baseline text-sm text-ink-muted">
          <span>Last updated</span><span className="dot-leader" aria-hidden="true" /><span>{LAST_UPDATED}</span>
        </p>

        <p className="mt-10 mb-4 text-ink/80 leading-relaxed">
          MenuGallery (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) makes the MenuGallery mobile app, which reads a
          printed menu from a photo you take and shows you the dishes with illustrative images and estimated nutrition. This
          Privacy Policy explains what the app does &mdash; and, just as importantly, what it does not do &mdash; with your
          information. It covers the MenuGallery mobile app only.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          The short version: <strong className="text-ink">the app has no accounts and no logins, shows no ads, and does not
          track you across other apps or websites</strong>. When you photograph a menu, your photo is sent securely to be read
          by an AI service and then discarded &mdash; <strong className="text-ink">we never store it on our servers</strong>.
          Everything the app makes from that photo &mdash; the dish list, the estimated nutrition, and the generated
          images &mdash; <strong className="text-ink">lives on your device, under your control</strong>.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          If you have questions about this policy or your data, email us at{" "}
          <a href="mailto:info@menugallery.app" className="text-accent underline underline-offset-2 hover:no-underline">info@menugallery.app</a>.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">1. Information We Collect and Process</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          When you use MenuGallery, the app works with the following information:
        </p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>
            <strong className="text-ink">Menu photos.</strong> When you choose to scan a menu, the app uses your device camera
            to take a photo. <strong className="text-ink">The app only uses the camera &mdash; it never accesses your photo
            library or your existing pictures.</strong> The image is resized on your device and sent securely to be read by an
            AI service. <strong className="text-ink">We do not store your menu photos on our servers;</strong> they are processed
            to extract the menu and then discarded.
          </li>
          <li>
            <strong className="text-ink">Extracted menu content and nutrition estimates.</strong> The dish names, descriptions,
            prices, and the estimated calories, carbohydrates, and protein that the app produces from your photo are{" "}
            <strong className="text-ink">saved only on your device</strong>, not on our servers.
          </li>
          <li>
            <strong className="text-ink">Generated dish images.</strong> The illustrative images the app creates for each dish
            are <strong className="text-ink">stored only on your device.</strong>
          </li>
          <li>
            <strong className="text-ink">Anonymous installation identifier.</strong> When the app is first installed, it generates
            a random identifier that is <strong className="text-ink">not linked to your name, email, or any personal
            information.</strong> It is used only to keep the service running fairly, as described below.
          </li>
          <li>
            <strong className="text-ink">Usage counters.</strong>{" "}On our backend we keep a simple daily tally &mdash; a date and
            the number of scans and image generations associated with that anonymous identifier.{" "}
            <strong className="text-ink">These counters exist only to enforce fair-use limits and prevent abuse; they contain no
            personal information and no menu content.</strong>
          </li>
        </ul>
        <p className="mb-4 text-ink/80 leading-relaxed">
          We built MenuGallery to need as little as possible. The app does <strong className="text-ink">not</strong> collect or
          have access to any of the following:
        </p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>Your name, email address, phone number, or any account &mdash; <strong className="text-ink">the app has no sign-up and no login</strong>;</li>
          <li>Your location;</li>
          <li>Your contacts or your photo library;</li>
          <li>Advertising identifiers &mdash; <strong className="text-ink">the app shows no ads</strong>;</li>
          <li>Analytics, telemetry, or crash-reporting data;</li>
          <li>Payment or financial information &mdash; <strong className="text-ink">the app has no purchases or subscriptions.</strong></li>
        </ul>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">2. How We Use Information</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          We use the limited information above only for these purposes:
        </p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>To read the menu in your photo and extract its dishes, prices, and details;</li>
          <li>To generate an illustrative image for each dish;</li>
          <li>To enforce fair-use limits and prevent abuse of the service.</li>
        </ul>
        <p className="mb-4 text-ink/80 leading-relaxed">
          We do nothing else with it. Specifically, <strong className="text-ink">we do not sell your information, we do not use
          it for advertising or profiling, and we do not build a profile of you.</strong> Your photos and menu content are sent
          to our AI providers only so they can return the results you asked for;{" "}
          <strong className="text-ink">our AI providers process it solely to return those results and not to train their
          models</strong>, in accordance with their API terms.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">3. How Your Photo Is Processed</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          When you scan a menu, here is exactly what happens to your photo:
        </p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>Your device resizes the photo to reduce its size before anything is sent.</li>
          <li>The photo is transmitted over an <strong className="text-ink">encrypted HTTPS/TLS connection</strong> to our backend, which runs on Supabase Edge Functions.</li>
          <li>Our backend forwards the image to OpenRouter, which routes it to an AI model that reads the menu.</li>
          <li>The extracted menu is sent back to your device, where it is saved.</li>
          <li><strong className="text-ink">At no point do we write your photo to any database or storage.</strong> It exists only in transit and is discarded once the menu has been read.</li>
        </ul>
        <p className="mb-4 text-ink/80 leading-relaxed">
          When the app generates a dish image, it sends only the dish&rsquo;s name and description to the AI service &mdash;{" "}
          <strong className="text-ink">never your original photo.</strong>
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">4. Third-Party Service Providers</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          To run the app we rely on two service providers, and only two:
        </p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>
            <strong className="text-ink">Supabase</strong>{" "}hosts our backend and the small database of anonymous usage counters.
            You can read Supabase&rsquo;s privacy policy at{" "}
            <a href="https://supabase.com/privacy" className="text-accent underline underline-offset-2 hover:no-underline">https://supabase.com/privacy</a>.
          </li>
          <li>
            <strong className="text-ink">OpenRouter</strong>{" "}routes menu-reading and image requests to AI model providers (such
            as OpenAI-family models). You can read OpenRouter&rsquo;s privacy policy at{" "}
            <a href="https://openrouter.ai/privacy" className="text-accent underline underline-offset-2 hover:no-underline">https://openrouter.ai/privacy</a>.
          </li>
        </ul>
        <p className="mb-4 text-ink/80 leading-relaxed">
          These providers process data only on our behalf and to provide their service to us, and they are required to protect it
          to at least the standard described in this policy. <strong className="text-ink">We share your information with no one
          else</strong> &mdash; there are no advertisers, data brokers, or analytics companies involved.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">5. Data Retention and Deletion</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          Because most of what the app creates lives on your device, you are in control of it:
        </p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>You can delete individual scans from within the app at any time.</li>
          <li><strong className="text-ink">Uninstalling the app removes all of its data from your device.</strong></li>
        </ul>
        <p className="mb-4 text-ink/80 leading-relaxed">
          On our servers, the only thing we retain is the anonymous usage counters described above.{" "}
          <strong className="text-ink">These records contain no personal information and no menu content</strong>, and we keep
          them as operational records for running the service. Because they are tied only to a random identifier, they generally
          cannot be connected to you as a person.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          If you would like to make a deletion request, email us at{" "}
          <a href="mailto:info@menugallery.app" className="text-accent underline underline-offset-2 hover:no-underline">info@menugallery.app</a>{" "}
          and we will help where we can, bearing in mind that anonymous records usually cannot be matched to a specific individual.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">6. Your Rights and Choices</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          You can control the app&rsquo;s access and exercise your privacy rights at any time:
        </p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>
            <strong className="text-ink">The camera is the only permission the app requests.</strong>{" "}You can grant or revoke it
            whenever you like in your device&rsquo;s settings; if you revoke it, you simply will not be able to scan new menus.
          </li>
          <li>You can delete your on-device data at any time, as described above.</li>
        </ul>
        <p className="mb-4 text-ink/80 leading-relaxed">
          Depending on where you live &mdash; for example, in the European Economic Area, the United Kingdom, or California &mdash;
          you may have rights to access, correct, or delete personal information we hold about you. You can exercise these rights
          by emailing{" "}
          <a href="mailto:info@menugallery.app" className="text-accent underline underline-offset-2 hover:no-underline">info@menugallery.app</a>.
          Please note that, because <strong className="text-ink">we do not collect information that identifies you</strong>, in
          most cases we will not have any personal data to access or delete.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">7. Security</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          We protect your information with sensible safeguards.{" "}
          <strong className="text-ink">All data sent between the app and our services travels over encrypted HTTPS/TLS
          connections.</strong> Because we do not store your photos or menu content on our servers, there is very little of your
          data for anyone to reach in the first place. That said, <strong className="text-ink">no method of transmission or
          storage is ever completely secure</strong>, and we cannot guarantee absolute security.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">8. International Data Transfers</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          Our backend and the AI processing that reads your menu take place on servers located in the{" "}
          <strong className="text-ink">United States.</strong> If you use the app from outside the United States, the information
          involved in a scan is transferred to and processed in the United States, which may have data-protection laws that differ
          from those in your country. By using the app, you understand that your menu photo is processed there in order to return
          your results.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">9. Children&rsquo;s Privacy</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          MenuGallery is not directed to children under 13, and{" "}
          <strong className="text-ink">we do not knowingly collect personal information from children.</strong> Because the app
          has no accounts and collects no identifying information, we do not knowingly hold any data about a child. If you believe
          a child has somehow provided us with personal information, contact us at{" "}
          <a href="mailto:info@menugallery.app" className="text-accent underline underline-offset-2 hover:no-underline">info@menugallery.app</a>{" "}
          and we will address it.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">10. Changes to This Policy</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          We may update this Privacy Policy from time to time &mdash; for example, if we add a feature that changes how the app
          handles data. When we do, we will post the updated policy at this URL and revise the &ldquo;Last updated&rdquo; date at
          the top of this page. If the changes are significant, we will make a reasonable effort to bring them to your attention.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">11. Contact</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          MenuGallery is an independent app, and we are glad to hear from you. If you have any questions, concerns, or requests
          about this policy or your privacy, email us at{" "}
          <a href="mailto:info@menugallery.app" className="text-accent underline underline-offset-2 hover:no-underline">info@menugallery.app</a>.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          For the rules that govern your use of the app, please see our{" "}
          <Link href="/terms" className="text-accent underline underline-offset-2 hover:no-underline">Terms of Use</Link>.
        </p>
      </article>
      <Footer />
    </main>
  );
}
