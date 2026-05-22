"use client";
import { Button, Card, DateField, Label } from "@heroui/react";

const BookingCard = ({ data }) => {
  const { price } = data;
  return (
    <Card className="rounded-none border">
      <p className="text-sm text-muted">Starting from</p>
      <strong>${price}</strong>
      <p className="text-sm text-muted">Per person</p>
      <DateField className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button className={'w-full bg-cyan-500 hover:bg-cyan-400 rounded-none'}>Book Now</Button>
    </Card>
  );
};

export default BookingCard;
