import DestinationCard from "@/components/cards/DestinationCard";
import { readFile } from "fs/promises";
import path from "path";

export default async function Destinations() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "destinations.json"
  );

  const file = await readFile(filePath, "utf-8");
  const destinations = JSON.parse(file) || [];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 mt-28">
      {destinations.length !== 0 &&
        destinations.map((item) => (
          <DestinationCard key={item.id} data={item} />
        ))}
    </section>
  );
}
