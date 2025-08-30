import { Test, TestingModule } from '@nestjs/testing';
import { TecnologiasService } from './tecnologias.service';

describe('TecnologiasService', () => {
  let service: TecnologiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TecnologiasService],
    }).compile();

    service = module.get<TecnologiasService>(TecnologiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
