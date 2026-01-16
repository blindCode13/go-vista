"use client";

import { useState } from "react";

const MOCK_EMAIL = "admin12@gmail.com";
const MOCK_PASSWORD = "Aa@12345";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Mock validation
    if (email !== MOCK_EMAIL || password !== MOCK_PASSWORD) {
      setError("Invalid email or password");
      return;
    }

    // Save login cookie (mock login)
    document.cookie = `logingStats=${encodeURIComponent(JSON.stringify({email, status: true}))}; path=/`;
    alert("Successfully Logged In");

    // Redirect after login
    window.location.href = "/";
  }

  function fillDemoCredentials() {
    setEmail(MOCK_EMAIL);
    setPassword(MOCK_PASSWORD);
    setError("");
  }

  return (
    <div className="mx-auto mt-24 w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-title text-2xl font-medium text-center">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Email */}
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border px-4 py-2 text-sm"
        />

        {/* Password */}
        <input
          name="password"
          type="password"
          required
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border px-4 py-2 text-sm"
        />

        {/* Error message */}
        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button type="submit" className="btn-primary w-full">
            Login
          </button>

          <button
            type="button"
            onClick={fillDemoCredentials}
            className="w-full rounded-lg border px-4 py-2 text-sm text-title hover:bg-muted transition"
          >
            Demo credentials
          </button>
        </div>
      </form>
    </div>
  );
}
