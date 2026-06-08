import { Button } from "@heroui/react";
import Link from "next/link";
import DestinationCard from "./DestinationCard";

const Featured = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/featured-destinations`,
  );
  const destinations = await res.json();
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
        <h2 className="text-4xl font-bold">Featured Destinations</h2>
        <p className="text-muted text-sm mt-1">Discover our most popular travel destinations</p>
      </div>
      <div>
        <Link href="/destinations">
          <Button variant="outline" className="rounded-none text-cyan-500 hover:text-cyan-600 border-cyan-500 hover:border-cyan-600">
            All Destinations
          </Button>
        </Link>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
        destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)
      }
      </div>
    </div>
  );
};

export default Featured;
