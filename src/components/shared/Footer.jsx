import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-24 mb-12">
      <div className="mx-auto max-w-2xl">
        <div
          className="
            rounded-3xl bg-secondary/30
            px-6 py-12
            md:px-12
          "
        >
          {/* Top Section */}
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-title text-lg font-medium">GoVista</h3>
              <p className="text-sm max-w-xs">
                Discover the world with curated journeys, unforgettable
                destinations, and experiences designed for every traveler.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h4 className="text-title text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-title transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-title transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-title transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-title text-sm font-medium">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/destinations" className="hover:text-title transition">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="hover:text-title transition">
                    Packages
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-title text-sm font-medium">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-title transition">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-title transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-title transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-black/5" />

          {/* Bottom Section */}
          <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} GoVista. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-title transition">
                Terms
              </Link>
              <Link href="#" className="hover:text-title transition">
                Privacy
              </Link>
              <Link href="#" className="hover:text-title transition">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}