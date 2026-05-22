"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label, Separator } from "@heroui/react";
import { useState } from "react";

const BookingCard = ({ data }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);
  const { _id, destinationName, country, price, imageUrl } = data;
  const handleBooking = async () => {
    const bookingData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };
  };
  return (
    <Card className="rounded-none border">
      <p className="text-sm text-muted">Starting from</p>
      <strong>${price}</strong>
      <p className="text-sm text-muted">Per person</p>
      <DateField className="w-[256px]" name="date" onChange={setDepartureDate}>
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Separator />
      <Button
        onClick={handleBooking}
        className={"w-full bg-cyan-500 hover:bg-cyan-400 rounded-none"}
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;
