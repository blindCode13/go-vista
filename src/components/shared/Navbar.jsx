"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isLoggedIn } = useAuth();

  // ✅ ensure client-only rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ prevent hydration mismatch
  if (!mounted) return null;

  function handleLogout() {
    document.cookie = "logingStats=; path=/; max-age=0";
    alert("Successfully Logged Out");
    window.location.href = "/";
  }

  return (
    <>
      {/* FIXED NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-primary">
        <div className="max-w-2xl mx-auto px-6 sm:px-12">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-white text-2xl font-medium tracking-tight"
            >
              GoVista
            </Link>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-10">
              <li>
                <Link href="/" className="text-white/90 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-white/90 hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white/90 hover:text-white">
                  Packages
                </Link>
              </li>
            </ul>

            {/* Auth + Hamburger */}
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-title cursor-pointer"
                >
                  Log out
                </button>
              ) : (
                <Link
                  href="/login"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-title cursor-pointer"
                >
                  Login
                </Link>
              )}

              <button
                onClick={() => setOpen(true)}
                className="md:hidden text-white text-2xl"
                aria-label="Open menu"
              >
                <HiMenuAlt3 />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-surface p-6
            transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-medium text-title">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="text-2xl"
              aria-label="Close menu"
            >
              <HiX />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            <li><Link onClick={() => setOpen(false)} href="/">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/destinations">Destinations</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/packages">Packages</Link></li>
          </ul>
        </aside>
      </div>
    </>
  );
}
