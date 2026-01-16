"use client";

function getAuthFromCookie() {
  if (typeof document === "undefined") {
    return { email: null, isLoggedIn: false };
  }

  const raw = document.cookie
    .split("; ")
    .find(row => row.startsWith("logingStats="))
    ?.split("=")[1];

  if (!raw) return { email: null, isLoggedIn: false };

  try {
    const parsed = JSON.parse(decodeURIComponent(raw));

    if (parsed?.email && parsed?.status === true) {
      return {
        email: parsed.email,
        isLoggedIn: true,
      };
    }
  } catch {}

  return { email: null, isLoggedIn: false };
}

export default function useAuth() {
  // ✅ state initialized synchronously
  const auth = getAuthFromCookie();
  return auth;
}
