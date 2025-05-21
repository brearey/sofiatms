enum TicketStatus {
  NEW,
  IN_PROGRESS,
  COMPLETED,
  CANCELLED,
}

interface ITicket {
  id: number | null;
  topic: string;
  message: string;
  status: TicketStatus;
  resolution: string | null;
  cancelledReason: string | null;
}

export {
  TicketStatus,
  ITicket
}