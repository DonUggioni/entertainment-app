import './globals.scss';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

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
    <html lang='en' className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
