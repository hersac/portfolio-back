import { Module } from '@nestjs/common';
import { ExperienciasService } from './experiencias.service';
import { ExperienciasController } from './experiencias.controller';

@Module({
  providers: [ExperienciasService],
  controllers: [ExperienciasController]
})
export class ExperienciasModule {}
