import { TicketStatus } from './TicketStatus';

export default class TicketDTO {
  id: number | null;
  topic: string;
  message: string;
  status: TicketStatus;
  resolution: string | null;
  cancelledReason: string | null;

  constructor(
    _id: number | null,
    _topic: string,
    _message: string,
    _status: TicketStatus,
    _resolution: string | null,
    _cancelledReason: string | null,
  ) {
    this.id = _id || null;
    this.topic = _topic || 'Тема обращения';
    this.message = _message || 'Текст обращения';
    this.status = _status || TicketStatus.NEW;
    this.resolution = _resolution || null;
    this.cancelledReason = _cancelledReason || null;
  }
}
