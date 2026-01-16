import Link from "next/link";

export default function DestinationCard({data}) {
  const {id, destination, description, image, price} = data;
  
  return (
    <div className="w-full max-w-150 p-2 hover:-translate-y-4 transition duration-300">
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        {image ? (
          <Link href={`/destinations/${id}`}>
          <img
            src={image}
            alt={destination}
            className="h-[200px] w-full object-cover cursor-pointer"
          />
          </Link>
        ) : (
          <div className="h-[200px] w-full bg-muted" />
        )}
      </div>

      {/* Content */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-title text-base font-medium">
            {destination}
          </h3>
          <h3 className="text-base">{price}$ / day</h3>
        </div>

        <p className="mt-2 text-sm text-text leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
