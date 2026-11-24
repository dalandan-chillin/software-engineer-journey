import { Film, Star } from 'lucide-react';

export default function MovieCard({ title, year, rating, posterUrl }) {
  return (
    <a
      href="#"
      className="group block w-36 shrink-0 snap-start sm:w-44 md:w-48"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-white/10 bg-cv-card transition duration-300 group-hover:scale-105 group-hover:border-cv-primary/60">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={`${title} poster`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-cv-card to-cv-surface">
            <Film className="size-10 text-cv-muted/50" />
          </div>
        )}
      </div>

      <h3 className="mt-3 truncate text-sm font-medium transition-colors group-hover:text-cv-primary">
        {title}
      </h3>
      <div className="mt-1 flex items-center gap-2 text-xs text-cv-muted">
        {year && <span>{year}</span>}
        {rating && (
          <span className="flex items-center gap-1">
            <Star className="size-3 fill-cv-primary text-cv-primary" />
            {rating}
          </span>
        )}
      </div>
    </a>
  );
}