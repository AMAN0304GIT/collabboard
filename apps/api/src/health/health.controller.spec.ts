import { Test } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    controller = moduleRef.get(HealthController);
  });

  it('reports status ok', () => {
    expect(controller.check().status).toBe('ok');
  });

  it('includes a valid ISO timestamp', () => {
    const { time } = controller.check();
    expect(new Date(time).toISOString()).toBe(time);
  });
});