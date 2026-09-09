import Link from 'next/link';

export default function Legal({ title, updated, children }) {
  return (
    <main className="min-h-screen bg-[#04182B] text-[#EAF6FF]">
      <div className="mx-auto max-w-2xl px-6 py-14">
        <Link href="/tide" className="text-[15px] text-[#6f97b3] hover:text-[#2EC4B6]">
          ← back to Tide
        </Link>
        <h1 className="mt-4 text-4xl font-extrabold text-[#EAF6FF]">{title}</h1>
        {updated && <p className="mt-1 text-sm text-[#6f97b3]">Last updated {updated}</p>}
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#c3dced]">
          {children}
        </div>
        <footer className="mt-14 border-t border-[#123a58] pt-6 text-sm text-[#6f97b3]">
          Questions? <a href="mailto:t31kmunwong@gmail.com" className="text-[#2EC4B6]">t31kmunwong@gmail.com</a>
        </footer>
      </div>
    </main>
  );
}

export function H2({ children }) {
  return <h2 className="pt-3 text-2xl font-bold text-[#EAF6FF]">{children}</h2>;
}
