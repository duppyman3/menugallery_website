import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — MenuGallery",
  description: "The terms that govern your use of the MenuGallery app.",
};

const LAST_UPDATED = "July 8, 2026";

export default function TermsPage() {
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
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">Terms of Use</h1>
        <p className="mt-4 flex items-baseline text-sm text-ink-muted">
          <span>Effective</span><span className="dot-leader" aria-hidden="true" /><span>{LAST_UPDATED}</span>
        </p>

        <p className="mt-8 mb-4 text-ink/80 leading-relaxed">
          These Terms of Use (the <strong className="text-ink">&ldquo;Terms&rdquo;</strong>) form a binding
          agreement between you and <strong className="text-ink">MenuGallery</strong>{" "}(&ldquo;MenuGallery,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) governing your access to and use of the
          MenuGallery mobile application and any related services (together, the{" "}
          <strong className="text-ink">&ldquo;App&rdquo;</strong>). MenuGallery lets you photograph a printed
          menu so the App can read the dishes, show you an illustrative image of each dish, and display estimated
          nutrition information.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          Please read these Terms carefully. They include important disclaimers about AI-generated content and
          nutrition estimates, a limitation of our liability, and provisions that also apply for the benefit of the
          app stores through which you obtained the App. By downloading, installing, or using the App, you agree to
          these Terms. If you do not agree, do not use the App.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">1. Acceptance and Eligibility</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          By downloading, installing, accessing, or using the App, you acknowledge that you have read, understood,
          and agree to be bound by these Terms and by our{" "}
          <Link href="/privacy" className="text-accent underline underline-offset-2 hover:no-underline">
            Privacy Policy
          </Link>
          , which is incorporated into these Terms by reference. If you use the App on behalf of another person or
          entity, you represent that you are authorized to accept these Terms on their behalf.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          The App is not directed to children. You must be at least <strong className="text-ink">13 years old</strong>{" "}
          to use the App. By using the App, you represent and warrant that you are 13 or older and that you have the
          legal capacity to enter into these Terms.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">2. License</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          Subject to your compliance with these Terms, MenuGallery grants you a limited, personal, non-exclusive,
          non-transferable, non-sublicensable, and revocable license to download and use one copy of the App on a
          device that you own or control, solely for your own personal, non-commercial purposes. This license is
          granted to you and is not a sale of the App.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          Your use of the App must comply with the{" "}
          <strong className="text-ink">Usage Rules</strong>{" "}set out in the applicable app store&rsquo;s terms of
          service (including the Apple Media Services Terms and Conditions and the Google Play Terms of Service, as
          applicable). Where the App is downloaded from the Apple App Store, the license is further limited to use on
          any Apple-branded products that you own or control and as permitted by those Usage Rules, except that the
          App may be accessed and used by other accounts associated with you via Family Sharing or volume purchasing
          where enabled.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">You agree that you will not, and will not permit anyone else to:</p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>copy, modify, translate, or create derivative works of the App;</li>
          <li>
            reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code or underlying
            structure of the App, except to the limited extent this restriction is prohibited by applicable law;
          </li>
          <li>rent, lease, lend, sell, redistribute, sublicense, or otherwise transfer the App;</li>
          <li>remove, obscure, or alter any proprietary notices in the App; or</li>
          <li>use the App in any way not expressly permitted by these Terms.</li>
        </ul>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">3. The Service and AI-Generated Content</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          The App uses artificial intelligence to read the text of a menu you photograph and to generate content
          about the dishes it finds. You understand and agree that this content is produced automatically and{" "}
          <strong className="text-ink">may be inaccurate, incomplete, or out of date</strong>.
        </p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>
            <strong className="text-ink">Dish images are AI-generated illustrations</strong>, not photographs of the
            actual food served by any restaurant. They are intended to give you a general visual impression only and
            may differ substantially from the real dish in appearance, ingredients, and portion size.
          </li>
          <li>
            <strong className="text-ink">Extracted dish names, descriptions, and prices may contain errors.</strong>{" "}
            The App&rsquo;s reading of a menu can misinterpret text, omit items, or display outdated prices. Always
            confirm names, prices, ingredients, and availability directly with the physical menu or the restaurant
            before ordering or making any decision.
          </li>
        </ul>
        <p className="mb-4 text-ink/80 leading-relaxed">
          MenuGallery is not affiliated with, endorsed by, or sponsored by any restaurant, food establishment, or
          brand whose menu you may photograph, and we make no representation about the accuracy of any menu content.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">4. Nutrition Disclaimer</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          <strong className="text-ink">
            Calorie, carbohydrate, protein, and any other nutrition figures shown in the App are AI-generated
            estimates provided for general informational purposes only. They are not exact, they are not verified
            against any restaurant&rsquo;s recipes, and they must not be relied upon for medical, dietary, or health
            decisions.
          </strong>
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          The App does not provide medical, nutritional, or professional advice, and no content in the App is a
          substitute for the advice of a qualified physician, dietitian, or other healthcare professional.{" "}
          <strong className="text-ink">
            Never rely on the App to determine whether a food is safe for you, and never rely on it in connection
            with any allergy, intolerance, dietary restriction, or medical condition.
          </strong>{" "}
          If you have a food allergy or a medical condition, always verify ingredients and nutrition information
          directly with the restaurant and consult a qualified professional. Your reliance on any nutrition estimate
          in the App is entirely at your own risk.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">5. Your Content</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          As between you and MenuGallery, you retain all rights to the photographs you capture with the App
          (&ldquo;<strong className="text-ink">Your Content</strong>&rdquo;). You grant us a limited, worldwide,
          royalty-free license to process Your Content solely to operate and provide the App to you — for example, to
          transmit a menu photo to our AI providers so they can read it and return results. As described in our{" "}
          <Link href="/privacy" className="text-accent underline underline-offset-2 hover:no-underline">
            Privacy Policy
          </Link>
          , we do not store your photos on our servers; they are processed transiently and then discarded.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          You are solely responsible for Your Content. You represent and warrant that you have the right to
          photograph the menus you submit and to have them processed by the App, and that doing so does not violate
          any law or any third party&rsquo;s rights. The results the App produces are provided for your personal,
          non-commercial use.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">6. Acceptable Use</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">You agree not to use the App to:</p>
        <ul className="mb-4 list-disc pl-5 space-y-2 text-ink/80 leading-relaxed">
          <li>violate any applicable law or regulation, or infringe the rights of any third party;</li>
          <li>
            interfere with, disrupt, overload, or attempt to gain unauthorized access to the App, our servers, or the
            systems of our service providers;
          </li>
          <li>
            probe, scan, scrape, or test the vulnerability of our backend, or circumvent, disable, or defeat any
            security, authentication, or rate-limiting measure;
          </li>
          <li>
            use any automated means, bot, or script to access the App or to submit requests, or use the App to build
            a competing product or dataset; or
          </li>
          <li>use the App in any manner that could damage, disable, or impair it or interfere with anyone else&rsquo;s use.</li>
        </ul>
        <p className="mb-4 text-ink/80 leading-relaxed">
          To keep the service available and affordable for everyone, <strong className="text-ink">daily usage
          limits apply and may change</strong> at any time, in our discretion and without notice. You agree not to
          take any action designed to evade or exceed these limits.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">7. Maintenance, Support, and Availability</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          <strong className="text-ink">MenuGallery — and not Apple, Google, or any other app store or platform
          provider — is solely responsible</strong> for providing any maintenance and support for the App. No app
          store or platform provider has any obligation whatsoever to furnish any maintenance or support services
          with respect to the App. If you have any questions about the App, contact us using the details in the{" "}
          <a href="#contact" className="text-accent underline underline-offset-2 hover:no-underline">Contact</a>{" "}
          section below.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          The App relies on third-party artificial-intelligence services and internet connectivity to function. We
          do not guarantee that the App will be available, uninterrupted, or error-free, and we may modify, suspend,
          or discontinue the App or any of its features at any time, with or without notice, without liability to
          you.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">8. Intellectual Property</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          The App, including its software, design, text, graphics, logos, and the <strong className="text-ink">MenuGallery</strong>{" "}
          name and brand, is owned by MenuGallery and is protected by copyright, trademark, and other intellectual
          property laws. Except for the limited license granted in these Terms, no right, title, or interest in the
          App is transferred to you.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          In the event that any third party claims that the App or your possession and use of the App infringes that
          third party&rsquo;s intellectual property rights, <strong className="text-ink">MenuGallery — and not Apple,
          Google, or any other app store or platform provider — will be solely responsible</strong> for the
          investigation, defense, settlement, and discharge of any such intellectual property infringement claim, to
          the extent required by these Terms and applicable law.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">9. Third-Party Services and Terms</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          The App depends on third-party service providers to function, including{" "}
          <strong className="text-ink">Supabase</strong> (backend hosting and rate-limiting) and{" "}
          <strong className="text-ink">OpenRouter</strong> (routing your menu photo to AI model providers that read
          it). These providers are described in our{" "}
          <Link href="/privacy" className="text-accent underline underline-offset-2 hover:no-underline">
            Privacy Policy
          </Link>
          . You acknowledge and agree that your use of the App may be subject to the applicable terms of those third
          parties, and you agree to comply with any such third-party terms that apply to you.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          MenuGallery is not responsible for the practices, content, or availability of any third-party service, and
          these Terms do not create any obligation on the part of any third party toward you.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">10. Disclaimer of Warranties</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          <strong className="text-ink">
            The App is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; with all faults and without
            warranty of any kind.
          </strong>{" "}
          To the fullest extent permitted by applicable law, MenuGallery disclaims all warranties, whether express,
          implied, statutory, or otherwise, including any implied warranties of merchantability, fitness for a
          particular purpose, accuracy, and non-infringement, and any warranties arising out of course of dealing or
          usage of trade. We do not warrant that the App will meet your requirements, that it will be uninterrupted,
          secure, or error-free, or that the menu readings, dish images, prices, or nutrition estimates it produces
          will be accurate or reliable.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          If the App was obtained through the Apple App Store, then in the event of any failure of the App to conform
          to any applicable warranty, <strong className="text-ink">you may notify Apple, and Apple&rsquo;s sole
          warranty obligation to you will be to refund the purchase price of the App, if any</strong>. To the
          maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with
          respect to the App, and any other claims, losses, liabilities, damages, costs, or expenses attributable to
          any failure to conform to any warranty will be the sole responsibility of MenuGallery. Some jurisdictions
          do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">11. Limitation of Liability</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          To the fullest extent permitted by applicable law, in no event will MenuGallery be liable for any indirect,
          incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, data,
          goodwill, or other intangible losses, arising out of or relating to your use of or inability to use the
          App, your reliance on any content the App produces (including menu readings, dish images, prices, and
          nutrition estimates), or these Terms, whether based on warranty, contract, tort (including negligence), or
          any other legal theory, even if we have been advised of the possibility of such damages.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          To the fullest extent permitted by applicable law, MenuGallery&rsquo;s total aggregate liability for all
          claims arising out of or relating to the App or these Terms will not exceed the greater of the total
          amount you paid us to use the App (which is currently <strong className="text-ink">$0</strong>) or{" "}
          <strong className="text-ink">USD $50</strong>. Some jurisdictions do not allow the exclusion or limitation
          of certain damages, so some of the above limitations may not apply to you; in that case, our liability is
          limited to the smallest extent permitted by applicable law.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">12. Product Claims</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          <strong className="text-ink">MenuGallery — and not Apple, Google, or any other app store or platform
          provider — is responsible</strong>{" "}for addressing any claims by you or any third party relating to the App
          or your possession and use of it, including: (a) product liability claims; (b) any claim that the App fails
          to conform to any applicable legal or regulatory requirement; and (c) claims arising under consumer
          protection, privacy, or similar legislation, including in connection with the App&rsquo;s use of any
          artificial-intelligence features. These Terms do not limit MenuGallery&rsquo;s responsibility for such
          claims beyond what is permitted by applicable law.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">13. Legal Compliance</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          You represent and warrant that: (a) you are not located in a country that is subject to a U.S. Government
          embargo, or that has been designated by the U.S. Government as a &ldquo;terrorist-supporting&rdquo;
          country; and (b) you are not listed on any U.S. Government list of prohibited or restricted parties. You
          further agree to comply with all applicable local, state, national, and international laws and regulations
          in connection with your use of the App, including all applicable export control and sanctions laws.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">14. Apple and Google as Third-Party Beneficiaries</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          You acknowledge and agree that these Terms are concluded between you and{" "}
          <strong className="text-ink">MenuGallery only, and not with Apple</strong>, and that MenuGallery, not
          Apple, is solely responsible for the App and its content. Your use of the App must comply with the App
          Store Terms of Service.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          You further acknowledge and agree that <strong className="text-ink">Apple and Apple&rsquo;s subsidiaries
          are third-party beneficiaries of these Terms</strong>, and that, upon your acceptance of these Terms, Apple
          will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a
          third-party beneficiary of them.
        </p>
        <p className="mb-4 text-ink/80 leading-relaxed">
          Likewise, if you obtained the App through Google Play, you acknowledge that{" "}
          <strong className="text-ink">Google is not a party to these Terms and is not responsible for the App</strong>,
          and that your use of the App must comply with the Google Play Terms of Service.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">15. Termination</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          These Terms remain in effect while you use the App. We may suspend or terminate your license to use the App
          at any time, with or without notice, if you violate these Terms or if we discontinue the App. You may
          terminate these Terms at any time by ceasing all use of the App and deleting it from your device. Any
          provisions that by their nature should survive termination — including the disclaimers, limitations of
          liability, intellectual property provisions, and governing-law provisions — will survive.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">16. Changes to These Terms</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          We may update these Terms from time to time. When we do, we will revise the &ldquo;Effective&rdquo; date at
          the top of this page and post the updated Terms at this URL. Changes are effective when posted. Your
          continued use of the App after the updated Terms take effect constitutes your acceptance of them. If you do
          not agree to the updated Terms, you must stop using the App.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">17. Governing Law</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          These Terms and any dispute arising out of or relating to them or the App are governed by the laws of the{" "}
          <strong className="text-ink">State of Delaware, USA</strong>, without regard to its conflict-of-laws
          principles. This governing-law provision does not deprive you of the protection of any mandatory consumer
          protection laws of the country in which you reside where applicable law does not permit otherwise.
        </p>

        <h2 id="contact" className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">18. Contact and Developer Information</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          The App is provided by <strong className="text-ink">MenuGallery</strong>. If you have any questions,
          complaints, or claims regarding the App, or need to reach us for any reason, please contact us by email at{" "}
          <a href="mailto:info@menugallery.app" className="text-accent underline underline-offset-2 hover:no-underline">
            info@menugallery.app
          </a>
          . We are the point of contact for all such questions, complaints, and claims relating to the App.
        </p>

        <h2 className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight text-ink">19. Miscellaneous</h2>
        <p className="mb-4 text-ink/80 leading-relaxed">
          If any provision of these Terms is held to be invalid or unenforceable, that provision will be limited or
          eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and
          effect. Our failure to enforce any provision is not a waiver of our right to do so later. You may not
          assign or transfer these Terms without our prior written consent; we may assign these Terms without
          restriction. These Terms, together with our{" "}
          <Link href="/privacy" className="text-accent underline underline-offset-2 hover:no-underline">
            Privacy Policy
          </Link>
          , constitute the entire agreement between you and MenuGallery regarding the App and supersede any prior
          agreements on that subject.
        </p>
      </article>
      <Footer />
    </main>
  );
}
