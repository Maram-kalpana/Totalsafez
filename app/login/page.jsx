'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createUser, findUserByIdentifier, loginUser, loginWithGoogle } from '@/lib/ecommerce';

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Other');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const [busy, setBusy] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setError('');
    if (busy) return;
    setBusy(true);

    try {
      const identifier = (email.trim() || phone.trim()).trim();
      if (!identifier) {
        setError('Enter email or phone number.');
        return;
      }
      if (!password) {
        setError('Enter your password.');
        return;
      }

      const existing = findUserByIdentifier(identifier);
      if (existing) {
        const result = loginUser({ identifier, password });
        if (!result.success) {
          setError(result.message);
          return;
        }
        router.push('/profile');
        return;
      }

      // New user sign-up
      if (!name.trim()) {
        setError('Name is required.');
        return;
      }
      if (!confirmPassword) {
        setError('Confirm password is required.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      const created = createUser({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        gender,
        password
      });

      if (!created.success) {
        setError(created.message);
        return;
      }
      router.push('/profile');
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="bg-white">
      <Header />
      <section className="mx-auto max-w-xl px-4 py-12">
        <h1 className="text-3xl font-semibold">Log In / Sign In</h1>
        <p className="mt-2 text-sm text-[#666]">
          New users will be automatically signed up. Returning users can log in with email/phone + password.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-4 border border-[#ececec] p-6">
          {error ? <div className="rounded border border-[#b42318] bg-[#fff1f1] px-3 py-2 text-sm text-[#b42318]">{error}</div> : null}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
            />
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone number"
              className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
            />
          </div>

          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            type="email"
            className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
          />

          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              type="password"
              className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
            />
            <input
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm password"
              type="password"
              className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={busy}
            className="w-full bg-black px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors disabled:opacity-60"
          >
            {busy ? 'Please wait...' : 'Continue'}
          </button>

          <div className="relative pt-2">
            <div className="absolute inset-x-0 top-1 flex items-center justify-center">
              <span className="bg-white px-2 text-[11px] text-[#777]">or</span>
            </div>
            <div className="h-px w-full bg-[#ececec]" />
          </div>

          <button
            type="button"
            onClick={() => {
              setError('');
              setBusy(true);
              const result = loginWithGoogle();
              if (!result.success) {
                setError(result.message);
              } else {
                router.push('/profile');
              }
              setBusy(false);
            }}
            disabled={busy}
            className="w-full border border-[#111] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#111] transition-colors hover:bg-[#111] hover:text-white disabled:opacity-60"
          >
            Continue with Google
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
