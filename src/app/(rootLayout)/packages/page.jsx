import PackageCard from "@/components/cards/PackageCard";

export default async function Packages() {
  const packages = await fetch(`${process.env.NEXT_SITE_URL}/packages.json`).then(resData => resData.json()).then(data => data) || [];

  return (
    <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 mt-28">
              {
                packages.length !== 0 &&
                packages.map(item => <PackageCard key={item.id} data={item}></PackageCard>)
              }
            </section>
    </>
  );
}