import { Ticket, TicketStatus } from './ticket.types';
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
      console.error(e);
      return e;
    }
  }

  async inProgress(id: number): Promise<unknown> {
    try {
      return await prisma.ticket.update({
        data: {
          status: TicketStatus.IN_PROGRESS,
        },
        where: {
          id: id,
        },
      });
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async complete(id: number): Promise<unknown> {
    try {
      return await prisma.ticket.update({
        data: {
          status: TicketStatus.COMPLETED,
        },
        where: {
          id: id,
        },
      });
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}

export default new TicketModel();
