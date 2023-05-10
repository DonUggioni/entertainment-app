import SearchBar from './components/inputs/search-bar/SearchBar';
import NavBar from './components/nav-bar/NavBar';
import { Outfit } from 'next/font/google';
import './globals.scss';

const outfit = Outfit({
  weight: ['300', '500'],
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
      <body>
        <NavBar />
        <main className={'mainWrapper'}>
          <SearchBar />
          {children}
        </main>
      </body>
    </html>
  );
}
