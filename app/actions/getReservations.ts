import { Listing } from '@prisma/client';
import prisma from '@/app/libs/prismadb'

interface IParams {
  listingId?: string
  userId?: string
  authorId?: string
}

export default async function getReservations(
  params: IParams
) {
  try {
  const { listingId, userId, authorId } = params 

  const query: any = {}


  if(listingId) {
    query.userId = userId
  }

  if(userId) {
    query.userId = userId
  }

  if(authorId) {
    query.Listing = { userId: authorId }
  }

  const reservations = await prisma.reservation.findMany({
    where: query,
    include: {
      listing: true
    },
    orderBy: {
      createAt: 'desc'
    }
  })

  const safeReservations = reservations.map(
    (reservation) => ({
    ...reservation,
    createdAt: reservation.createAt.toISOString(),
    startDate: reservation.startDate.toISOString(),
    endDate: reservation.endDate.toISOString(),
    listing: {
      ...reservation.listing,
      createAt: reservation.listing.createAt.toISOString()
    }
  }))

  return safeReservations
} catch(error: any){
  throw new Error(error)
}
}
