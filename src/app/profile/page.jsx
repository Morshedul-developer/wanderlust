import Image from "next/image";

const ProfilePage = () => {
  const user = {
    name: "Morshedul Khaer",
    email: "morshedul@example.com",
    image: "https://i.pravatar.cc/300",
    role: "Traveler",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Cover */}
        <div className="h-48 bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600" />

        {/* Profile */}
        <div className="px-8 pb-8">
          {/* <div className="-mt-16">
            <Image
              src={user.image}
              alt={user.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-white object-cover"
            />
          </div> */}

          <div className="mt-4">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-zinc-500">{user.email}</p>

            <span className="inline-block mt-3 px-3 py-1 rounded-full text-sm bg-cyan-100 text-cyan-700">
              {user.role}
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-5 rounded-2xl border">
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-zinc-500">Total Bookings</p>
            </div>

            <div className="p-5 rounded-2xl border">
              <h3 className="text-2xl font-bold">8</h3>
              <p className="text-zinc-500">Visited Places</p>
            </div>

            <div className="p-5 rounded-2xl border">
              <h3 className="text-2xl font-bold">4</h3>
              <p className="text-zinc-500">Upcoming Trips</p>
            </div>
          </div>

          {/* User Info */}
          <div className="mt-8 border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              Personal Information
            </h2>

            <div className="space-y-3">
              <p>
                <span className="font-medium">Full Name:</span> {user.name}
              </p>
              <p>
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium">Account Type:</span> Traveler
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;