import Legal, { H2 } from '../_components/Legal';

export const metadata = { title: 'Privacy Policy — Pookie' };

export default function Privacy() {
  return (
    <Legal title="Privacy Policy" updated="September 2026">
      <p>
        Pookie is a little app for two people in love. We keep the data we collect to the
        minimum needed to connect you with your partner and let you share sweet things.
        This policy explains what we collect and why.
      </p>

      <H2>No accounts</H2>
      <p>
        Pookie doesn't ask for an email or password. When you start, we create an anonymous
        random identifier for your device and a short pairing code so your partner can link
        to you. That's how the two of you become a couple in the app.
      </p>

      <H2>What we collect</H2>
      <p>
        <strong>Things you tell us:</strong> your name or nickname, your partner's nickname,
        your relationship start date, and a few playful onboarding answers.
      </p>
      <p>
        <strong>Things you make together:</strong> the doodles, letters, photos, captions,
        events and dates you create. These are stored on our servers so your partner can see
        them on their device. They are only ever shared between the two paired devices.
      </p>
      <p>
        <strong>Notifications:</strong> if you allow them, we store a push token from Apple so
        we can let you know when your pookie draws, writes, or plans something.
      </p>

      <H2>Where it's stored</H2>
      <p>
        Content is stored on our servers, and photos and drawings are kept in Cloudflare
        storage. We don't sell your data and we don't use third-party advertising trackers.
      </p>

      <H2>Who we share with</H2>
      <p>
        Only your paired partner sees your shared content. Behind the scenes we rely on a few
        service providers to run the app: Apple (push notifications and, if you subscribe,
        payments), Cloudflare (hosting and storage), and RevenueCat (managing subscriptions).
        They process data only to provide these services.
      </p>

      <H2>Purchases</H2>
      <p>
        Any purchases are handled by Apple and RevenueCat. We never see or store your card
        details.
      </p>

      <H2>Keeping &amp; deleting</H2>
      <p>
        We keep your content until you delete it or unpair. You can remove individual doodles,
        letters and photos in the app. To delete everything, email us and we'll wipe your
        couple's data.
      </p>

      <H2>Children</H2>
      <p>
        Pookie isn't directed to children under 13, and we don't knowingly collect their data.
      </p>

      <H2>Changes</H2>
      <p>
        If we update this policy we'll post the new version here with a fresh date.
      </p>
    </Legal>
  );
}
