import {ICinemaWithTicketRepository} from "../repositories/CinemaWithTicketRepository";
import CinemaId from "../values/CinemaId";
import {SessionId} from "../values";
import {IPlainCinemaAggregationRepository} from "../repositories/PlainCinemaAggregationRepository";

export class CinemaService {
  constructor(
    private _cinemasWithTickets: ICinemaWithTicketRepository,
    private _cinemas: IPlainCinemaAggregationRepository,
  ) {}

  sellTicket(id: CinemaId, sessionId: SessionId): void{
      const cinema = this._cinemasWithTickets.getById(id);
      //cinema.buyTicket(sessionId);
      this._cinemasWithTickets.updateById(id, cinema);
  }

  changeCinemaName(id:CinemaId ,name:string):void {
    const cinema = this._cinemas.getById(id);
    //cinema.name = name;
    //this._cinemas.update(cinema);
  }
}
