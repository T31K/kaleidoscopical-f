import { Gaegu, Nunito } from 'next/font/google';

const gaegu = Gaegu({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-gaegu' });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-nunito' });

export const metadata = {
  title: 'Pookie — a cute app for you & me',
  description:
    'Pookie is a cute couples app: draw on a shared board, send little letters, keep your photos, and count every day together. 🥰',
  metadataBase: new URL('https://pookie.kaleidoscopical.com'),
  openGraph: {
    title: 'Pookie — a cute app for you & me',
    description: 'Draw together, send letters, and keep every memory. For couples who are actually obsessed with each other 💕',
    images: ['/pookie/couple.png'],
  },
};

export const viewport = {
  themeColor: '#FDF2EE',
};

export default function PookieLayout({ children }) {
  return (
    <div className={`${gaegu.variable} ${nunito.variable}`} style={{ fontFamily: 'var(--font-nunito), system-ui, sans-serif' }}>
      {/* apex globals.css locks the viewport (overflow:hidden, dark bg) — undo it for Pookie pages */}
      <style dangerouslySetInnerHTML={{ __html: 'html,body{overflow:auto !important;height:auto !important;background:#FDF2EE !important;color:#5B4A42 !important;}' }} />
      {children}
    </div>
  );
}
