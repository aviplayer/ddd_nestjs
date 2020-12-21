import {Cinema, Movie, Session} from "../entities";
import TicketFactory from "./TicketFactory";
import {Currencies} from "../values";

export default class SessionFactory {
  private ticketFactory: TicketFactory;
  static createSession(movie: Movie, time: Date, cinema: Cinema, numberOfTickets: number, ticketCost: number, currency: Currencies): Session {
    const session: Session = new Session();
    session.movie = movie;
    session.time = time;
    session.cinema = cinema;
    for (let i = 0; i < numberOfTickets; i++) {
      const ticketFactory = new TicketFactory();
      session.tickets.push(ticketFactory.createTicket(session, ticketCost, currency));
    }
    return session;
  }
}
