import Link from 'next/link';

const hand = { fontFamily: 'var(--font-gaegu), system-ui, sans-serif' };

function Feature({ emoji, title, body }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(91,74,66,0.06)]">
      <div className="text-4xl">{emoji}</div>
      <h3 className="mt-3 text-2xl text-[#5B4A42]" style={hand}>{title}</h3>
      <p className="mt-1 text-[15px] leading-relaxed text-[#8b7a72]">{body}</p>
    </div>
  );
}

export default function PookieHome() {
  return (
    <main className="min-h-screen bg-[#FDF2EE] text-[#5B4A42]">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-10 text-center">
        <img src="/pookie/icon.png" alt="Pookie" width={104} height={104}
             className="mx-auto rounded-[26px] shadow-[0_12px_36px_rgba(242,112,143,0.25)]" />
        <h1 className="mt-6 text-6xl text-[#5B4A42]" style={hand}>Pookie</h1>
        <p className="mt-2 text-2xl text-[#8b7a72]" style={hand}>a cute app for you &amp; me 💕</p>
        <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-[#8b7a72]">
          Draw on a shared board, send little letters, keep your photos, and count
          every day together. For couples who are actually obsessed with each other.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#5B4A42] px-6 py-3 text-white">
          <span style={hand} className="text-lg"> Coming soon to the App Store 🍎</span>
        </div>
      </section>

      {/* Big illustration */}
      <section className="mx-auto max-w-3xl px-6 pb-6">
        <div className="rounded-[32px] bg-[#F9D5D3]/50 p-8 text-center">
          <img src="/pookie/couple.png" alt="A cute couple" className="mx-auto w-64 max-w-full" />
          <p className="mt-2 text-xl text-[#8b7a72]" style={hand}>You + Me, Always ❤️</p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-3xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-2">
        <Feature emoji="🎨" title="Draw together" body="One shared canvas. Doodle and watch your pookie's strokes appear in real time." />
        <Feature emoji="💌" title="Little letters" body="Write sweet notes — even sealed ones that unlock on a special date." />
        <Feature emoji="📸" title="Our gallery" body="Keep all your favourite photos together, with cute captions and places." />
        <Feature emoji="🎉" title="Plan events" body="Invite each other on dates, say yes, and get a gentle reminder before." />
      </section>

      {/* Widgets note */}
      <section className="mx-auto max-w-3xl px-6 pb-16 text-center">
        <div className="rounded-3xl bg-[#E4DBF5]/50 p-8">
          <h2 className="text-3xl text-[#5B4A42]" style={hand}>On your home screen 🥰</h2>
          <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-[#8b7a72]">
            Add the Pookie widgets — your shared doodle board, days together, next date,
            and latest letter — right where you'll see them all day.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e9d9d3] px-6 py-10 text-center text-[15px] text-[#8b7a72]">
        <div className="flex justify-center gap-6" style={hand}>
          <Link href="/privacy" className="text-lg hover:text-[#F2708F]">Privacy</Link>
          <Link href="/terms" className="text-lg hover:text-[#F2708F]">Terms</Link>
          <Link href="/support" className="text-lg hover:text-[#F2708F]">Support</Link>
        </div>
        <p className="mt-5">Made with 💕 in Kuala Lumpur · © {new Date().getFullYear()} Pookie</p>
      </footer>
    </main>
  );
}
