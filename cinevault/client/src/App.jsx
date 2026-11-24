import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PosterRow from '@/components/PosterRow';


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

function makePlaceholders(label, count) {
  return Array.from({ length: count }, (_, i) => ({
    id: `${label}-${i + 1}`,
    title: `${label} Title ${i + 1}`,
    year: 2015 + i,
    rating: (6.5 + i * 0.3).toFixed(1),
  }));
}

function App() {
  return (
    <>
     <Navbar />
      <Hero {...placeholderFeatured} />
      <main className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6">
        <PosterRow title="Trending movies" items={makePlaceholders('Movie', 10)} />
        <PosterRow title="Popular anime" items={makePlaceholders('Anime', 10)} />
        <PosterRow title="Empty row test" items={[]} />
      </main>
    </>
  );
}

export default App;