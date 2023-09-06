import { create } from "zustand";
import { Dates, Reservation } from "../types";

export type State = {
  reservations: Reservation[];
};

export type Actions = {
  addReservation: (hotelId: number, dates: Dates) => void;
};

const useAppStore = create<State & Actions>((set) => ({
  reservations: [],
  addReservation: (hotel, dates) =>
    set((state) => ({
      reservations: [
        ...state.reservations,
        {
          hotel,
          dates,
        },
      ],
    })),
}));

export default useAppStore;
