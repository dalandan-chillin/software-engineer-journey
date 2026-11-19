import Navbar from '@/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <h1 className="text-3xl font-bold">Hero section goes here</h1>
        <div className="mt-6 space-y-6">
          {Array.from({ length: 30 }, (_, i) => (
            <p key={i} className="text-cv-muted">
              Placeholder row {i + 1}, which makes the page tall enough to scroll.
            </p>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;