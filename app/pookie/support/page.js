import Legal, { H2 } from '../_components/Legal';

export const metadata = { title: 'Support — Pookie' };

export default function Support() {
  return (
    <Legal title="Support" updated="September 2026">
      <p>
        Need a hand, or have an idea to make Pookie cuter? We'd love to hear from you —
        email <a href="mailto:t31kmunwong@gmail.com" className="text-[#F2708F]">t31kmunwong@gmail.com</a> and
        we'll get back to you.
      </p>

      <H2>How do we pair up?</H2>
      <p>
        When you set up Pookie you get a 6-letter code. Send it to your partner, and they
        enter it when they open the app — that links the two of you. Only two phones can be
        in a couple.
      </p>

      <H2>My pookie isn't getting notifications</H2>
      <p>
        Make sure they allowed notifications when they first opened Pookie. They can turn them
        back on anytime in iPhone Settings → Notifications → Pookie.
      </p>

      <H2>How do widgets work?</H2>
      <p>
        Touch and hold an empty spot on your home screen, tap the ＋ in the corner, search
        “Pookie,” and add your favourite — the doodle board, days together, next date, or your
        latest letter.
      </p>

      <H2>How do I delete our data?</H2>
      <p>
        You can remove individual doodles, letters and photos inside the app. To erase
        everything for your couple, email us and we'll take care of it.
      </p>

      <H2>Still stuck?</H2>
      <p>
        Just reach out at t31kmunwong@gmail.com — a real person (in Kuala Lumpur) will reply. 💕
      </p>
    </Legal>
  );
}
