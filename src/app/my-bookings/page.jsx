import { DeleteBooking } from "@/components/DeleteBooking";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);
  const bookings = await res.json();
  console.log(bookings);
  return (
    <div className="max-w-300 mx-auto space-y-5">
      <div>
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-muted mt-2">
          Manage and view your upcoming travel plans
        </p>
      </div>
      <div className="space-y-5">
        {bookings.map((booking) => (
          <div className="border p-5 flex gap-6 rounder-none relative" key={booking._id}>
            <Image
              src={booking.imageUrl}
              alt={booking.userName}
              width={250}
              height={250}
              className="object-cover"
            />
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">{booking.destinationName}</h2>
              <p className="text-muted">
                Departure:{" "}
                {new Date(booking.departureDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-muted">Booking ID: {booking._id}</p>
                <strong className="font-bold text-2xl text-cyan-500">
                  ${booking.price}
                </strong>
                <DeleteBooking booking={booking}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
