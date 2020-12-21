import {Session, Ticket} from "../entities";
import {Cost, Currencies, TicketId} from "../values";



export default class TicketFactory {
  constructor(){}

  createTicket(session: Session, ticketCost: number, currency: Currencies): Ticket {
    const ticket = new Ticket();
    ticket.id = TicketId.getNext();
    ticket.isSold = false;
    ticket.session = session;
    ticket.cost = Cost.of(ticketCost, currency);
    return ticket;
  }
}




