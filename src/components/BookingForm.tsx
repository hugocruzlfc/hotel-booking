import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Typography, Input, Button } from "@mui/material";
import toast from "react-hot-toast";

import { Dates, Hotel } from "../types";
import useAppStore from "../store/useAppStore";

export interface BookingFormProps {
  hotel: Hotel;
}

const BookingForm: React.FC<BookingFormProps> = ({ hotel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addReservation = useAppStore((state) => state.addReservation);

  const onSubmit = (formValues: FieldValues) => {
    const data = {
      ...formValues,
    } as Dates;
    addReservation(hotel.id, data);
    toast.success("Reservation added");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="date"
        {...register("startDate", {
          required: true,
        })}
      />
      {errors.startDate && (
        <Typography style={{ color: "red" }}>Start Date is required</Typography>
      )}
      <br />
      <Input
        type="date"
        {...register("endDate", {
          required: true,
        })}
      />
      {errors.endDate && (
        <Typography style={{ color: "red" }}>End Date is required</Typography>
      )}
      <br />
      <br />
      <Button
        type="submit"
        variant="contained"
      >
        Book Now
      </Button>
    </form>
  );
};

export default BookingForm;
