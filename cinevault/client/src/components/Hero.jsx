import { Info, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function Hero({
  title,
  overview,
  year,
  rating,
  runtime,
  genres = [],
  backdropUrl,
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden md:min-h-[85vh]">
      {/* Layer 1: backdrop image, or a gradient fallback */}
      {backdropUrl ? (
        <img
          src={backdropUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.25),transparent_50%)] bg-cv-surface" />
      )}

      {/* Layer 2: gradients that blend the image into the page */}
      <div className="absolute inset-0 bg-linear-to-t from-cv-bg via-cv-bg/50 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-cv-bg/80 via-transparent to-transparent" />

      {/* Layer 3: content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-cv-primary">
            Featured
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-cv-muted">
            {rating && (
              <span className="flex items-center gap-1 text-cv-text">
                <Star className="size-4 fill-cv-primary text-cv-primary" />
                {rating}
              </span>
            )}
            {year && <span>{year}</span>}
            {runtime && <span>{runtime}</span>}
            {genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-white/15 px-3 py-0.5"
              >
                {genre}
              </span>
            ))}
          </div>

          <p className="mt-5 line-clamp-3 text-base text-cv-muted md:text-lg">
            {overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">
              <Play className="fill-current" />
              Watch now
            </Button>
            <Button size="lg" variant="secondary">
              <Info />
              More info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}