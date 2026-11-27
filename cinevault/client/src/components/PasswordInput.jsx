import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function PasswordInput({ className, ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Input
        type={visible ? 'text' : 'password'}
        className={cn('pr-10', className)}
        {...props}
      />
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-cv-muted hover:text-cv-text"
      >
        {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </button>
    </div>
  );
}