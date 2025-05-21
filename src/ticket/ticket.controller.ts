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
      cancelledReason: null
    };
    return await TicketModel.create(ticket);
  }
}

export default new TicketController()
