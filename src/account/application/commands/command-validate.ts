import { BadRequestException } from '@nestjs/common';
import Joi from 'joi';

export abstract class CommandValidate<T> {
  constructor(private readonly schema: Joi.Schema) {}
  validate(input: T) {
    const result = this.schema.validate(input, { allowUnknown: false });

    if (result.error) {
      throw new BadRequestException(result.error);
    }
  }
}
