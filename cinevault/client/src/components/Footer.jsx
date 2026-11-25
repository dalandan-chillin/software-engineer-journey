import Logo from '@/components/Logo';

const FOOTER_COLUMNS = [
  {
    heading: 'Browse',
    links: ['Home', 'Movies', 'Anime', 'Search'],
  },
  {
    heading: 'Account',
    links: ['Login', 'Sign Up', 'Watchlist', 'Favorites'],
  },
  {
    heading: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Content Rights'],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10 bg-cv-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-cv-muted">
              Discover and watch legally available movies and anime for free.
              Create a free account for 1080p and a personal library.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold">{column.heading}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cv-muted transition-colors hover:text-cv-text"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-2 border-t border-white/10 pt-6 text-xs text-cv-muted">
          <p>© {year} CineVault. A portfolio project.</p>
          <p>
            Movie and anime metadata is provided by TMDB. This product uses
            the TMDB API but is not endorsed or certified by TMDB.
          </p>
        </div>
      </div>
    </footer>
  );
}