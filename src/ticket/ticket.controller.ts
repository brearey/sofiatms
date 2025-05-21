import { ITicket, TicketStatus } from './ticket.types';

function create(topic: string, message: string): ITicket {
  const ticket: ITicket = {
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
