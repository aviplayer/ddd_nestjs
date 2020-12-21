import Cinema from "./Cinema";
import Movie from "./Movie";
import Ticket from "./Ticket";
import {SessionId} from "../values";


export default class Session {
  id: SessionId;
  cinema: Cinema;
  time: Date;
  movie: Movie;
  tickets: Array<Ticket>;

  constructor() {
    this.tickets = [];
  }

  // buyTicket () {
  //   const freeTicket = this.tickets.find(t => !t.isSold);
  // }
}
