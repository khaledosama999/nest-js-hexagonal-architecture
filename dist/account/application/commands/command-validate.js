"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandValidate = void 0;
const common_1 = require("@nestjs/common");
class CommandValidate {
    constructor(schema) {
        this.schema = schema;
    }
    validate(input) {
        const result = this.schema.validate(input, { allowUnknown: false });
        if (result.error) {
            throw new common_1.BadRequestException(result.error);
        }
    }
}
exports.CommandValidate = CommandValidate;
//# sourceMappingURL=command-validate.js.map