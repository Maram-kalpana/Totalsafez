"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  createUser,
  findUserByIdentifier,
  loginUser,
  loginWithGoogle,
} from "@/lib/ecommerce";

export default function LoginPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (busy) return;

    setBusy(true);

    try {
      const identifier = (email.trim() || phone.trim()).trim();

      if (!identifier) {
        setError("Enter email or phone number.");
        return;
      }

      if (!password) {
        setError("Enter your password.");
        return;
      }

      const existing = findUserByIdentifier(identifier);

      // 🔐 LOGIN
      if (isLogin) {
        if (!existing) {
          setError("User not found. Please sign up.");
          return;
        }

        const result = loginUser({ identifier, password });

        if (!result.success) {
          setError(result.message);
          return;
        }

        window.dispatchEvent(new Event("garget:update"));
        router.push("/profile");
        return;
      }

      // 📝 SIGNUP
      if (!name.trim()) {
        setError("Name is required.");
        return;
      }

      if (!gender) {
        setError("Please select gender.");
        return;
      }

      if (!confirmPassword) {
        setError("Confirm password is required.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const created = createUser({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        gender,
        password,
      });

      if (!created.success) {
        setError(created.message);
        return;
      }

      window.dispatchEvent(new Event("garget:update"));
      router.push("/profile");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="bg-white">
      <Header />

      <section className="mx-auto max-w-xl px-4 py-12">
        {/* <h1 className="text-3xl font-semibold">Log In / Sign In</h1> */}
        <p className="mt-2 text-sm text-[#666]">
          New users will be automatically signed up. Returning users can log in
          with email/phone + password.
        </p>

        {/* TOGGLE */}
        <div className="mt-6 flex gap-6">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`text-sm ${
              isLogin ? "font-semibold text-black" : "text-gray-400"
            }`}
          >
            SIGN IN
          </button>

          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`text-sm ${
              !isLogin ? "font-semibold text-black" : "text-gray-400"
            }`}
          >
            SIGN UP
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={submit}
          className="mt-6 space-y-4 border border-[#ececec] p-6"
        >
          {error && (
            <div className="rounded border border-[#b42318] bg-[#fff1f1] px-3 py-2 text-sm text-[#b42318]">
              {error}
            </div>
          )}

          {/* SIGNUP ONLY */}
          {!isLogin && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
              />
            </div>
          )}

          {/* EMAIL / PHONE */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email / Phone number"
            className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
          />

          {/* SIGNUP ONLY */}
          {!isLogin && (
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
            >
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          )}

          {/* PASSWORD */}
          <div className="space-y-4">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
            />

            {!isLogin && (
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                type="password"
                className="w-full border border-[#dbdbdb] px-3 py-3 text-sm"
              />
            )}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center">
  <button
    type="submit"
    disabled={busy}
    className="w-fit px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white rounded-md disabled:opacity-60"
    style={{ backgroundColor: "#1700de" }}
  >
    {busy ? "Please wait..." : isLogin ? "LOGIN" : "CONTINUE"}
  </button>
</div>

          {/* OR */}
          <div className="relative pt-2">
            <div className="absolute inset-x-0 top-1 flex items-center justify-center">
              <span className="bg-white px-2 text-[11px] text-[#777]">
                or
              </span>
            </div>
            <div className="h-px w-full bg-[#ececec]" />
          </div>

          {/* GOOGLE LOGIN */}
          <div className="flex justify-center">
  <button
    type="button"
    onClick={async () => {
      setError("");
      setBusy(true);

      try {
        const result = loginWithGoogle();

        if (!result.success) {
          setError(result.message);
          return;
        }

        window.dispatchEvent(new Event("garget:update"));
        router.push("/profile");
      } finally {
        setBusy(false);
      }
    }}
    disabled={busy}
    className="w-fit px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white rounded-md disabled:opacity-60"
    style={{ backgroundColor: "#1700de" }}
  >
    Continue with Google
  </button>
</div>
        </form>
      </section>

      <Footer />
    </main>
  );
}