import { Clapperboard } from 'lucide-react';

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2" aria-label="CineVault home">
      <Clapperboard className="size-6 text-cv-primary" />
      <span className="text-xl font-bold tracking-tight">
        Cine<span className="text-cv-primary">Vault</span>
      </span>
    </a>
  );
}