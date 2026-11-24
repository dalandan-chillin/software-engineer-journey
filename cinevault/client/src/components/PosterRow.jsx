import MovieCard from '@/components/MovieCard';

export default function PosterRow({ title, items = [] }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">{title}</h2>

      {items.length === 0 ? (
        <p className="text-cv-muted">Nothing here yet.</p>
      ) : (
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <MovieCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}