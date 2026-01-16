import Booking from "@/components/routeSpecific/booking";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";

export default async function DestinationDetails({ params }) {
  const { id } = await params;

  const filePath = path.join(
    process.cwd(),
    "public",
    "destinations.json"
  );

  const file = await readFile(filePath, "utf-8");
  const data = JSON.parse(file) || [];

  const destination = data.find(item => item.id === id);

  if (!destination) {
    return (
      <div className="mt-32 text-center">
        <p className="text-text">Destination not found.</p>
        <Link href="/destinations" className="text-primary underline">
          Back to destinations
        </Link>
      </div>
    );
  }

  const { destination: name, description, image, price } = destination;

  return (
    <section className="mt-28">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/destinations"
          className="text-sm text-primary hover:underline"
        >
          ← Back to destinations
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
              ${price} / day
            </span>
          </div>

          <p className="mt-4 text-text leading-relaxed">
            {description}
          </p>
        </div>

        {/* Booking */}
        <Booking />
      </div>
    </section>
  );
}
