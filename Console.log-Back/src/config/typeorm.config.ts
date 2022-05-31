import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnviromentConfigModule } from './enviroment-config/enviroment-config.module';
import { EnviromentConfigService } from './enviroment-config/enviroment-config.service';

export const getTypeOrmModuleOptions = (
  config: EnviromentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    autoLoadEntities: true,
    synchronize: true,
  } as TypeOrmModuleOptions);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnviromentConfigModule],
      inject: [EnviromentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
@Injectable()
export class TypeOrmConfigModule {}
