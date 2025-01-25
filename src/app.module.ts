import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  initSequelizeCLS,
  SequelizeTransactionalModule,
} from 'sequelize-transactional-decorator';
import { AccountPersistenceEntity } from './account/adapters/out/persistence/account.entity';

@Module({
  imports: [
    AccountModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        initSequelizeCLS();

        return {
          dialect: 'postgres',
          host: 'localhost',
          port: configService.get<number>('DATABASE_PORT'),
          username: configService.get<string>('DATABASE_USER'),
          password: configService.get<string>('DATABASE_PASSWORD'),
          database: 'hex',
          models: [AccountPersistenceEntity],
        };
      },
    }),
    SequelizeTransactionalModule.register(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
