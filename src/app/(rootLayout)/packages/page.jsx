import PackageCard from "@/components/cards/PackageCard";
import { readFile } from "fs/promises";
import path from "path";

export default async function Packages() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "packages.json"
  );

  const file = await readFile(filePath, "utf-8");
  const packages = JSON.parse(file) || [];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 mt-28">
      {packages.length !== 0 &&
        packages.map((item) => (
          <PackageCard key={item.id} data={item} />
        ))}
    </section>
  );
}
