import { useState } from 'react';
import { CheckCircle2, Check, Loader2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Logo from '@/components/Logo';
import PasswordInput from '@/components/PasswordInput';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Full class names written out so Tailwind's scanner can find them.
const SEGMENT_COLORS = {
  1: 'bg-red-500',
  2: 'bg-orange-500',
  3: 'bg-yellow-500',
  4: 'bg-emerald-500',
};
const STRENGTH_LABELS = ['Too short', 'Weak', 'Fair', 'Good', 'Strong'];

function getStrength(password) {
  const checks = [
    { label: 'At least 8 characters', ok: password.length >= 8 },
    { label: 'Upper and lower case letters', ok: /[a-z]/.test(password) && /[A-Z]/.test(password) },
    { label: 'At least one number', ok: /\d/.test(password) },
    { label: 'At least one symbol', ok: /[^A-Za-z0-9]/.test(password) },
  ];
  const score = checks.filter((check) => check.ok).length;
  return { checks, score };
}

function validate(values) {
  const errors = {};
  const { checks, score } = getStrength(values.password);

  if (values.fullName.trim().length < 2) errors.fullName = 'Enter your full name.';

  if (!values.email.trim()) errors.email = 'Email is required.';
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = 'Enter a valid email address.';

  if (!values.password) errors.password = 'Password is required.';
  else if (!checks[0].ok) errors.password = 'Use at least 8 characters.';
  else if (score < 3) errors.password = 'Make your password stronger.';

  if (!values.confirmPassword) errors.confirmPassword = 'Confirm your password.';
  else if (values.confirmPassword !== values.password) errors.confirmPassword = 'Passwords do not match.';

  if (!values.terms) errors.terms = 'You must accept the terms to continue.';

  return errors;
}

export default function SignupPage() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const { checks, score } = getStrength(values.password);

  function update(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('loading');
    // TEMPORARY: fake delay. Phase 5 replaces this with a request to our
    // backend, which also checks for duplicate emails (HTTP 409).
    setTimeout(() => setStatus('success'), 1200);
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left: branding panel (desktop only) */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-cv-surface p-12 lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.25),transparent_50%)]" />
        <div className="relative">
          <Logo />
        </div>
        <div className="relative max-w-md">
          <h2 className="text-4xl font-bold tracking-tight">
            Free account. Full quality.
          </h2>
          <p className="mt-4 text-cv-muted">
            Create an account to unlock 1080p where available, and keep a
            watchlist, favorites and your watch history. No payment needed.
          </p>
        </div>
      </div>

      {/* Right: form */}
      <div className="flex items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
          <p className="mt-2 text-cv-muted">It's free, and always will be.</p>

          {status === 'success' && (
            <div
              role="status"
              className="mt-6 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
            >
              <CheckCircle2 className="size-4" />
              Account created (demo only, no backend yet).
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                autoComplete="name"
                placeholder="Your name"
                value={values.fullName}
                onChange={(e) => update('fullName', e.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-sm text-red-400">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={(e) => update('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                autoComplete="new-password"
                placeholder="Create a password"
                value={values.password}
                onChange={(e) => update('password', e.target.value)}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? 'password-error' : undefined}
              />
              {errors.password && (
                <p id="password-error" className="text-sm text-red-400">{errors.password}</p>
              )}

              {values.password && (
                <div className="space-y-2 pt-1">
                  <div className="flex gap-1" aria-hidden="true">
                    {[1, 2, 3, 4].map((segment) => (
                      <div
                        key={segment}
                        className={`h-1.5 flex-1 rounded-full ${
                          segment <= score ? SEGMENT_COLORS[score] : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-cv-muted">
                    Strength: <span className="text-cv-text">{STRENGTH_LABELS[score]}</span>
                  </p>
                  <ul className="space-y-1">
                    {checks.map((check) => (
                      <li
                        key={check.label}
                        className={`flex items-center gap-2 text-xs ${
                          check.ok ? 'text-emerald-400' : 'text-cv-muted'
                        }`}
                      >
                        {check.ok ? <Check className="size-3" /> : <X className="size-3" />}
                        {check.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <PasswordInput
                id="confirmPassword"
                autoComplete="new-password"
                placeholder="Repeat your password"
                value={values.confirmPassword}
                onChange={(e) => update('confirmPassword', e.target.value)}
                aria-invalid={Boolean(errors.confirmPassword)}
                aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
              />
              {errors.confirmPassword && (
                <p id="confirmPassword-error" className="text-sm text-red-400">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  className="mt-0.5"
                  checked={values.terms}
                  onCheckedChange={(value) => update('terms', value === true)}
                />
                <Label htmlFor="terms" className="text-sm font-normal leading-snug">
                  I agree to the{' '}
                  <a href="#" className="text-cv-primary hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-cv-primary hover:underline">Privacy Policy</a>.
                </Label>
              </div>
              {errors.terms && <p className="text-sm text-red-400">{errors.terms}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-cv-muted">
            Already have an account?{' '}
            <a href="#" className="text-cv-primary hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}