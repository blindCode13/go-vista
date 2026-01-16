import Link from "next/link";

export default function PackageCard({ data }) {
  const {
    id,
    name,
    country,
    places,
    duration,
    price,
    image,
  } = data;

  return (
    <div className="w-full max-w-150 p-2 hover:-translate-y-4 transition duration-300">
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        {image ? (
          <Link href={`/packages/${id}`}>
            <img
              src={image}
              alt={name}
              className="h-[200px] w-full object-cover cursor-pointer"
            />
          </Link>
        ) : (
          <div className="h-[200px] w-full bg-muted" />
        )}
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        {/* Title + Price */}
        <div className="flex items-center justify-between">
          <h3 className="text-title text-base font-medium">
            {name}
          </h3>
          <h3 className="text-base">
            ${price}
          </h3>
        </div>

        {/* Meta */}
        <p className="text-xs text-text">
          {country} • {duration}
        </p>

        {/* Places */}
        <p className="text-sm text-text">
          {places.join(" • ")}
        </p>
      </div>
    </div>
  );
}
