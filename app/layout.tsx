import './globals.scss';

export const metadata = {
  title: 'Be Entertained',
  description: 'An entertainment app created with our users in mind.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
