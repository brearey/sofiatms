import TicketDTO from './TicketDTO';
import {TicketStatus} from './TicketStatus';

export function create(topic: string, message: string): TicketDTO {
  return new TicketDTO(
      1,
      topic,
      message,
      TicketStatus.NEW,
      null,
      null,
  );
}
