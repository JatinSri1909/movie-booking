import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MovieBooking {
  id: string;
  movie: string;
  tickets: number;
  amount: number;
  time: string;
  date: string;
}

interface BookingStore {
  bookings: MovieBooking[];
  addBooking: (booking: MovieBooking) => void;
  user: string | null;
  setUser: (user: string | null) => void;
}

export const useStore = create<BookingStore>()(
  persist(
    (set) => ({
      bookings: [],
      user: null,
      setUser: (user) => set({ user }),
      addBooking: (booking) =>
        set((state) => ({
          bookings: [...state.bookings, booking],
        })),
    }),
    {
      name: 'almanack-storage',
    }
  )
);