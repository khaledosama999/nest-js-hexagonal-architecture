"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const account_module_1 = require("./account/account.module");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_transactional_decorator_1 = require("sequelize-transactional-decorator");
const account_entity_1 = require("./account/adapters/out/persistence/account.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            account_module_1.AccountModule,
            config_1.ConfigModule.forRoot(),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    (0, sequelize_transactional_decorator_1.initSequelizeCLS)();
                    return {
                        dialect: 'postgres',
                        host: 'localhost',
                        port: configService.get('DATABASE_PORT'),
                        username: configService.get('DATABASE_USER'),
                        password: configService.get('DATABASE_PASSWORD'),
                        database: 'hex',
                        models: [account_entity_1.AccountPersistenceEntity],
                    };
                },
            }),
            sequelize_transactional_decorator_1.SequelizeTransactionalModule.register(),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map