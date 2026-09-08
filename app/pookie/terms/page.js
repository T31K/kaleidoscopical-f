import Legal, { H2 } from '../_components/Legal';

export const metadata = { title: 'Terms of Use — Pookie' };

export default function Terms() {
  return (
    <Legal title="Terms of Use" updated="September 2026">
      <p>
        By using Pookie you agree to these simple terms. We tried to keep them human.
      </p>

      <H2>Using Pookie</H2>
      <p>
        Pookie is for you and one partner to share cute things privately. Be kind, and only
        share content you have the right to share. Don't use Pookie for anything illegal,
        harmful, or abusive.
      </p>

      <H2>Your content</H2>
      <p>
        Everything you create — doodles, letters, photos — belongs to you. You give us
        permission to store it and show it to your paired partner so the app works. We don't
        claim ownership and we don't use your content for anything else.
      </p>

      <H2>Subscriptions</H2>
      <p>
        Pookie may offer an optional paid plan. If you subscribe, payment is charged to your
        Apple ID, and subscriptions renew automatically unless cancelled at least 24 hours
        before the end of the period. You can manage or cancel anytime in your Apple ID
        settings.
      </p>

      <H2>No guarantees</H2>
      <p>
        Pookie is provided “as is.” We work hard to keep it running and your memories safe,
        but we can't promise it will always be available or error-free. To the extent allowed
        by law, we're not liable for any loss arising from using the app.
      </p>

      <H2>Ending</H2>
      <p>
        You can stop using Pookie anytime by unpairing and deleting the app. We may suspend
        access if these terms are broken.
      </p>

      <H2>Contact</H2>
      <p>
        Questions about these terms? Email us at t31kmunwong@gmail.com.
      </p>
    </Legal>
  );
}
