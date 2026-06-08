import BookingCard from "@/components/BookingCard";
import { DeleteDestination } from "@/components/DeleteDestination";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Separator } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  const { destinationName, country, duration, imageUrl, description } = data;
  return (
    <div className="space-y-5 max-w-225 mt-4 mx-auto">
      <div className="flex items-center justify-end gap-3">
        <EditModal data={data} />
        <DeleteDestination data={data} />
      </div>
      <div>
        <Image
          alt={destinationName}
          src={imageUrl}
          width={900}
          height={400}
          className="mx-auto w-full h-100 object-cover"
        />
      </div>
      <Separator />
      <div className="flex justify-between gap-20">
        <div className="space-y-4">
          <div className="flex items-center gap-1 font-semibold text-zinc-500">
            <MdOutlineLocationOn />
            <span>{country}</span>
          </div>
          <div>
            <h4 className="text-4xl font-bold">{destinationName}</h4>
          </div>
          <div className="flex items-center gap-2 font-semibold text-zinc-500">
            <BsCalendar2Date />
            <span>{duration}</span>
          </div>
          <div className="space-y-1">
            <h5 className="text-2xl font-bold">Overview</h5>
            <p className="text-zinc-500">{description}</p>
          </div>
        </div>
        <div>
          <BookingCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
