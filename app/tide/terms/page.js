import Legal, { H2 } from '../_components/Legal';

export const metadata = { title: 'Terms of Use — Tide' };

export default function Terms() {
  return (
    <Legal title="Terms of Use" updated="September 2026">
      <p>
        By using Tide, you agree to these terms. Please read them. If you don&apos;t agree,
        don&apos;t use the app.
      </p>

      <H2>The service</H2>
      <p>
        Tide is an AI assistant. It generates responses automatically and can be wrong,
        incomplete, or out of date. Don&apos;t rely on it for professional, legal, medical, or
        financial advice. You&apos;re responsible for how you use its answers.
      </p>

      <H2>Acceptable use</H2>
      <p>
        Don&apos;t use Tide to break the law, harm others, generate abusive or illegal content,
        or attempt to disrupt or reverse-engineer the service. We may limit or end access if
        the app is misused.
      </p>

      <H2>Free and premium</H2>
      <p>
        Tide offers a free tier with a daily message limit and an optional premium subscription
        with unlimited messages and other benefits. Subscriptions are billed through your Apple
        account and renew automatically until cancelled. Manage or cancel anytime in your
        device&apos;s subscription settings.
      </p>

      <H2>Ocean impact</H2>
      <p>
        Tide contributes toward verified ocean cleanup, funded by premium revenue and our
        launch pool. Impact figures shown in the app describe our collective contribution and
        are provided in good faith; they are not a guarantee of a specific per-message outcome.
      </p>

      <H2>No warranty</H2>
      <p>
        Tide is provided &quot;as is,&quot; without warranties of any kind. To the extent
        permitted by law, we aren&apos;t liable for damages arising from your use of the app.
      </p>

      <H2>Changes</H2>
      <p>We may update these terms; the current version always lives here.</p>
    </Legal>
  );
}
