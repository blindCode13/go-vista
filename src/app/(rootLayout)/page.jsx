import DestinationCard from "@/components/cards/DestinationCard";
import PackageCard from "@/components/cards/PackageCard";
import Link from "next/link";

export default async function HomePage() {
  const destinations = await fetch(`${process.env.NEXT_SITE_URL}/destinations.json`).then(resData => resData.json()).then(data => data) || [];
  const packages = await fetch(`${process.env.NEXT_SITE_URL}/packages.json`).then(resData => resData.json()).then(data => data) || [];

  return (
    <section className="mt-20 space-y-32">
      <div
        className="
          relative overflow-hidden rounded-3xl
          bg-cover bg-center
          text-white
        "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b)",
        }}
      >
        {/* Overlay (optional, subtle) */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12">

          {/* Hero Text */}
          <div className="pt-28 text-center max-w-4xl mx-auto">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-8xl font-medium leading-tight">
              Discover the World <br />
              with GoVista
            </h1>
          </div>

          {/* Stats Glass Bar */}
          <div className="py-18 md:py-28 max-w-360 mx-auto">
            <div
              className="
                glass-card
                flex flex-col gap-8
                rounded-2xl
                p-6
                md:flex-row md:items-center md:justify-between
              "
            >
              {/* Left Stats */}
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-medium">350+</p>
                  <p className="text-sm">Destinations</p>
                </div>
                <div>
                  <p className="text-2xl font-medium">$549</p>
                  <p className="text-sm">Starting</p>
                </div>
              </div>

              {/* Descriptions */}
              <div className="flex-1 grid gap-4 md:grid-cols-2 text-sm">
                <p>
                  Explore stunning destinations around the world, from iconic
                  landmarks to hidden gems.
                </p>
                <p>
                  Experience thrilling adventures that take you off the beaten
                  path and immerse you in nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-between">

            {/* Left Content */}
            <div className="space-y-6">
              {/* Heading + Avatars */}
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="text-title text-4xl md:text-5xl font-medium leading-tight">
                  Designed for Every <br /> Destination
                </h2>

                {/* Avatars */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/40?img=${i + 10}`}
                        alt=""
                        className="h-8 w-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-title font-medium">86M+</span>
                </div>
              </div>

              {/* Description */}
              <p className="max-w-xl text-text">
                Every journey is unique, from mountain peaks to coastal escapes.
                GoVista helps you find experiences that match your mood, style, and
                sense of adventure. Our trusted partners ensure every moment of your
                trip is smooth, safe, and memorable.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="overflow-hidden rounded-2xl max-w-md w-full">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  alt="Adventure travel"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto">
        <p className="text-3xl font-medium">Destinations</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 mt-12">
          {
            destinations.length !== 0 &&
            destinations.slice(0, 4).map(item => <DestinationCard key={item.id} data={item}></DestinationCard>)
          }
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link href="/destinations" className="btn-primary">View All Destinations</Link>
        </div>
      </section>

      <section>
        <div className="max-w-360 mx-auto">
          <div
            className="
        relative overflow-hidden rounded-3xl
        bg-cover bg-center
        px-6 py-12
        md:px-12 md:py-24
        text-white
      "
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10">
              {/* Top content */}
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <h2 className="text-3xl md:text-4xl font-medium text-white">
                  GoVista Journeys
                </h2>

                <p className="max-w-[380px] text-sm leading-relaxed text-white">
                  Join us as we create new ways to explore the world—from ancient
                  wonders to modern marvels, every trip with GoVista is a story
                  waiting to be told.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  { value: "12K", label: "Guided Tours" },
                  { value: "64K", label: "Travelers" },
                  { value: "350", label: "Destinations" },
                  { value: "780", label: "Local Experts" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                rounded-2xl
                bg-white/20 backdrop-blur
                px-6 py-8 text-center
              "
                  >
                    <p className="text-2xl font-medium text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-white">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-360 mx-auto">
        <p className="text-3xl font-medium">Packages</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 mt-12">
          {
            packages.length !== 0 &&
            packages.slice(0, 4).map(item => <PackageCard key={item.id} data={item}></PackageCard>)
          }
        </div>
        <div className="flex items-center justify-center mt-8">
          <Link href="/packages" className="btn-primary">View All Packages</Link>
        </div>
      </section>

      <section>
        <div className="max-w-360 mx-auto">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-title text-3xl md:text-4xl font-medium leading-tight">
                Travel connects us to new <br />
                stories, flavors, and faces.
              </h2>

              {/* Image */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt="Travel together"
                  className="h-[240px] w-full object-cover md:h-[280px]"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="h-full">
              <div className="space-y-8">
                <div>
                  <h3 className="text-title font-medium">
                    Best Destinations
                  </h3>
                  <p className="mt-2 text-sm text-text leading-relaxed">
                    Explore the world’s most breathtaking places, from iconic
                    landmarks to hidden gems, for unforgettable experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-title font-medium">
                    Luxury Stays
                  </h3>
                  <p className="mt-2 text-sm text-text leading-relaxed">
                    Indulge in elegant accommodations and exceptional service
                    for the ultimate travel experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-title font-medium">
                    Adventure Trips
                  </h3>
                  <p className="mt-2 text-sm text-text leading-relaxed">
                    Embark on thrilling journeys that awaken your sense of
                    adventure and curiosity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32">
        <div className="max-w-2xl mx-auto">
          <div
            className="
        relative overflow-hidden rounded-3xl
        bg-cover bg-center
        px-6 py-16
        md:px-12 md:py-24
        text-white
      "
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05)",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="relative z-10 mb-48">
              <h2 className="text-3xl text-white md:text-6xl font-medium leading-tight">
                Unveiling the Four Pinnacle <br />
                GoVista Experiences
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/90">
                From soaring in hot-air balloons to exploring ancient wonders,
                our<br />signature trips capture the beauty of travel in every form.
              </p>
            </div>
          </div>
        </div>
      </section>


    </section>
  );
}