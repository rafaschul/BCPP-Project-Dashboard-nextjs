export const metadata = {
  title: 'BCPP Project Dashboard',
  description: 'Converted to Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
