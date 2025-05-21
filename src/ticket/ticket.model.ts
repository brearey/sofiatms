import { Ticket } from './ticket.types';
import prisma from '../database/prisma';

class TicketModel {
  async create(ticket: Ticket): Promise<unknown> {
    try {
      return await prisma.ticket.create({
        data: {
          topic: ticket.topic,
          message: ticket.message,
        },
      });
    } catch (e) {
      console.error(e)
      return e;
    }
  }
}

export default new TicketModel();