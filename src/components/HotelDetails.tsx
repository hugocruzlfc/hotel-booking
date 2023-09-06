import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import BookingForm from "./BookingForm";

const fetchHotel = async (id: string) => {
  const response = await fetch(`http://localhost:3001/hotels/${id}`);
  if (!response.ok) throw new Error("Problem fetching hotel");
  return response.json();
};

export interface HotelDetailsProps {}

const HotelDetails: React.FC<HotelDetailsProps> = () => {
  const [, params] = useRoute("/hotel/:id");
  const {
    data: hotel,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotel", params?.id],
    queryFn: () => fetchHotel(params?.id as string),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Problem loading hotels</div>;

  return (
    <>
      <Card sx={{ maxWidth: 345, backgroundColor: "#e8e8e8" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={hotel.image}
          title={hotel.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {hotel.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {hotel.description}
          </Typography>
        </CardContent>
        <CardActions>
          <BookingForm hotel={hotel} />
        </CardActions>
      </Card>
    </>
  );
};

export default HotelDetails;
