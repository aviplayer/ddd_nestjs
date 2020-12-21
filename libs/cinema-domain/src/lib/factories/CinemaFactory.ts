import {Cinema} from "../entities";
import {CinemaId} from "../values";
import Movie from "../entities/Movie";
import Session from "../entities/Session";
;

export default class CinemaFactory {
  static createCinema(id: CinemaId, name: string, numberOfSits: number): Cinema {
    const cinema: Cinema = new Cinema();
    cinema.id = id;
    cinema.name = name;
    cinema.numberofseats = numberOfSits;
    cinema.movies = [];
    cinema.sessions = [];
    return cinema;
  }
}
