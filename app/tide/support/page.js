import Legal, { H2 } from '../_components/Legal';

export const metadata = { title: 'Support — Tide' };

export default function Support() {
  return (
    <Legal title="Support" updated="September 2026">
      <p>
        Need help with Tide? We&apos;re a tiny team and happy to hear from you.
        Email <a href="mailto:t31kmunwong@gmail.com" className="text-[#2EC4B6]">t31kmunwong@gmail.com</a> and
        we&apos;ll get back to you.
      </p>

      <H2>Common questions</H2>
      <p>
        <strong>How does chatting help the ocean?</strong> Premium revenue and our launch pool
        fund verified ocean cleanup. The counters in the app show our collective contribution.
      </p>
      <p>
        <strong>Are my chats private?</strong> Yes — your conversations are stored only on your
        device, never on our servers. See our <a href="/tide/privacy-policy" className="text-[#2EC4B6]">Privacy Policy</a>.
      </p>
      <p>
        <strong>What do I get with premium?</strong> Unlimited messages, a smarter and faster
        AI, a bigger impact multiplier, and you help fund more cleanup.
      </p>
      <p>
        <strong>How do I manage my subscription?</strong> Open the Settings app on your iPhone,
        tap your name, then Subscriptions. You can cancel there anytime.
      </p>
      <p>
        <strong>How do I delete my data?</strong> Deleting the app removes your on-device chat
        history. To remove your anonymous usage counts, email us.
      </p>
    </Legal>
  );
}
