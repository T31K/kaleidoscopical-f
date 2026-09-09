import Link from 'next/link';

export default function TideLanding() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(180deg,#04182B 0%,#0A2E4D 100%)' }}>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="text-6xl">🌊</div>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-[#EAF6FF] sm:text-6xl">
          Chat with AI.
          <br />
          Clean the ocean.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[#9FC3DB]">
          Tide is a ChatGPT-style assistant with a mission. Ask anything — writing, homework,
          ideas — and every chat helps fund verified ocean cleanup.
        </p>

        <div className="mt-9 flex items-center justify-center gap-4">
          <span
            className="inline-flex items-center rounded-full px-6 py-3 text-base font-bold text-[#04182B]"
            style={{ background: '#2EC4B6' }}
          >
            Coming soon to the App Store
          </span>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-4 text-left sm:grid-cols-3">
          <Feature emoji="💬" title="You chat" body="Ask anything, any time. Fast, friendly answers." />
          <Feature emoji="🌊" title="Chats add up" body="Every message counts toward a shared ocean goal." />
          <Feature emoji="♻️" title="We fund cleanup" body="Revenue funds verified removal of ocean plastic." />
        </div>

        <p className="mx-auto mt-14 max-w-xl text-sm text-[#6f97b3]">
          Honest by design: premium revenue and our launch pool fund verified ocean cleanup —
          no fake promises, just chats that help.
        </p>

        <footer className="mt-16 flex items-center justify-center gap-5 border-t border-[#123a58] pt-8 text-sm text-[#6f97b3]">
          <Link href="/tide/privacy-policy" className="hover:text-[#2EC4B6]">Privacy</Link>
          <Link href="/tide/terms" className="hover:text-[#2EC4B6]">Terms</Link>
          <Link href="/tide/support" className="hover:text-[#2EC4B6]">Support</Link>
        </footer>
      </div>
    </main>
  );
}

function Feature({ emoji, title, body }) {
  return (
    <div className="rounded-2xl bg-[#0F3C5F]/60 p-5">
      <div className="text-3xl">{emoji}</div>
      <div className="mt-2 text-lg font-bold text-[#EAF6FF]">{title}</div>
      <div className="mt-1 text-sm text-[#9FC3DB]">{body}</div>
    </div>
  );
}
