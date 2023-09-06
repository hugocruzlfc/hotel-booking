import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Typography,
  Stack,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "wouter";
import { Hotel } from "../types";

const fetchHotels = async () => {
  const response = await fetch("http://localhost:3001/hotels");
  if (!response.ok) throw new Error("Problem fetching hotels");
  return response.json();
};

export interface HotelListProps {}

const HotelList: React.FC<HotelListProps> = () => {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({ queryKey: ["hotels"], queryFn: fetchHotels });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Problem loading hotels</div>;

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
      >
        Booking App
      </Typography>
      <Stack spacing={2}>
        {hotels.map((hotel: Hotel) => (
          <Link
            key={hotel.id}
            href={`/hotel/${hotel.id}`}
          >
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
                <Button size="small">See Details</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default HotelList;
