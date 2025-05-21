import { Ticket, TicketStatus } from './ticket.types';

function create(topic: string, message: string): Ticket {
  const ticket: Ticket = {
    id: null,
    topic: topic,
    message: message,
    status: TicketStatus.NEW,
    resolution: null,
    cancelledReason: null
  };
  return ticket;
}

export {
  create
}
