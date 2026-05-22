import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);
  const bookings = await res.json();
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-muted mt-2">
          Manage and view your upcoming travel plans
        </p>
      </div>
      <div>
        {
            bookings.map((booking,index) => <div key={index}>
                <h3>{booking.userName}</h3>
            </div>)
        }
      </div>
    </div>
  );
};

export default MyBookingsPage;
