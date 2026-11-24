import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// TEMPORARY placeholder data. Phase 6 replaces this with real
// metadata fetched from our backend (TMDB).
const placeholderFeatured = {
  title: 'Featured Title',
  overview:
    'This is placeholder text standing in for a real synopsis. Once the catalog is connected, this banner will show real titles with posters and backdrops from the backend.',
  year: 2026,
  rating: '8.1',
  runtime: '2h 04m',
  genres: ['Sci-Fi', 'Adventure'],
};

function App() {
  return (
    <>
      <Navbar />
      <Hero {...placeholderFeatured} />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="text-2xl font-semibold">Trending movies</h2>
        <p className="mt-2 text-cv-muted">Poster rows go here next.</p>
      </main>
    </>
  );
}

export default App;