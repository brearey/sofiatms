import TicketDTO from './TicketDTO';
import {TicketStatus} from './TicketStatus';

export function create(): TicketDTO {
  return new TicketDTO(
      1,
      'Docker',
      'How unset sudo from docker',
      TicketStatus.NEW,
      null,
      null,
  );
}
