export const metadata = {
  title: 'Tide — chat with AI, clean the ocean',
  description:
    'Tide is a ChatGPT-style AI assistant with a mission: every chat helps fund verified ocean cleanup. Ask anything. Make waves. 🌊',
  metadataBase: new URL('https://tide.kaleidoscopical.com'),
  openGraph: {
    title: 'Tide — chat with AI, clean the ocean',
    description: 'The AI assistant with a mission. Every chat helps fund real ocean cleanup. 🌊',
    images: ['/tide/og.png'],
  },
};

export const viewport = {
  themeColor: '#04182B',
};

export default function TideLayout({ children }) {
  return (
    <div style={{ fontFamily: 'ui-rounded, "SF Pro Rounded", system-ui, sans-serif' }}>
      {/* apex globals.css locks the viewport — undo it for Tide pages and set the ocean ground */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            'html,body{overflow:auto !important;height:auto !important;background:#04182B !important;color:#EAF6FF !important;}',
        }}
      />
      {children}
    </div>
  );
}
