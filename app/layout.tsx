import { Outfit } from 'next/font/google';
import './globals.scss';
import { AppContextProvider } from './store/AppContext';

const outfit = Outfit({
  weight: ['300', '500'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
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
      <body>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
