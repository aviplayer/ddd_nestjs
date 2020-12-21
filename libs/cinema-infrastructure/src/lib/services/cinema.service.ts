import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Cinema} from '../models/Cinema';
import {
  CinemaFactory,
  CinemaId,
  IPlainCinemaAggregationRepository,
  PlainCinemaAggregation
} from "@cinema/cinema-domain";

@Injectable()
export class CinemaService implements IPlainCinemaAggregationRepository {
  constructor(
    @InjectModel(Cinema)
    private readonly cinemaModel: typeof Cinema
  ) {
  }

  async get(): Promise<PlainCinemaAggregation[]> {
    
    return this.cinemaModel.findAll()
      .then((models) => {
        const aggregationsCimemas: PlainCinemaAggregation[] = new Array<PlainCinemaAggregation>();
        models.forEach((cinemaModel) => {
          const cinemaId: CinemaId = new CinemaId(cinemaModel.id.toString());
          aggregationsCimemas.push(CinemaFactory.createCinema(
            cinemaId,
            cinemaModel.name,
            cinemaModel.numberofseats
          ))
        });
        return aggregationsCimemas;
      });
  }

  async getById(cinemaId: CinemaId): Promise<PlainCinemaAggregation> {
    const id = parseInt(cinemaId.value, 0);
    const cinemaModel = await this.cinemaModel.findOne({
      where: {
        id,
      },
    });

    const cinemaID = new CinemaId(cinemaModel.id.toString());
    return CinemaFactory.createCinema(
      cinemaID,
      cinemaModel.name,
      cinemaModel.numberofseats
    );

  }

  async create(cinema: PlainCinemaAggregation) {
    const newCinema = new Cinema();
    newCinema.name = cinema.name;
    newCinema.numberofseats = cinema.numberofseats;
    await newCinema.save();
  }
}
