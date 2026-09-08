import Legal, { H2 } from '../_components/Legal';

export const metadata = { title: 'Data Policy — Pookie' };

export default function DataPolicy() {
  return (
    <Legal title="Data Policy" updated="September 2026">
      <p>
        A plain-English summary of exactly what data Pookie handles, why, and how you
        stay in control. For the full legal version see our{' '}
        <a href="/privacy-policy" className="text-[#F2708F]">Privacy Policy</a>.
      </p>

      <H2>What we collect</H2>
      <p>
        • An anonymous device identifier and a 6-letter pairing code, to link you and your partner.<br />
        • The names/nicknames and relationship start date you enter.<br />
        • The content you create together: doodles, letters, photos, captions, events and dates.<br />
        • A device push token, only if you allow notifications.
      </p>

      <H2>What we DON'T collect</H2>
      <p>
        No email or password, no contacts, no location, no advertising identifiers, no third-party
        ad or analytics trackers. We never sell your data.
      </p>

      <H2>How it's used</H2>
      <p>
        Only to run the app: to pair you, sync your shared content between your two devices, send
        the notifications you asked for, and process subscriptions. Nothing else.
      </p>

      <H2>Who can see it</H2>
      <p>
        Only your paired partner. Our service providers process data solely to operate Pookie:
        Apple (notifications, payments), Cloudflare (hosting & photo storage), and RevenueCat
        (subscription management).
      </p>

      <H2>Storage &amp; retention</H2>
      <p>
        Content is stored on our servers, with photos and drawings in Cloudflare storage. We keep it
        until you delete it or unpair. Delete individual items anytime in the app.
      </p>

      <H2>Deleting everything</H2>
      <p>
        Email <a href="mailto:t31kmunwong@gmail.com" className="text-[#F2708F]">t31kmunwong@gmail.com</a>{' '}
        and we'll erase all data for your couple.
      </p>
    </Legal>
  );
}
