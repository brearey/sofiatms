import { Ticket } from './ticket.types';
import prisma from '../database/prisma'

async function create(ticket: Ticket) {
  await prisma.ticket.create({
    data: {
      topic: ticket.topic,
      message: ticket.message
    }
  })
}