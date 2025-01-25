import { SendMoneyDTO } from './send-money.dto';
import { SendMoneyUseCase } from 'src/account/application/ports/in/send-money.use-case';
import { Response } from 'express';
export declare class SendMoneyController {
    private readonly sendMoneyUseCase;
    constructor(sendMoneyUseCase: SendMoneyUseCase);
    sendMoney(body: SendMoneyDTO, res: Response): Promise<void>;
}
