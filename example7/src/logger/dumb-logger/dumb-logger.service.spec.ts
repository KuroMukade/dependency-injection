import { Test, TestingModule } from '@nestjs/testing';
import { DumbLoggerService } from './dumb-logger.service';

describe('DumbLoggerService', () => {
  let service: DumbLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DumbLoggerService],
    }).compile();

    service = module.get<DumbLoggerService>(DumbLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
