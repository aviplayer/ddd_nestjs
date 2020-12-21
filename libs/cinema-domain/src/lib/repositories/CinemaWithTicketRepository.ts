import {CinemaWithTicketsAggregation} from "../aggregations/CinemaWithTicketAggregation";
import {CinemaId} from "../values";

export interface ICinemaWithTicketRepository {
  get(): CinemaWithTicketsAggregation[];

  getById(cinemaId: CinemaId): CinemaWithTicketsAggregation;

  updateById(cinemaId: CinemaId, cinemaAggregation: CinemaWithTicketsAggregation): void;

  deleteById(cinemaId);
}
