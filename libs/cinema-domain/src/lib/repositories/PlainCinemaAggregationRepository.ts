import {PlainCinemaAggregation} from "../aggregations/PlainCinemaAggregation";
import CinemaId from "../values/CinemaId";

export interface IPlainCinemaAggregationRepository {
  get(): Promise<PlainCinemaAggregation[]>;
  getById(id: CinemaId): Promise<PlainCinemaAggregation>;
  create(cinema: PlainCinemaAggregation): void;
}
