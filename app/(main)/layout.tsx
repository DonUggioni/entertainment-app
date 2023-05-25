import SearchBar from '../components/inputs/search-bar/SearchBar';
import NavBar from '../components/nav-bar/NavBar';
import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='container'>
      <NavBar />
      <main className={'mainWrapper'}>
        <SearchBar />
        {children}
      </main>
    </div>
  );
}
