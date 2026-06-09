import DestinationCard from "@/components/DestinationCard";

const DestinationsPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`);
    const destinations = await res.json();

    return (
        <div className="max-w-7xl mx-auto space-y-5 mt-10 mb-15">
            <h1 className="capitalize text-4xl font-bold">Explore all destinations</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }
            </div>
        </div>
    );
};

export default DestinationsPage;