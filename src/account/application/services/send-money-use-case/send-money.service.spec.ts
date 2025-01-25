import { Test, TestingModule } from '@nestjs/testing';
import { SendMoneyService } from './send-money.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { LoadAccountPort } from '../../ports/out/presistence/load-account.port';
import { UpdateBalancePort } from '../../ports/out/presistence/update-balance.port';
import { SendMoneyCommand } from '../../commands/send-money-command.ts/send-money.command';
import { Account } from 'src/account/domain/entities/Account';

jest.mock('sequelize-transactional-decorator', () => ({
  Transactional: () => () => ({}),
}));

describe('SendMoneyService', () => {
  let service: SendMoneyService;
  let loadAccountPort: LoadAccountPort;
  let updateBalancePort: UpdateBalancePort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SendMoneyService,
        {
          provide: LoadAccountPort,
          useValue: {
            getById: jest.fn(),
          },
        },
        {
          provide: UpdateBalancePort,
          useValue: {
            updateBalance: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SendMoneyService>(SendMoneyService);
    loadAccountPort = module.get<LoadAccountPort>(LoadAccountPort);
    updateBalancePort = module.get<UpdateBalancePort>(UpdateBalancePort);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('sendMoney', () => {
    it('should throw NotFoundException if source or target account is not found', async () => {
      jest.spyOn(loadAccountPort, 'getById').mockResolvedValueOnce(null);

      const command = new SendMoneyCommand('sourceId', 'targetId', 100);

      await expect(service.sendMoney(command)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw BadRequestException if source account has insufficient funds', async () => {
      const sourceAccount = new Account('sourceId', 50);
      const targetAccount = new Account('targetId', 1000);

      jest
        .spyOn(loadAccountPort, 'getById')
        .mockResolvedValueOnce(sourceAccount);
      jest
        .spyOn(loadAccountPort, 'getById')
        .mockResolvedValueOnce(targetAccount);

      const command = new SendMoneyCommand('sourceId', 'targetId', 100);

      await expect(service.sendMoney(command)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should withdraw from source account and deposit to target account', async () => {
      const sourceAccount = new Account('sourceId', 1000);
      const targetAccount = new Account('targetId', 1000);

      jest
        .spyOn(loadAccountPort, 'getById')
        .mockResolvedValueOnce(sourceAccount);
      jest
        .spyOn(loadAccountPort, 'getById')
        .mockResolvedValueOnce(targetAccount);

      const command = new SendMoneyCommand('sourceId', 'targetId', 100);

      await service.sendMoney(command);

      expect(sourceAccount.getBalance()).toBe(900);
      expect(targetAccount.getBalance()).toBe(1100);
    });

    it('should call updateBalance on both accounts', async () => {
      const sourceAccount = new Account('sourceId', 1000);
      const targetAccount = new Account('targetId', 1000);

      jest
        .spyOn(loadAccountPort, 'getById')
        .mockResolvedValueOnce(sourceAccount);
      jest
        .spyOn(loadAccountPort, 'getById')
        .mockResolvedValueOnce(targetAccount);

      const command = new SendMoneyCommand('sourceId', 'targetId', 100);

      await service.sendMoney(command);

      expect(updateBalancePort.updateBalance).toHaveBeenCalledWith(
        sourceAccount,
        900,
      );
      expect(updateBalancePort.updateBalance).toHaveBeenCalledWith(
        targetAccount,
        1100,
      );
    });
  });
});
