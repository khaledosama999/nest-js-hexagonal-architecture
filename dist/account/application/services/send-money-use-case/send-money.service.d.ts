import { SendMoneyUseCase } from '../../ports/in/send-money.use-case';
import { LoadAccountPort } from '../../ports/out/presistence/load-account.port';
import { UpdateBalancePort } from '../../ports/out/presistence/update-balance.port';
import { SendMoneyCommand } from '../../commands/send-money-command.ts/send-money.command';
export declare class SendMoneyService extends SendMoneyUseCase {
    private readonly loadAccountPort;
    private readonly updateBalancePort;
    constructor(loadAccountPort: LoadAccountPort, updateBalancePort: UpdateBalancePort);
    sendMoney(sendMoneyCommand: SendMoneyCommand): Promise<boolean>;
}
