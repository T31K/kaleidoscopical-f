import Link from 'next/link';

const hand = { fontFamily: 'var(--font-gaegu), system-ui, sans-serif' };

export default function Legal({ title, updated, children }) {
  return (
    <main className="min-h-screen bg-[#FDF2EE] text-[#5B4A42]">
      <div className="mx-auto max-w-2xl px-6 py-14">
        <Link href="/" className="text-[15px] text-[#8b7a72] hover:text-[#F2708F]" style={hand}>
          ← back to Pookie
        </Link>
        <h1 className="mt-4 text-5xl text-[#5B4A42]" style={hand}>{title}</h1>
        {updated && <p className="mt-1 text-sm text-[#a99a92]">Last updated {updated}</p>}
        <div className="pookie-prose mt-8 space-y-5 text-[15px] leading-relaxed text-[#6b5a52]">
          {children}
        </div>
        <footer className="mt-14 border-t border-[#e9d9d3] pt-6 text-sm text-[#a99a92]">
          Questions? <a href="mailto:t31kmunwong@gmail.com" className="text-[#F2708F]">t31kmunwong@gmail.com</a>
        </footer>
      </div>
    </main>
  );
}

export function H2({ children }) {
  return <h2 className="pt-3 text-2xl text-[#5B4A42]" style={{ fontFamily: 'var(--font-gaegu), sans-serif' }}>{children}</h2>;
}
