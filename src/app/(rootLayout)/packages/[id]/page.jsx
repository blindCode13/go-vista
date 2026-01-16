import Booking from "@/components/routeSpecific/booking";
import Link from "next/link";

export default async function PackageDetails({ params }) {
  const { id } = await params;

  const data =
    (await fetch(`${process.env.NEXT_SITE_URL}/packages.json`)
      .then((res) => res.json())
      .then((data) => data)) || [];

  const pkg = data.find((item) => item.id === id);

  if (!pkg) {
    return (
      <div className="mt-32 text-center">
        <p className="text-text">Package not found.</p>
        <Link href="/packages" className="text-primary underline">
          Back to packages
        </Link>
      </div>
    );
  }

  const {
    name,
    country,
    places,
    duration,
    price,
    image,
  } = pkg;

  return (
    <section className="mt-28">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/packages"
          className="text-sm text-primary hover:underline"
        >
          ← Back to packages
        </Link>

        {/* Image */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-muted">
          {image ? (
            <img
              src={image}
              alt={name}
              width={1200}
              height={500}
              className="h-[360px] w-full object-cover"
            />
          ) : (
            <div className="h-[360px] w-full bg-muted" />
          )}
        </div>

        {/* Content */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h1 className="text-title text-3xl md:text-4xl font-medium">
              {name}
            </h1>
            <span className="text-lg font-medium text-title">
              ${price}
            </span>
          </div>

          {/* Meta */}
          <p className="mt-2 text-sm text-text">
            {country} • {duration}
          </p>

          <p className="mt-4 text-text leading-relaxed">
            This package covers some of the most iconic experiences across{" "}
            {country}, carefully curated to give you a balanced and memorable
            journey.
          </p>
        </div>

        {/* Places */}
        <div className="mt-8">
          <h3 className="text-title text-lg font-medium">
            Places covered
          </h3>

          <ul className="mt-3 flex flex-wrap gap-2">
            {places.map((place) => (
              <li
                key={place}
                className="rounded-full bg-muted px-3 py-1 text-sm text-title"
              >
                {place}
              </li>
            ))}
          </ul>
        </div>

        <Booking></Booking>
      </div>
    </section>
  );
}