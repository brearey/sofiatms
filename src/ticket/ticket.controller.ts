import { Ticket, TicketStatus } from './ticket.types';
import TicketModel from './ticket.model';

class TicketController {
  async create(topic: string, message: string): Promise<unknown> {
    const ticket: Ticket = {
      id: null,
      topic: topic,
      message: message,
      status: TicketStatus.NEW,
      resolution: null,
      cancelledReason: null,
    };
    return await TicketModel.create(ticket);
  }

  async inProgress(id: number): Promise<unknown> {
    if (typeof id !== 'number') {
      return {
        message: 'id should be a number',
      };
    }
    return await TicketModel.inProgress(id);
  }

  async complete(id: number): Promise<unknown> {
    if (typeof id !== 'number') {
      return {
        message: 'id should be a number',
      };
    }
    return await TicketModel.complete(id);
  }
}

export default new TicketController();
