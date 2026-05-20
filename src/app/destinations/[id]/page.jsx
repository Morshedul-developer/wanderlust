import { DeleteDestination } from "@/components/DeleteDestination";
import { EditModal } from "@/components/EditModal";
import { Separator } from "@heroui/react";
import Image from "next/image";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const DestinationDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:5000/destinations/${id}`);
    const data = await res.json();

    const {
        destinationName,
        country,
        price,
        duration,
        imageUrl,
        description,
      } = data;
      return (
        <div className="space-y-5 max-w-225 mt-4 mx-auto">
            <div className="flex items-center justify-end gap-3">
              <EditModal data={data}/>
            <DeleteDestination data={data}/>
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
          <div className="space-y-4">
            <div className="flex items-center gap-1 font-semibold text-zinc-500">
              <MdOutlineLocationOn />
              <span>{country}</span>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-4xl font-bold">{destinationName}</h4>
              <strong className="text-xl font-bold">
                ${price}
                <span className="text-sm font-semibold text-zinc-500">/Person</span>
              </strong>
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
        </div>
      );
};

export default DestinationDetailsPage;