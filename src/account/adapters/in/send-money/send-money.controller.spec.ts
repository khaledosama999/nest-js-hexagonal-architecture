import { Test, TestingModule } from '@nestjs/testing';
import { SendMoneyController } from './send-money.controller';

describe('SendMoneyController', () => {
  let controller: SendMoneyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendMoneyController],
    }).compile();

    controller = module.get<SendMoneyController>(SendMoneyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
