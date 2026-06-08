
const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured-destinations`);
    const destinations = await res.json();
    return (
        <div className="max-w-7xl mx-auto py-10">
            <h2 className="text-3xl font-bold">Featured Destinations</h2>
        </div>
    );
};

export default Featured;