import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {CinemaService} from './services/cinema.service';
import { PlainCinemaAggregation, CinemaFactory} from '@cinema/cinema-domain'
import {Cinema} from "./models/Cinema";

@Module({
  imports: [
    PlainCinemaAggregation,
    CinemaFactory,
    SequelizeModule.forFeature([
      Cinema
    ]),
  ],
  providers: [
    CinemaService
    ],
  exports: [SequelizeModule, CinemaService],
})
export class AppModule {
}
