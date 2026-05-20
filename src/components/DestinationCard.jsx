import Image from "next/image";
import { BsCalendar2Date } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;
  return (
    <div className="space-y-4 card">
      <div>
        <Image
          alt={destinationName}
          src={imageUrl}
          width={400}
          height={400}
          className="rounded-2xl"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-1 font-semibold text-zinc-500">
          <MdOutlineLocationOn />
          <span>{country}</span>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold">{destinationName}</h4>
          <strong className="text-xl font-bold">
            ${price}
            <span className="text-sm font-semibold text-zinc-500">/Person</span>
          </strong>
        </div>
        <div className="flex items-center gap-2 font-semibold text-zinc-500">
          <BsCalendar2Date />
          <span>{duration}</span>
        </div>
        <button className="flex items-center gap-2 text-[#15A1BF] hover:text-[#0d8ca8] cursor-pointer transition-all duration-300 hover:gap-3.5">
          BOOK NOW <FiArrowUpRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
