import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnviromentConfigService } from './enviroment-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
  ],
  providers: [EnviromentConfigService],
  exports: [EnviromentConfigService],
})
export class EnviromentConfigModule {}
