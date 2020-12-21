import Session from "./Session";
import Cinema from "./Cinema";
import MovieId from "../values/MovieId";

export default class Movie {
  id: MovieId
  name: string;
  duration: number;
  cinemas: Array<Cinema>;
  sessions: Array<Session>;

  constructor() {
    this.cinemas = [];
    this.sessions = [];
  }

}
