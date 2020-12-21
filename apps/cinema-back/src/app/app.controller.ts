import {Controller, Get, Inject, Param} from '@nestjs/common';
import {CinemaId, IPlainCinemaAggregationRepository, PlainCinemaAggregation} from "@cinema/cinema-domain";


@Controller()
export class AppController {
  constructor(@Inject('IPlainCinemaAggregationRepository')private readonly cinemaService: IPlainCinemaAggregationRepository) {
  }

  @Get('cinemas/:id')
  getCinema(@Param('id') id: string): Promise<PlainCinemaAggregation> {
    const idC: CinemaId = new CinemaId(id);
    return this.cinemaService.getById(idC);
  }

  @Get('cinemas')
  getCinemas(): Promise<PlainCinemaAggregation[]> {
     return this.cinemaService.get();
   }
}
