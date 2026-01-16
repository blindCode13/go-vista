import DestinationCard from "@/components/cards/DestinationCard";

export default async function Destinations() {
  const destinations = await fetch(`${process.env.NEXT_SITE_URL}/destinations.json`).then(resData => resData.json()).then(data => data) || [];

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 mt-28">
        {
          destinations.length !== 0 &&
          destinations.map(item => <DestinationCard key={item.id} data={item}></DestinationCard>)
        }
      </section>
    </>
  );
}