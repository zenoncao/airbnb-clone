import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<
  Listing,
  'createdAt'
> & {
  createdAt: string
}

export type SafeReservation = Omit<
  Reservation,
  'createAt' | 'startDate' | 'endDate' | 'listing'
> & {
  createAt: string
  startData: string
  endDate: string
  listing: string
}

export type SafeUser = Omit<
  User,
  "createAt" | "updateAt" | "emailVerified"
> & {
  createAt: string
  updateAt: string
  emailVerified: string | null
}
