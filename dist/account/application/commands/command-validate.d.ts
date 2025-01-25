import Joi from 'joi';
export declare abstract class CommandValidate<T> {
    private readonly schema;
    constructor(schema: Joi.Schema);
    validate(input: T): void;
}
