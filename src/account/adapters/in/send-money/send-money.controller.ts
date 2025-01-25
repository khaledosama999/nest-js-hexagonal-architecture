import { Body, Controller, Post, Res, ValidationPipe } from '@nestjs/common';
import { SendMoneyDTO } from './send-money.dto';
import { SendMoneyUseCase } from 'src/account/application/ports/in/send-money.use-case';
import { Response } from 'express';

@Controller('account:send-money')
export class SendMoneyController {
  constructor(private readonly sendMoneyUseCase: SendMoneyUseCase) {}

  @Post()
  async sendMoney(
    @Body(new ValidationPipe({ transform: true })) body: SendMoneyDTO,
    @Res() res: Response,
  ) {
    await this.sendMoneyUseCase.sendMoney(body.toSendMonyCommand());
    res.status(200).json({ message: 'Money sent' });
  }
}
