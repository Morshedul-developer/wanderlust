import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";

const DestinationCard = ({destination}) => {
    const {destinationName, country, category, price, duration, departureDate, imageUrl, description} = destination;
    return (
        <div className="space-y-4">
            <div>
                <Image
            alt={destinationName}
            src={imageUrl}
            width={400}
            height={400}
            />
            </div>
            <div>
                <div className="flex items-center gap-1 font-semibold text-zinc-500">
                    <MdOutlineLocationOn />
                    <span>{country}</span>
                </div>
                <h4 className="text-xl font-bold">{destinationName}</h4>
            </div>
        </div>
    );
};

export default DestinationCard;