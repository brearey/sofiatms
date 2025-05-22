import {DatesFilterType, Ticket, TicketStatus, UpdateStatus} from './ticket.types';
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

  async updateStatus(data: UpdateStatus): Promise<unknown> {
    try {
      return await prisma.ticket.update({
        data: {
          status: data.status,
          resolution: data.resolution,
          cancelledReason: data.cancelledReason
        },
        where: {
          id: data.id,
        },
      });
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async cancelAll(cancelledReason: string): Promise<unknown> {
    try {
      return await prisma.ticket.updateMany({
        data: {
          status: TicketStatus.CANCELLED,
          cancelledReason: cancelledReason
        },
        where: {
          status: TicketStatus.IN_PROGRESS
        },
      });
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async getAll(data: DatesFilterType): Promise<unknown> {
    try {
      console.log('2025-10-22'.toISO)
      return await prisma.ticket.findMany({
        where: {
          createdAt: data.oneDate
        },
        select: {
          id: true
        }
      });
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}

export default new TicketModel();
