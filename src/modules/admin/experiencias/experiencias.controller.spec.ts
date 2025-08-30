import { Test, TestingModule } from '@nestjs/testing';
import { ExperienciasController } from './experiencias.controller';

describe('ExperienciasController', () => {
  let controller: ExperienciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperienciasController],
    }).compile();

    controller = module.get<ExperienciasController>(ExperienciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
