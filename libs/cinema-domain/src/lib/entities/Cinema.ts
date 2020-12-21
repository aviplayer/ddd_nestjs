import {SessionFactory} from "../factories";
import Movie from "./Movie";
import Session from "./Session";
import {CinemaId, Currencies, SessionId} from "../values";
import {Ticket} from "./index";

export default class Cinema {
  id: CinemaId
  name: string;
  numberofseats: number;
  movies: Array<Movie>;
  sessions: Array<Session>;

  constructor() {
    this.movies = [];
    this.sessions = [];
  }

  changeName(name: string) {
    this.name = name;
  }

  startMovie(movie: Movie, time: Date, ticketCost: number, currency: Currencies): void {
    this.movies.push(movie);

    const session = SessionFactory.createSession(movie, time, this, this.numberofseats, ticketCost, currency);

    this.sessions.push(session);

    movie.sessions.push(session);
    movie.cinemas.push(this);
  }

  // getFirstFreeTicket(): Ticket {
  //   for (let i = 0; i < this.tickets.length; i++) {
  //     const ticket = this.tickets[i];
  //     if (ticket.isSold) {
  //       return ticket;
  //     }
  //   }
  // }

  // buyTicket(sessionId: SessionId) {
  //   const session = this.sessions.find(s => s.id === sessionId);
  //   session.buyTicket();
  // }
}
