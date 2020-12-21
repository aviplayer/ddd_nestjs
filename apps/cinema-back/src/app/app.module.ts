import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AppModule as CinemaInfraModule, CinemaService} from "@cinema/cinema-infrastructure";
import {CinemaId} from '@cinema/cinema-domain';
import {SequelizeModule} from '@nestjs/sequelize';


@Module({
  imports: [
    CinemaInfraModule,
    CinemaId,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'changeme',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,
      define: {
              timestamps: false
          }
    }),],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'IPlainCinemaAggregationRepository',
      useClass: CinemaService
    }
  ]
})
export class AppModule {
}
